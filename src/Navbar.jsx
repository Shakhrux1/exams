import icon1 from "./icon/Vector (Stroke).png";
import icon2 from "./icon/Vector (Stroke) (1).png";
import icon3 from "./icon/Vector (Stroke) (2).png";
import icon4 from "./icon/Vector (Stroke) (3).png";
import burder from "./icon/burger.png";
import { Outlet,Link } from "react-router-dom";
import Page9 from './PAge9.jsx'

function navbar() {
  return (
    <>
      <main>
        
          <div className="container">
            <nav>
             <Link to='/'>  <h1 >
                <span>X</span>WEAR
              </h1></Link>
              <div className="img">
                <img src={burder} alt="" />
              </div>
              <ul>
                <li>
                  <Link to="/adejda">
                  <a href="">Одежда</a></Link>
                </li>
                <li>
                  <Link to="/obuv"><a id="Обувь" href="">
                    Обувь
                  </a></Link>
                </li>
                <li>
                  <Link to='/accessuar'><a href="">Аксессуары</a></Link>
                </li>
                <li>
                  <Link to='/brend'><a href="">Бренды</a></Link>
                </li>
                <li>
                  <Link to='/costcal'><a href="">Расчет стоимости</a></Link>
                </li>
                <li className="Information">
                  <a href="">Информация</a>
                  <ul className="dropdown">
                    <li>
                      <a href="/info">Наш блог</a>
                    </li>
                    <li>
                      <a href="/contact">Наши контакты</a>
                    </li>
                    <li>
                      <a href="/blog">Доставка</a>
                    </li>
                    <li>
                    <a href="/faq">Оплата</a>
                    </li>
                    <li>
                    <Link to='/faq'> FAQ</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <article>
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <Link to='/account'><img src={icon3} alt="" /></Link>
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
        <Page9/>
      </footer>
    </>
  );
}
export default navbar;
