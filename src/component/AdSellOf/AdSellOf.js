import "./AdSellOf.css";
const AdSellOf = ({ discount, product }) => {
  return (
    <>
      <div className="AdSellOf--contain">
        <p>
          Oferta del dia %{discount} en productos {product}
        </p>
      </div>
    </>
  );
};
export default AdSellOf;
