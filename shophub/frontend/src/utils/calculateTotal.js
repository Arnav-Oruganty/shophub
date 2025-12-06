<<<<<<< HEAD
function calculateTotal(cart) {
=======
export default function calculateTotal(cart) {
>>>>>>> ec696a6c767045ab64e81093db464f61a66388a5
  if (!Array.isArray(cart)) return 0;

  return cart.reduce((sum, item) => {
    const price = item?.price ?? 0;
    const quantity = item?.quantity ?? 0;
    return sum + price * quantity;
  }, 0);
}
<<<<<<< HEAD

export { calculateTotal };
export default calculateTotal;
=======
>>>>>>> ec696a6c767045ab64e81093db464f61a66388a5
