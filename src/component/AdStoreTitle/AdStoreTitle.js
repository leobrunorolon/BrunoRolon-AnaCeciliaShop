import "./AdStoreTitle.css";
const AdStoreTitle = ({ text }) => {
  return (
    <>
      <h1 className="AdStoreTitle">
        Ana Cecilia <span className="AdStoreStore">STORE</span>{" "}
        <div className="AdStoreText">{text}</div>
      </h1>
    </>
  );
};
export default AdStoreTitle;
