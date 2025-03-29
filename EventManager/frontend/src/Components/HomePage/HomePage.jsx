import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import Sidebar2 from '../SideBar/Sidebar2'
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
