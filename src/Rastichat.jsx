import { useState } from "react";
import telefon from "./img/image 2.png";
import telegram from './icon/telegram.png'
import waysap from './icon/watsap.png'
function Rastichat() {
    const [click , setClick] = useState(true)
    
  return (
    <>
      <div className="rastichat">
        <div>
          <p className="next-page">Главная / Рассчитать стоимость</p>
          <h1>Рассчитать стоимость</h1>
          <p>
            Мы ежедневно добавляем новые товары на сайт, но если вам не удалось
            найти то, что искали, вы всегда можете воспользоваться
            автоматическим расчетом стоимость заказа на маркетплейсе Poizon,
            включая комиссию сервиса и доставку. Если у вас еще нет приложения
            Poizon, тогда можете посмотреть статью ниже. В приложении есть любые
            кроссовки и одежда дешевле на 40% чем в РФ
          </p>
          <p>
            Если вы не хотите устанавливать приложение, вы всегда можете
            написать нам в Telegram или WhatsApp, какую вещь хотите купить. Для
            этого напишите ее название или пришлите фотографию к нам в чат. Наши
            операторы сами найдут нужный вам товар и рассчитают его стоимость
          </p>
          
        </div>
        <div className="border">
          <article>
            <h6>Как установить приложение Poizon</h6>
            <p>Подробная, пошаговая инструкция по установке приложения Poizon</p>
            <h3>Читать полностью →</h3>
          </article>
          <img src={telefon} alt="" />
        </div>
      </div>
            <article className="article-btn">
                <button className={ click === true ?"rastichat-btn" :"rastichat-btn2"}  onClick={() => setClick(true)} >Калькулятор →</button>
                <button className={ click === false ?"rastichat-btn" :"rastichat-btn2"} onClick={() => setClick(false)}>Написать менеджеру</button>
            </article>
        {click === true && (

            <div className="btn1-click">
            <section className="paddings">
              <h2>Размер</h2>
              <div className="one">
                <p>Укажите размер:</p>
                <h4> 43</h4>
              </div>
              <h2>Цена, ¥</h2>
              <div className="two">
                <p>Укажите цену товара:</p>
                <h4>499</h4>
              </div>
              <h2>Выберите категорию</h2>
              <h4>
                Выберите категорию товара для того, чтобы мы смогли правильно
                рассчитать цену доставки.
              </h4>
              <div>
                <p>
                  Выберите категорию товара для того, чтобы мы смогли
                  правильно рассчитать цену доставки.
                </p>
              </div>
              <button className="rastichat-btn">
                Рассчитать стоимость →
              </button>
            </section>
            <article id="boxRas">
              <h3>Итоговая стоимость</h3>
              <h3>531 ¥</h3>
            </article>
      </div>
        )}
        { click === false && (
            <div className="btn2-click">
            <section className="paddings">
              <h2>Напишите нам в мессенджеры</h2>
              <div className="flex-ras">
                <article>
                    <a href="https://t.me/shakhrux_iq">
                      <img src={telegram} alt="" />
                    </a>
                    <h4>Написать в Telegram</h4>
                </article>
                <article>
                    <a href="https://t.me/shakhrux_iq">
                      <img src={waysap} alt="" />
                    </a>
                    <h4>Написать в whatsapp</h4>
                </article>
              </div>
              <div className="form-container">
                <h2>ИЛИ ЗАПОЛНИТЕ ФОРМУ:</h2>
                <form>
                    <div className="form-group">
                    <label htmlFor="">Введите название товара:</label>
                    <input type="text" placeholder="Например кроссовки Nike Air Max" />
                    </div>
                    <div className="form-group">
                    <label>Размер:</label>
                    <input type="text" placeholder="Например EU 38,5" />
                    </div>
                    <div className="form-group">
                    <label>Ваше имя:</label>
                    <input type="text" placeholder="Введите имя" />
                      </div>
                      <div className="form-group">
                      <label>Номер телефона:</label>
                      <input type="text" placeholder="+7 (000) 000 - 00 - 00" />
                      </div>
                      <div className="form-group">
                      <label>Email адрес:</label>
                      <input type="email" placeholder="example@myemail.com" />
                      </div>
                      <div className="form-group file-upload">
                      <label htmlFor="file-upload">Прикрепите фото товара</label>
                      <input id="file-upload" type="file" />
                      </div>
                      <button type="submit">ОТПРАВИТЬ ЗАЯВКУ</button>
                  </form>
                  <p className="privacy-policy">
                      Нажимая кнопку Отправить заявку вы соглашаетесь с{' '}
                      <a href="#">Политикой конфиденциальности</a>
                  </p>
                  </div>

            </section>
      </div>
        )}
    </>
  );
}
export default Rastichat;
