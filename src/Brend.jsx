import nike from './imgs/nike.png'
import adidas from './imgs/adidas.png'
import balance from './imgs/balance.png'
import basketbool from './imgs/basketbool.png'
import polo from './imgs/polo.png'
import fila from './imgs/fila.png'

function Brend () {
    const brend = [
        {id:1, img:nike,h1:'Nike'},
        {id:2, img:adidas,h1:'Adidas'},
        {id:3, img:balance,h1:'New Balance'},
        {id:4, img:basketbool,h1:'Jumpman'},
        {id:5, img:polo,h1:'Polo'},
        {id:6, img:fila,h1:'Fila'},
    ]
    return(
        <>
            <div className="container">
            <div className='brend'>
                <h6>Бренды</h6>
                <div className="brendGrid">
                    {brend.map(( logo ,id)=>(
                        
                            <div className='logos' key={id}>
                                <img  src={logo.img} alt={logo.h1} />
                                <h1>{logo.h1}</h1>
                            </div>
                        
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}
export default Brend;