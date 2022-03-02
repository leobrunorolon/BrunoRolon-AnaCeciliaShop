import Cart from "../Cart/Cart";
import AdSellOf from "../AdSellOf/AdSellOf";
const CartPage = () => {
  return (
    <>
      <AdSellOf discount={10} product={"abonando en efectivo!"} />
      <Cart />
    </>
  );
};
export default CartPage;
