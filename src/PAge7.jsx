import icons from './icon/Vector (Stroke) (4).png'
import icons2 from './icon/Vector (Stroke) (5).png'
import icons3 from './icon/Vector (Stroke) (6).png'
function Page7(){
    return(
        <div className="box7">
            <div>
                <h1>О интернет-магазине xwear</h1>
                <p className='p'>Команда XWEAR предоставляет услугу доставки только оригинальных товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши клиенты экономили более 40% на каждой покупке. </p>
                <p className='p'>Работаем без посредников, благодаря чему можем предоставлять лучшую цену. Быстрая, бесплатная доставка. </p>
                <p className='p'>Сайт, на котором можно будет удобно оформить покупку, не скачивая китайское мобильное приложение Poizon, с удобной фильтрацией огромного количества товаров, а так же с возможностью сразу увидеть окончательную цену товара.</p>
            </div>
            <div className="box-box7">
                <div>
                    <img src={icons} alt="" />
                    <article>
                        <h4>Бесплатная доставка до России</h4>
                        <p>Доставим вам заказ абсолютно бесплатно до России</p>
                    </article>
                </div>
                <div>
                    <img src={icons2} alt="" />
                    <article>
                        <h4>мы Работаем без посредников</h4>
                        <p>Между нами и клиентом нет третьего лишнего</p>
                    </article>
                </div>
                <div>
                    <img src={icons3} alt="" />
                    <article>
                        <h4>простота в заказе и использовании</h4>
                        <p>МДля заказа с Poizon не нужно никаких приложений</p>
                    </article>
                </div>
            </div>
        </div>
    )
}
export default Page7;