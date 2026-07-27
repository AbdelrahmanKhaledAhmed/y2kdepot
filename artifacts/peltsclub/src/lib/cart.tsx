import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { calcFreeCount } from './bundlePricing';

export interface CartItem {
  cartId: string;
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  qty: number;
}

interface AddItemInput {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: AddItemInput, qty?: number) => void;
  removeItem: (cartId: string) => void;
  updateQty: (cartId: string, qty: number) => void;
  clearCart: () => void;
  subtotal: number;
  discount: number;
  total: number;
  count: number;
  freeQtyById: Record<string, number>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product: AddItemInput, qty: number = 1) => {
    const cartId = `${product.id}-${product.size}`;
    setItems((prev) => {
      const existing = prev.find((item) => item.cartId === cartId);
      if (existing) {
        return prev.map((item) =>
          item.cartId === cartId ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, cartId, qty }];
    });
  }, []);

  const removeItem = useCallback((cartId: string) => {
    setItems((prev) => prev.filter((item) => item.cartId !== cartId));
  }, []);

  const updateQty = useCallback((cartId: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((item) => item.cartId !== cartId)
        : prev.map((item) => (item.cartId === cartId ? { ...item, qty } : item))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items]
  );

  const total = useMemo(() => {
    // expand into individual priced units
    const units: number[] = [];
    items.forEach((item) => {
      for (let i = 0; i < item.qty; i++) units.push(item.price);
    });
    // most expensive units are the ones the customer pays for
    units.sort((a, b) => b - a);

    const freeCount = calcFreeCount(units.length);
    const paidUnits = units.slice(0, units.length - freeCount);
    return paidUnits.reduce((sum, price) => sum + price, 0);
  }, [items]);

  const discount = subtotal - total;

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.qty, 0),
    [items]
  );
  const freeQtyById = useMemo(() => {
    const units: { cartId: string; price: number }[] = [];
    items.forEach((item) => {
      for (let i = 0; i < item.qty; i++) units.push({ cartId: item.cartId, price: item.price });
    });
    units.sort((a, b) => b.price - a.price);
    const freeCount = calcFreeCount(units.length);
    const freeUnits = units.slice(units.length - freeCount);
    const map: Record<string, number> = {};
    freeUnits.forEach((u) => {
      map[u.cartId] = (map[u.cartId] || 0) + 1;
    });
    return map;
  }, [items]);
  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        subtotal,
        discount,
        total,
        count,
        freeQtyById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
