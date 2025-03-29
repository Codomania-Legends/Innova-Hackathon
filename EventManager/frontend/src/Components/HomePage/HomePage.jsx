import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'
<<<<<<< HEAD
=======
import Sidebar2 from '../SideBar/Sidebar2'
>>>>>>> 23d26fbb33e5c739f51349ec6f5d0e40df99723a
import Calender from '../Calender/Calender'
function HomePage() {
  const [ slideShow, setSlideShow ] = useState(false)
  return (
    <main className="mainhome">
      <div className="home-nav">
        <Navbar/>
      </div>
        <div className="home-sidebar">
          
          <SideBar setFunc={setSlideShow} func={slideShow} />
        </div>
        <div className="calender">
          <Calender/>
        </div>
      </main>
  )
}

export default HomePage
