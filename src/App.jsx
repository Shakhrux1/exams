import './Style.scss'
import Navbar from './Navbar.jsx'
import Page2 from './Swiper_page.jsx'
import Page3 from './PAge3.jsx'
import Page4 from './PAge4.jsx'
import Page5 from './PAge5.jsx'
import Page6 from './PAge6.jsx'
import Page7 from './PAge7.jsx'
import Page8 from './PAge8.jsx'
import Page9 from './PAge9.jsx'
// import NavbarSearch from './NavbarSearch.jsx'
import KatalogPAge from './Katalog.jsx'
import Hover from './SwiperHover.jsx'
import Rastichat from './Rastichat.jsx'
import Faq from './Faq.jsx'


function App() {

  return (
   <div className="body">
      <div className="navbar-body">
        <div className="container">
          <Navbar/>
        </div>
      </div>
      <div className='container'>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
      </div>
      <div className='bgc-img'>
          <div className="container">
            <Page6/>
          </div>
      </div>
      <div className="bgc">
          
        <div className="container">
          <Page7/>
          <Page8/>
        </div>
        <div className="box-9-bgc">
          <div className="container">
            <Page9/>
            
          </div>
        </div>

      </div>
      <div className="container">
        <KatalogPAge/>
        <Hover/>
        <Rastichat/>
        <Faq/>
      </div>
   </div>
     
  )
}

export default App
