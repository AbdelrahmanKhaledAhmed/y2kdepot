// Best-value bundle math:
// every 5 units -> 2 free (buy 3 get 2 free)
// remaining units, every 3 -> 1 free (buy 2 get 1 free)
export function calcFreeCount(totalQty: number): number {
  const groupsOf5 = Math.floor(totalQty / 5);
  const remainderAfter5 = totalQty % 5;
  const groupsOf3 = Math.floor(remainderAfter5 / 3);
  return groupsOf5 * 2 + groupsOf3 * 1;
}
