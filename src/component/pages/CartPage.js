import Cart from "../Cart/Cart";
import AdSellOf from "../AdSellOf/AdSellOf";
import AdShop from "../AdShop/AdShop";

const CartPage = () => {
  return (
    <>
      <AdSellOf discount={10} product={"abonando en efectivo!"} />
      <AdShop />
      <Cart />
    </>
  );
};
export default CartPage;
