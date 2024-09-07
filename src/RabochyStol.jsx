import vec1 from './icons/Vector.png'
import vec2 from './icons/Vector (1).png'
import vec3 from './icons/Vector (2).png'
import vec4 from './icons/Vector (3).png'
import vec5 from './icons/Vector (4).png'
import vec6 from './icons/Vector (5).png'
import { useState } from 'react'
function Rabochy() {
  const orders = [
    { number: "#5653", date: "27/06/2023", status: "В обработке", total: "4 699 ₽" },
    { number: "#5653", date: "27/06/2023", status: "Отправлен", total: "4 699 ₽" },
    { number: "#5653", date: "27/06/2023", status: "В обработке", total: "4 699 ₽" },
    { number: "#5653", date: "27/06/2023", status: "Отправлен", total: "4 699 ₽" },
  ];
  const [isRaboch,setRaboch] = useState(0)
  const click = (a) =>{
    if(isRaboch !== a){
      setRaboch(a)
    }
  }
  return (
    <>
      <div className="container">
      <div className="dadBox">
        <p>Главная / Личный кабинет</p>
        <h1>Личный кабинет</h1>
        <h3>Приветствуем, Василий!</h3>
        <div className="rabochyGrid">
            <div onClick={()=> click(0)}>
                <img src={vec1} alt="" />
                <p>Мой профиль</p>
            </div>
            <div onClick={()=> click(1)}>
                <img src={vec2} alt="" />
                <p>Заказы</p>
            </div>
            <div onClick={()=> click(2)}>
                <img src={vec3} alt="" />
                <p>Мои адреса</p>
            </div>
            <div onClick={()=> click(3)}>
                <img src={vec4} alt="" />
                <p>Редактировать профиль</p>
            </div>
            <div onClick={()=> click(4)}>
                <img src={vec6} alt="" />
                <p>Избранные товары</p>
            </div>
            <div onClick={()=> click(5)}>
                <img src={vec5} alt="" />
                <p>Выход</p>
            </div>
        </div>
        <div className={isRaboch === 1 ? 'order-table-container': 'activeNone'}>
        <h2>Текущие заказы</h2>
        <table className="order-table">
        <thead>
          <tr>
            <th>НОМЕР</th>
            <th>ДАТА</th>
            <th>СТАТУС</th>
            <th>ИТОГ</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.number}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
      </div>
    </>
  );
}
export default Rabochy;
