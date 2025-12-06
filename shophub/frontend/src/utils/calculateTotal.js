export default function calculateTotal(cart) {
  if (!Array.isArray(cart)) return 0;

  return cart.reduce((sum, item) => {
    const price = item?.price ?? 0;
    const quantity = item?.quantity ?? 0;
    return sum + price * quantity;
  }, 0);
}
