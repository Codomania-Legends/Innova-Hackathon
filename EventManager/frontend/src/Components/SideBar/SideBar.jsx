import React from 'react'
import './SideBar.css'
import setting from '../../assets/setting.png'
import remainder from '../../assets/remainder.png'
import register from '../../assets/register.png'
import home from '../../assets/home.png'
import event from '../../assets/event.png'
import attendance from '../../assets/attendance.png'
import calender from '../../assets/calender.png'
import user from '../../assets/user.png'
function SideBar( {setFunc , func} ) {

  return (
    <main className={`main-side-bar flex ${func ? "hideSideBar" : "showSideBar"}`}>
        <div className="side-box flex">
          <div className='icons-all flex'>
            <div className={`setting ${!func ? "setWidth" : ""} iconDiv flex`} id={`${!func ? "setWidth" : ""}`} >
              <img src={setting} alt="" className={`${func ? "shiftIcon" : "unshiftIcons"}`} />
              <span className={`${ func ? "showText" : "hideText" }`}>Settings</span>
            </div>
            <div className={`home  ${!func ? "setWidth" : ""} iconDiv flex`} id={`${!func ? "setWidth" : ""}`} >
              <img src={home} alt="" className={`${func ? "shiftIcon" : "unshiftIcons"}`} />
              <span className={`${ func ? "showText" : "hideText" }`}>Home</span>
            </div>
            <div className={`calender  ${!func ? "setWidth" : ""} iconDiv flex`} id={`${!func ? "setWidth" : ""}`} >
              <img src={calender} alt="" className={`${func ? "shiftIcon" : "unshiftIcons"}`} />
              <span className={`${ func ? "showText" : "hideText" }`}>Calender</span>
            </div>
            <div className={`event  ${!func ? "setWidth" : ""} iconDiv flex`} id={`${!func ? "setWidth" : ""}`} >
              <img src={event} alt="" className={`${func ? "shiftIcon" : "unshiftIcons"}`}/>
              <span className={`${ func ? "showText" : "hideText" }`}>Event</span>
            </div>
            <div className={`remainder  ${!func ? "setWidth" : ""} iconDiv flex`} id={`${!func ? "setWidth" : ""}`} >
              <img src={remainder} alt="" className={`${func ? "shiftIcon" : "unshiftIcons"}`} />
              <span className={`${ func ? "showText" : "hideText" }`}>Remainder</span>
            </div>
            <div className={`register  ${!func ? "setWidth" : ""} iconDiv flex`} id={`${!func ? "setWidth" : ""}`} >
              <img src={register} alt="" className={`${func ? "shiftIcon" : "unshiftIcons"}`} />
              <span className={`${ func ? "showText" : "hideText" }`}>Register</span>
            </div>
            <div className={`attendence  ${!func ? "setWidth" : ""} iconDiv flex`} id={`${!func ? "setWidth" : ""}`} >
              <img src={attendance} alt="" className={`${func ? "shiftIcon" : "unshiftIcons"}`} />
              <span className={`${ func ? "showText" : "hideText" }`}>Attendance</span>
            </div>
          </div>
          <div className="user flex">
            <div className="profileSettingDiv flex">
              <img id='shiftProfile' src={user} alt="" className={`${func ? "shiftIcon" : "unshiftIcons"}`} />
              <span className={`${ func ? "showText" : "hideText" }`}>Profile</span>
            </div>
          </div>
        </div>
        <div className="slide-right-icon flex">
          <button className={`slide-btn ${func ? "shiftBtn" : "unshiftBtn"}`} onClick={ () => setFunc(!func) }> 
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
    </main>
  )
}

export default SideBar
