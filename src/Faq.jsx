
import { useState } from "react";
function Faq () {
    const [active, setActive] = useState(null)
    const click =(a) =>{
        setActive(active === a ? null : a)
      }
      
    return(
        <>
            <div className="faq">
                <p>Главная / FAQ</p>
                <h5>FAQ</h5>
                <h2>ОБЩИЕ ВОПРОСЫ</h2>
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
                <h2>ТОВАРЫ</h2>
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
                <h2>ДОСТАВКА</h2>
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
        </>
    )
}
export default Faq;