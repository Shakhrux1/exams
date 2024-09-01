
import ceti from './img/Rectangle 49.png'
import ceti2 from './img/Rectangle 49 (1).png'
import ceti3 from './img/Rectangle 49 (2).png'




function Page8 () {
    return(
        <div className="box8">
            <div className="flex">
                <h1>Наш блог</h1>
                <a href="больше товаров">больше товаров &rarr; </a>
            </div>
            <div className="dad">
            <div className="reletiv">
                        <img src={ceti} alt="" />
                        <h4  className='h4' >Делаем скидки на всю женскую одежду осеннего сезона </h4>
                        <p>Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.</p>
                        <article>
                            <h4>Узнать подробнее</h4>
                            <p>16 июня 2023</p>
                        </article>
                    </div>
                
                
                    <div className="reletiv">
                        <img src={ceti2} alt="" />
                        <h4  className='h4' >Джинсы для всех друзей. Скидки на большие покупки </h4>
                        <p>Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.</p>
                        <article>
                            <h4>Узнать подробнее</h4>
                            <p>16 июня 2023</p>
                        </article>
                    </div>
                
            
                    <div className="reletiv">
                        <img src={ceti3} alt="" />
                        <h4 className='h4'>  Джинсы для всех друзей. Скидки на большие покупки </h4>
                        <p>Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.</p>
                        <article>
                            <h4>Узнать подробнее</h4>
                            <p>16 июня 2023</p>
                        </article>
                    </div>
            </div>
        </div>
    )
}
export default Page8;