import tel from './img/Group 329 (1).png'


function Page6 () {
    return(
        <div className="flex-box">
            <div className='top'>
                <h1>Рассчитать стоимость</h1>
                <p>Если вам не удалось найти то, что искали, вы всегда можете воспользоваться автоматическим расчетом стоимость заказа на маркетплейсе Poizon, включая комиссию сервиса и доставку.</p>
                <div className='a'>
                    <article>
                        <h2>1</h2>
                        <p>Подробная, пошаговая статья о том, как установить приложение Poizon</p>
                    </article>
                    <article>
                        <h2>2</h2>
                        <p>Напишите нам в Telegram или WhatsApp какую вещь хотите купить</p>
                    </article>
                </div>
                    <button className="btn-swiper">Цена</button>
            </div>
                <div className="rev">
                    <img src={tel} alt="" />
                </div>
        </div>
    )
}
export default Page6;