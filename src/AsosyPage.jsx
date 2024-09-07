

import Page2 from './Swiper_page.jsx'
import Page3 from './PAge3.jsx'
import Page4 from './PAge4.jsx'
import Page5 from './PAge5.jsx'
import Page6 from './PAge6.jsx'
import Page7 from './PAge7.jsx'
import Page8 from './PAge8.jsx'



export default function AsosyPage() {
  return (
    <>
    
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
        

      </div>
    </>
  )
}
