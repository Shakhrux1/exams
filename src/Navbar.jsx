import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import icon1 from "./icon/Vector (Stroke).png";
import icon2 from "./icon/Vector (Stroke) (1).png";
import icon3 from "./icon/Vector (Stroke) (2).png";
import icon4 from "./icon/Vector (Stroke) (3).png";
import burger from "./icon/burger.png";
import Page9 from "./Page9.jsx";

function Navbar() {
  const [isModalVisible, setModalVisible] = useState(false);
 

  const showHandle = () => {
    setModalVisible(true);
  };
  const [li, setLi] = useState(null);
  const list = (z) => {
    setLi(li === z ? null : z);
  };
  const hideHandle = () => {
    setModalVisible(false);
  };



  return (
    <>
      <main>
        <div className="container">
          <nav>
            <Link to="/">
              <h1>
                <span>X</span>WEAR
              </h1>
            </Link>
            <div className="img">
              <img src={burger} alt="Menu" onClick={showHandle} />
            </div>
            <ul className="ul">
              <li onClick={() => list(0)} className={li === 0 ? "lis" : ""}>
                <Link to="/adejda">Одежда</Link>
              </li>
              <li onClick={() => list(1)} className={li === 1 ? "lis" : ""}>
                <Link to="/obuv">Обувь</Link>
              </li>
              <li onClick={() => list(2)} className={li === 2 ? "lis" : ""}>
                <Link to="/accessuar">Аксессуары</Link>
              </li>
              <li onClick={() => list(3)} className={li === 3 ? "lis" : ""}>
                <Link to="/brend">Бренды</Link>
              </li>
              <li onClick={() => list(4)} className={li === 4 ? "lis" : ""}>
                <Link to="/costcal">Расчет стоимости</Link>
              </li>
              <li className="Information">
                <p>Информация</p>
                <ul className="dropdown">
                  <li>
                    <Link to="/info">Наш блог</Link>
                  </li>
                  <li>
                    <Link to="/contact">Наши контакты</Link>
                  </li>
                  <li>
                    <Link to="/blog">Доставка</Link>
                  </li>
                  <li>
                    <Link to="/payment">Оплата</Link>
                  </li>
                  <li onClick={() => list(5)} className={li === 5 ? "lis" : ""}>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <article>
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <Link to="/account">
                <img src={icon3} alt="" />
              </Link>
              <img src={icon4} alt="" />
              <p>
                11 899 ₽ <span>7</span>
              </p>
            </article>
          </nav>
        </div>
      </main>

      <header>
        <Outlet />
      </header>

      <footer>
        <Page9 />
      </footer>

      {isModalVisible && (
        <div className={`modal-overlay ${isModalVisible ? "show" : ""}`}>
          <div className="modal">
            <article>
              <svg
                style={{ width: "25px", cursor: "pointer" }}
                onClick={hideHandle}
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </article>
            <ul>
            <li onClick={() => list(0)} className={li === 0 ? 'lis' : ''}>
      <Link onClick={hideHandle} to="/adejda">
        Одежда
      </Link>
    </li>
    <li onClick={() => list(1)} className={li === 1 ? 'lis' : ''}>
      <Link onClick={hideHandle} to="/obuv">
        Обувь
      </Link>
    </li>
    <li onClick={() => list(2)} className={li === 2 ? 'lis' : ''}>
      <Link onClick={hideHandle} to="/accessuar">
        Аксессуары
      </Link>
    </li>
    <li onClick={() => list(3)} className={li === 3 ? 'lis' : ''}>
      <Link onClick={hideHandle} to="/brend">
        Бренды
      </Link>
    </li>
    <li onClick={() => list(4)} className={li === 4 ? 'lis' : ''}>
      <Link onClick={hideHandle} to="/costcal">
        Расчет стоимости
      </Link>
    </li>
    <li onClick={() => list(5)} className={`Information ${li === 5 ? 'lis' : ''}`} >
      git 
      <ul>
        <li onClick={() => list(6)} className={li === 6 ? 'lis' : ''}>
          <Link onClick={hideHandle} to="/faq">
            FAQ
          </Link>
        </li>
      </ul>
    </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
