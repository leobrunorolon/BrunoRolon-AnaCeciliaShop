import { Link } from "react-router-dom";
import AdShop from "../AdShop/AdShop";
import "./CategoryAll.css";
const CategoryAll = () => {
  return (
    <>
      <AdShop />
      <div className="CategoryAll">
        <Link className="CategoryAll--contain" to="/category/electronics">
          <h1 className="CategoryAll--title">Electronicos</h1>
          <div classname="CategoryAll--imgContain">
            <img
              className="CategoryAll--img"
              src="https://http2.mlstatic.com/D_NQ_NP_692141-MLA48751665450_012022-O.webp"
              alt=""
            />
          </div>
        </Link>
        <Link className="CategoryAll--contain" to="/category/barberia">
          <h1 className="CategoryAll--title">Barberia</h1>
          <div classname="CategoryAll--imgContain">
            <img
              className="CategoryAll--img"
              src="https://http2.mlstatic.com/D_NQ_NP_948725-MLA32878014916_112019-O.webp"
              alt=""
            />
          </div>
        </Link>
        <Link className="CategoryAll--contain" to="/category/barberia">
          <h1 className="CategoryAll--title">Alisados</h1>
          <div classname="CategoryAll--imgContain">
            <img
              className="CategoryAll--img"
              src="https://http2.mlstatic.com/D_NQ_NP_850419-MLA40161783555_122019-O.webp"
              alt=""
            />
          </div>
        </Link>
        <Link className="CategoryAll--contain" to="/category/barberia">
          <h1 className="CategoryAll--title">Cabello</h1>
          <div classname="CategoryAll--imgContain">
            <img
              className="CategoryAll--img"
              src="https://http2.mlstatic.com/D_NQ_NP_707392-MLA31063111896_062019-O.webp"
              alt=""
            />
          </div>
        </Link>
      </div>
    </>
  );
};
export default CategoryAll;
