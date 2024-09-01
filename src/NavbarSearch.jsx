import icon1 from './icon/Vector (Stroke).png'
import icon2 from './icon/Vector (Stroke) (1).png'
import icon3 from './icon/Vector (Stroke) (2).png'
import icon4 from './icon/Vector (Stroke) (3).png'

function NavbarSearch () {
    return(
        <div className='nav'> 
            <nav>
            <h1><span>X</span>WEAR</h1>
            <div className='search'>
                <input type="text" />
                <img src={icon1} alt="" />  
            </div>
            <article>
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
                <p>11 899 ₽ <span>7</span></p>
            </article>
            </nav>
        </div>
    )

}
export default NavbarSearch;