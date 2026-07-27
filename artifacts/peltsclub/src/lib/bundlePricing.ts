/**
 * Bundle pricing: buy 2, get 1 free.
 * For every group of 3 units, 1 is free.
 *
 * @param totalUnits - total number of priced units in the cart
 * @returns number of units that should be treated as free
 */
export function calcFreeCount(totalUnits: number): number {
  if (totalUnits <= 0) return 0;
  return Math.floor(totalUnits / 3);
}
