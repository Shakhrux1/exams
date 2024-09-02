
import ceti from './img/Rectangle 22 (5).png'
import ceti2 from './img/Rectangle 22 (6).png'
import ceti3 from './img/Rectangle 22 (7).png'
import ceti4 from './img/Rectangle 22 (8).png'
import yulduz from './img/Vector.png'

import  { useState, useEffect } from 'react';
import yulduzYon from './icon/free-icon-star-616655.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


function Page3() {
    const [yulduzlar, setYulduzlar] = useState(Array(8).fill(false));

    useEffect(() => {
        const savedYulduzlar = localStorage.getItem('yulduzlar');
        if (savedYulduzlar !== null) {
            setYulduzlar(JSON.parse(savedYulduzlar));
        }
    }, []);

    const handleClick = (index) => {
        const newYulduzlar = [...yulduzlar];
        newYulduzlar[index] = !newYulduzlar[index];
        setYulduzlar(newYulduzlar);
        localStorage.setItem('yulduzlar', JSON.stringify(newYulduzlar));
    };

    return (
        <div className="box3">
            <div className="flex">
                <h1>Одежда</h1>
                <a href="больше товаров">больше товаров &rarr; </a>
            </div>
            <div className="dad">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 5, spaceBetween: 50 },
                    }}
                    
                    className="mySwiper"
                >
                    {[
                        { img: ceti, title: 'Nikee Court Zoom Cage 2', price: '4 699 ₽' },
                        { img: ceti2, title: 'Air Force 1 Ultra Flyknit', price: '6 789 ₽' },
                        { img: ceti3, title: 'Air Force 1 Ultra', price: '3 198 ₽' },
                        { img: ceti4, title: 'Men’s Soccer Shoes', price: '2 699 ₽' },
                        { img: ceti, title: 'Nikee Court Zoom Cage 2', price: '4 699 ₽' },
                        { img: ceti2, title: 'Air Force 1 Ultra Flyknit', price: '6 789 ₽' },
                        { img: ceti3, title: 'Air Force 1 Ultra', price: '3 198 ₽' },
                        { img: ceti4, title: 'Men’s Soccer Shoes', price: '2 699 ₽' },
                    ].map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative">
                                <img src={product.img} alt={product.title} />
                                <img
                                    style={{ width: '15px', display: yulduzlar[index] ? 'none' : 'block' }}
                                    onClick={() => handleClick(index)}
                                    className="yulduz"
                                    src={yulduz}
                                    alt="Star"
                                />
                                <img
                                    style={{ width: '15px', display: yulduzlar[index] ? 'block' : 'none' }}
                                    className="yulduz_yon"
                                    src={yulduzYon}
                                    alt="Star"
                                />
                                <h4>{product.title}</h4>
                                <p><span>от</span> {product.price}</p>
                                
                            </div>
                        </SwiperSlide>
                        
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Page3;
