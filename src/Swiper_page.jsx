import swiperImg from './img/Rectangle 1650.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
function Page2 () {
    return(
        <div className="box-dad">
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="reletive">
                        <div className="position">
                            <h1>Широкий ассортимент Одежды</h1>
                            <p>Одежда от известные брендов у нас в каталоге. Только качественные вещи.</p>
                            <button className='btn-swiper'>Kаталог </button>
                        </div>
                        <img src={swiperImg} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reletive">
                        <div className="position">
                            <h1>Широкий ассортимент Одежды</h1>
                            <p>Одежда от известные брендов у нас в каталоге. Только качественные вещи.</p>
                            <button className='btn-swiper'>Kаталог </button>
                        </div>
                        <img src={swiperImg} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reletive">
                        <div className="position">
                            <h1>Широкий ассортимент Одежды</h1>
                            <p>Одежда от известные брендов у нас в каталоге. Только качественные вещи.</p>
                            <button className='btn-swiper'>Kаталог </button>
                        </div>
                        <img src={swiperImg} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Page2;