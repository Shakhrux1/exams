import './Style.scss'


import KatalogPAge from './Katalog.jsx'
import Rastichat from './Rastichat.jsx'
import Faq from './Faq.jsx'
import Brend from './Brend.jsx'
import Adejda from './Adejda.jsx'
import Aksesuar from './Aksesuar.jsx'
import Rabochy from './RabochyStol.jsx'
import AsosyPage from './AsosyPage.jsx'
import Navbar from './Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Hover from './SwiperHover.jsx'


function App() {

  return (
   <div className="body">
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<AsosyPage/>}/>
            <Route path='/adejda' element={<Adejda/>}/>
            <Route path='/obuv' element={<KatalogPAge/>}/>
            <Route path='/accessuar' element={<Aksesuar/>}/>
            <Route path='/brend' element={<Brend/>}/>
            <Route path='/costcal' element={<Rastichat/>}/>
            <Route path='/account' element={<Rabochy/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/obuv/krasovki' element={<Hover/>}/>
          </Route>
        </Routes>
      </div>
  )
}

export default App

