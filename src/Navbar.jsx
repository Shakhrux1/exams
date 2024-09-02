import icon1 from './icon/Vector (Stroke).png'
import icon2 from './icon/Vector (Stroke) (1).png'
import icon3 from './icon/Vector (Stroke) (2).png'
import icon4 from './icon/Vector (Stroke) (3).png'
import burder from './icon/burger.png'

function navbar () {
    return(
        <div>
            <nav>
            <h1><span>X</span>WEAR</h1>
            <div className="img">
                <img src={burder} alt="" />
            </div>
            <ul>
                <li><a href="">Одежда</a></li>
                <li><a id='Обувь' href="">Обувь</a></li>
                <li><a href="">Аксессуары</a></li>
                <li><a href="">Бренды</a></li>
                <li><a href="">Расчет стоимости</a></li>
                <li className='Information'><a href="">Информация</a>
                    <ul className="dropdown">
                        <li><a href="/info">Наш блог</a></li>
                        <li><a href="/contact">Наши контакты</a></li>
                        <li><a href="/blog">Доставка</a></li>
                        <li><a href="/faq">Оплата</a></li>
                        <li><a href="/dastafka">FAQ</a></li>
                    </ul>
                </li>
                
            </ul>
            <article>
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
                <p>11 899 ₽ <span>7</span></p>
            </article>
            </nav>
        </div>
    )

}
export default navbar;