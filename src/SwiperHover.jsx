import cet from "./img2/Rectangle 83.png";
import cet2 from "./img2/Rectangle 223 (2).png";
import cet3 from "./img2/Rectangle 22 (7).png";
import cet4 from "./img2/Rectangle 223 (4).png";
import cet5 from "./img2/Rectangle 22 (13).png";
import cet6 from "./img2/Rectangle 22 (14).png";
import cet7 from "./img2/Rectangle 22 (15).png";

import card from "./img/Frame 312.png";
import card2 from "./img/Frame 316 (1).png";
import card3 from "./img/Frame 316.png";
import ptichka from "./icon/a.svg";
import { useState } from "react";

import 'swiper/css';
import 'swiper/css/pagination';

const Hover = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [active, setActive] = useState(null)
  
  const[activeRang, setRang] =useState(0)
  const clickRang =(b) =>{
    if (activeRang !== b) {
      setRang(b);
    }
  }
  const click =(a) =>{
    setActive(active === a ? null : a)
  }
  
  return (
    <div className="tovar">
      <p>Главная / Каталог товаров / Обувь / Nike Court Zoom Cage 2</p>
      <div className="flrx">
        <div className="siwiper">
            
            <div  className={activeRang === 0 ? 'activeCeti': 'cetiActive'} style={{width:'686px', height:"auto"}}>
              <img src={cet} alt="" />
            </div>
            <div  className={activeRang === 1 ? 'activeCeti': 'cetiActive'} style={{width:'686px', height:"auto"}}>
              <img src={cet2} alt="" />
            </div>
            <div  className={activeRang === 2 ? 'activeCeti': 'cetiActive'} style={{width:'686px', height:"auto"}}>
              <img src={cet3} alt="" />
            </div>
            <div  className={activeRang === 3 ? 'activeCeti': 'cetiActive'} style={{width:'686px', height:"auto"}}>
              <img src={cet4} alt="" />
            </div>
            <div  className={activeRang === 4 ? 'activeCeti': 'cetiActive'} style={{width:'686px', height:"auto"}}>
              <img src={cet5} alt="" />
            </div>
            <div  className={activeRang === 5 ? 'activeCeti': 'cetiActive'} style={{width:'686px', height:"auto"}}>
              <img src={cet6} alt="" />
            </div>
            <div  className={activeRang === 6 ? 'activeCeti': 'cetiActive'} style={{width:'686px', height:"auto"}}>
              <img src={cet7} alt="" />
            </div>
        </div>
        <div>
          <h1>Кроссовки Nike Court Zoom Cage 2</h1>
          <h2>4 699 ₽</h2>
          <div className="grid">
              <div style={{backgroundColor:'#6ECFFF'}} onClick={() => clickRang(0)} className={activeRang === 0 ? 'click': ''}></div>
              <div style={{backgroundColor:'#0000FF'}}  onClick={() => clickRang(1)} className={activeRang === 1 ? 'click': ''}></div>
              <div style={{backgroundColor:'#000'}} onClick={() => clickRang(2)} className={activeRang === 2 ? 'click': ''}></div>
              <div style={{backgroundColor:'#fff'}} onClick={() => clickRang(3)} className={activeRang === 3 ? 'click': ''}></div>
              <div style={{backgroundColor:'#CEB593'}} onClick={() => clickRang(4)} className={activeRang === 4 ? 'click': ''}></div>
              <div style={{backgroundColor:'#008000'}} onClick={() => clickRang(5)} className={activeRang === 5 ? 'click': ''}></div>
              <div style={{backgroundColor:'#FF0000'}} onClick={() => clickRang(6)} className={activeRang === 6 ? 'click': ''}></div>
          </div>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div
            onClick={() => setActiveTab("details")}
            style={{
              padding: " 5px",
              marginRight: "25px",
              color: activeTab === "details" ? "#000" : "gray",
              borderBottom: activeTab === "details" ? "2px solid blue" : "none",
            }}
          >
            Детали
          </div>
          <div
            onClick={() => setActiveTab("delivery")}
            style={{
              padding: " 5px",
              margin: "0 20px",
              marginRight: "20px",
              color: activeTab === "delivery" ? "#000" : "gray",
              borderBottom:
                activeTab === "delivery" ? "2px solid blue" : "none",
            }}
          >
            Доставка
          </div>
          <div
            onClick={() => setActiveTab("payment")}
            style={{
              padding: " 5px",
              margin: "0 20px",
              marginRight: "20px",
              color: activeTab === "payment" ? "#000" : "gray",
              borderBottom: activeTab === "payment" ? "2px solid blue" : "none",
            }}
          >
            Оплата
          </div>
          <div
            onClick={() => setActiveTab("faq")}
            style={{
              padding: " 5px",
              margin: "0 20px",
              color: activeTab === "faq" ? "#000" : "gray",
              borderBottom: activeTab === "faq" ? "2px solid blue" : "none",
            }}
          >
            FAQ
          </div>
        </div>

        {activeTab === "details" && (
          <div className="dettall">
            <article>
              <p>Артикул</p>
              <p>46765753</p>
            </article>
            <article>
              <p>Категория</p>
              <p>Обувь</p>
            </article>
            <article>
              <p>Бренд</p>
              <p>Nike</p>
            </article>
            <article>
              <p>Модель</p>
              <p>Nike Air Force</p>
            </article>
            <article>
              <p>Цвет</p>
              <p>Голубой</p>
            </article>
            <article>
              <p>Коллаборация</p>
              <p>Nike X OFF-WHITE</p>
            </article>
          </div>
        )}
        {activeTab === "delivery" && (
          <div style={{ marginTop: "20px" }}>
            <div className="deliver">
              <h2>Доставка</h2>
              <p>
                Команда XWEAR предоставляет услугу доставки только оригинальных
                товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши
                клиенты экономили более 40% на каждой покупке. Мы ценим вас,
                поэтому постоянно работаем над логистикой, чтобы ускорить время
                доставки заказов! Все заказы отправляются из-за границы с
                возможностью доставки в любой город России, перед отправкой
                товар всегда проходит проверку на подлиность. Доставляем вещи
                из-за границы за 12-16 дней до России, включая день оплаты, с
                возможностью самовывоза из города Екатеринбург. В другие города
                отправляем СДЭКом. СДЭК оплачивается при получении. Цена
                доставки зависит от города вашего проживания, в среднем это 350
                ₽.
              </p>
              <h2>В личном кабинете вы сможете отслеживать статус заказа:</h2>
              <div className="grids">
                <div>
                  <img src={ptichka} alt="" />
                  <h2>В обработке</h2>
                  <p>Заказ ожидает подтверждения платежа.</p>
                </div>
                <div>
                  <img src={ptichka} alt="" />
                  <h2>Оплачен</h2>
                  <p>
                    Заказ оплачен и в течении дня будет выкуплен с китайского
                    маркетплейса Poizon.
                  </p>
                </div>
                <div>
                  <img src={ptichka} alt="" />
                  <h2>Доставка на склад в Китае</h2>
                  <p>Заказ выкуплен и уже направляется на наш склад в Китае.</p>
                </div>
                <div>
                  <img src={ptichka} alt="" />
                  <h2>На складе в Китае</h2>
                  <p>
                    Заказ поступил на наш склад в Китае и скоро будет отправлен
                    в Россию.
                  </p>
                </div>
                <div>
                  <img src={ptichka} alt="" />
                  <h2>Доставка на склад в РФ</h2>
                  <p>Заказ отправился на наш склад в России.</p>
                </div>
                <div>
                  <img src={ptichka} alt="" />
                  <h2>На складе в РФ</h2>
                  <p>
                    Заказ поступил на наш склад и в скором времени отправиться
                    на указанный вами адрес.
                  </p>
                </div>
                <div>
                  <img src={ptichka} alt="" />
                  <h2>Доставляется</h2>
                  <p>Заказ уже направляется на указанный вами адрес.</p>
                </div>
                <div>
                  <img src={ptichka} alt="" />
                  <h2>Завершен</h2>
                  <p>Завершен</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "payment" && (
          <div style={{ marginTop: "20px" }}>
            <div className="paymet">
              <h1>Способы оплаты:</h1>
              <p>
                Команда XWEAR предоставляет услугу доставки только оригинальных
                товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши
                клиенты экономили более 40% на каждой покупке.
              </p>
              <h2>Мы принимаем оплату банковскими картами:</h2>
              <article>
                <img src={card} alt="" />
                <img src={card2} alt="" />
                <img src={card3} alt="" />
              </article>
              <p>
                Стоимость каждого товара окончательная. В нее входит выкуп
                товара на Poizon, доставка его на наш склад в Китае, доставка из
                Китая до склада в городе Екатеринбург, все таможенные сборы и
                пошлины уже включены в стоимость.
              </p>
              <p>
                Если вам нужно отправить товар по России, вы сможете выбрать
                адрес доставки во время оформления заказа. Доставка оплачивается
                отдельно при получении посылки, обычно это не более 350 рублей.{" "}
              </p>
            </div>
          </div>
        )}
          {activeTab === "faq" && (
            <div style={{ marginTop: "20px" }}>
              <div className="faq">
                <h1>ОБЩИЕ ВОПРОСЫ</h1>
                <div>
                  <article onClick={() => click(0)}>
                    <h2>ЧЕМ ЗАНИМАЕТСЯ ВАШ ИНТЕРНЕТ-МАГАЗИН?</h2>
                    <h4 >{active ===0  ? '\u2212' : '\u002B' }</h4>
                  </article>
                  <p className={active ===0 ? 'active' : '' }>
                  Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста,
                  ознакомьтесь с нашей Политикой конфиденциальности.
                  </p>
                </div>
                <div>
                  <article  onClick={() => click(1)}>
                    <h2>ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?</h2>
                    <h4 >{active===1 ? '\u2212' : '\u002B' }</h4>
                  </article>
                  <p className={active ===1? 'active' : '' }>
                    Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста,
                    ознакомьтесь с нашей Политикой конфиденциальности.
                  </p>
                </div>
                <h1>ТОВАРЫ</h1>
                <div>
                  <article  onClick={() => click(2)}>
                    <h2>ВЫ РЕАЛИЗУЕТЕ ОРИГИНАЛЬНЫЕ ТОВАРЫ?</h2>
                    <h4 >{active===2 ? '\u2212' : '\u002B' }</h4>
                  </article>
                  <p className={active ===2? 'active' : '' }>
                    Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста,
                    ознакомьтесь с нашей Политикой конфиденциальности.
                  </p>
                </div>
                <div>
                  <article  onClick={() => click(3)}>
                    <h2>В ВАШЕМ МАГАЗИНЕ ПРЕДСТАВЛЕНЫ НОВЫЕ ТОВАРЫ?</h2>
                    <h4 >{active===3 ? '\u2212' : '\u002B' }</h4>
                  </article>
                  <p className={active ===3? 'active' : '' }>
                    Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста,
                    ознакомьтесь с нашей Политикой конфиденциальности.
                  </p>
                </div>
                <div>
                  <article  onClick={() => click(4)}>
                    <h2>ПОЧЕМУ ЦЕНА ЗАВИСИТ ОТ РАЗМЕРА?</h2>
                    <h4 >{active===4 ? '\u2212' : '\u002B' }</h4>
                  </article>
                  <p className={active ===4? 'active' : '' }>
                    Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста,
                    ознакомьтесь с нашей Политикой конфиденциальности.
                  </p>
                </div>
                <h1>ДОСТАВКА</h1>
                <div>
                  <article  onClick={() => click(5)}>
                    <h2>СКОЛЬКО ИДЕТ ДОСТАВКА?</h2>
                    <h4 >{active===5 ? '\u2212' : '\u002B' }</h4>
                  </article>
                  <p className={active ===5? 'active' : '' }>
                    Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста,
                    ознакомьтесь с нашей Политикой конфиденциальности.
                  </p>
                </div>
                <div>
                  <article  onClick={() => click(6)}>
                    <h2>МОЖНО ЛИ ВЕРНУТЬ ТОВАР?</h2>
                    <h4 >{active===6 ? '\u2212' : '\u002B' }</h4>
                  </article>
                  <p className={active ===6? 'active' : '' }>
                    Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста,
                    ознакомьтесь с нашей Политикой конфиденциальности.
                  </p>
                </div>
              </div>
            </div>
          )}
      </div>
      
    </div>
  );
};

export default Hover;
