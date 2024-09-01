import mul from './icon/Group 345.png'
import mul1 from './icon/Group 344.png'
import mul2 from './icon/Frame 13.png'
import logo from './icon/Group 40.png'
function Page9 () {
    return(
        <div className="box9">
            <div>
                <article>
                <h2>Каталог</h2>
                <p>+</p>
                </article>
                <ul>
                    <li><a href="">Одежда</a></li>
                    <li><a href="">Обувь</a></li>
                    <li><a href="">Аксессуары</a></li>
                    <li><a href="">Расчет стоимости</a></li>
                </ul>
                <a href="#Обувь" className="Page1">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div>
                <article>
                <h2>Информация</h2>
                <p>+</p>
                </article>
                <ul>
                    <li><a href="">Блог</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">Доставка</a></li>
                    <li><a href="">Оплата</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div>
                <article>
                <h2>Контакты</h2>
                <p>+</p>
                </article>
                <a href="info@xwear.info" className='a'>info@xwear.info</a>
                <h3>+7 993 608 38 85</h3>
                <h3>Мессенджеры</h3>
                <div className='article'>
                    <a href="https://t.me/shakhrux_iq">
                        <img src={mul} alt="" />
                    </a>
                    <a href="https://web.whatsapp.com/">
                        <img src={mul1} alt="" />
                    </a>
                </div>
                <h3>Наши соц.сети</h3>
                <a href="">
                    <img src={mul2} alt="" />
                </a>
            </div>
            <div>
                <h2>Подписка на новости</h2>
                <p>Будьте в курсе скидок и новостей</p>
                <form>
                    <input type="email" placeholder='Ваш email' />
                    <button>S</button>
                </form>
                <p>Подписываясь на рассылку вы соглашатесь с обработкой персональных данных</p>

            </div>
        </div>
    )
}
export default Page9;