import bir from './icons/bir.jpg'
import ikki from './icons/ikki.webp'
import uch from './icons/uch.webp'
import tort from './icons/tort.jpg'
import besh from './icons/besh.webp'
import olti from './icons/olti.png'
import yetti from './icons/yetti.png'
import sakiz from './icons/sakiz.png'
import toqiz from './icons/toqiz.png'
import on from './icons/on.png'
import onbir from './icons/on bir.png'
import onikki from './icons/on ikki.jpg'
import onuch from './icons/on uch.jpg'
import ontort from './icons/on tort.webp'
import onbesh from './icons/on besh.jpg'
import onolti from './icons/on olti.png'
import onyeti from './icons/on yeti.png'
import onsakiz from './icons/on sakkiz.webp'
import a from './img2/Rectangle 22 (9).png'
import b from './img2/Rectangle 22 (8).png'
export default function Adejda() {
    const adejda = [
        { id: 1, img: bir, rece: '6 600', title: 'Shoes', skidka: '-18%', titleSkid: '5 999', shp:'в корзину' },
        { id: 2, img:ikki, rece: '7 100', title: 'Boots', skidka: '-15%', titleSkid: '6 035', shp:'в корзину' },
        { id: 3, img: uch, rece: '5 900', title: 'Sneakers', skidka: '-10%', titleSkid: '5 310' , shp:'в корзину'},
        { id: 4, img: tort, rece: '8 000', title: 'Sandals', skidka: '-20%', titleSkid: '6 400' , shp:'в корзину'},
        { id: 5, img: besh, rece: '9 300', title: 'Heels', skidka: '-30%', titleSkid: '6 510' , shp:'в корзину'},
        { id: 6, img: olti, rece: '4 200', title: 'Slippers', skidka: '-5%', titleSkid: '3 990' , shp:'в корзину'},
        { id: 7, img: yetti, rece: '7 500', title: 'Moccasins', skidka: '-12%', titleSkid: '6 600' , shp:'в корзину'},
        { id: 8, img: sakiz, rece: '10 000', title: 'Flip-Flops', skidka: '-25%', titleSkid: '7 500', shp:'в корзину' },
        { id: 9, img: toqiz, rece: '11 200', title: 'Loafers', skidka: '-8%', titleSkid: '10 304', shp:'в корзину' },
        { id: 10, img: on, rece: '6 300', title: 'Clogs', skidka: '-18%', titleSkid: '5 166', shp:'в корзину' },
        { id: 11, img: onbir, rece: '8 800', title: 'Derby', skidka: '-22%', titleSkid: '6 864', shp:'в корзину' },
        { id: 12, img: onikki, rece: '9 500', title: 'Oxford', skidka: '-15%', titleSkid: '8 075', shp:'в корзину' },
        { id: 13, img: onuch, rece: '6 900', title: 'Wedges', skidka: '-20%', titleSkid: '5 520' , shp:'в корзину'},
        { id: 14, img: ontort, rece: '7 800', title: 'Espadrilles', skidka: '-18%', titleSkid: '6 396', shp:'в корзину' },
        { id: 15, img: onbesh, rece: '8 500', title: 'Ankle Boots', skidka: '-25%', titleSkid: '6 375', shp:'в корзину' },
        { id: 16, img: onolti, rece: '5 600', title: 'Ballet Flats', skidka: '-12%', titleSkid: '4 928', shp:'в корзину' },
        { id: 17, img: onyeti, rece: '12 000', title: 'Chelsea Boots', skidka: '-30%', titleSkid: '8 400', shp:'в корзину' },
        { id: 18, img: onsakiz, rece: '9 700', title: 'Chukka Boots', skidka: '-20%', titleSkid: '7 760', shp:'в корзину' },
        { id: 17, img: a, rece: '19 000', title: 'Hiking Boots', skidka: '-30%', titleSkid: '15 000', shp:'в корзину' },
        { id: 18, img: b, rece: '12 706', title: 'Desert Boots', skidka: '-20%', titleSkid: '15 760', shp:'в корзину' }
    ];
    
  return (
    <>  
        <div className="container">
        <div className="adejdas">
            <h6>Одежда</h6>

            <div className="adejda">
                {adejda.map((item ,id)=>(
                    <div key={id} className='adejdaItem'>
                        <img src={item.img} alt={item.title} />
                        <h1>{item.title}</h1>
                        <p>{item.skidka}</p>
                        <article>
                            <h3>{item.rece}</h3>
                            <h2>{item.titleSkid}<span>$</span></h2>
                        </article>
                        <button className="korzinku">
                            {item.shp}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </>
  )
}
