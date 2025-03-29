import React from 'react'
import './Sidebar2.css'
import setting from '../../assets/setting.png'
import remainder from '../../assets/remainder.png'
import register from '../../assets/register.png'
import home from '../../assets/home.png'
import event from '../../assets/event.png'
import attendance from '../../assets/attendance.png'
import calender from '../../assets/calender.png'
import user from '../../assets/user.png'

function Sidebar2( {setFunc , func} ) {
  return (
    <main className={`main-bar flex ${func ? "showMainBar" : "hideMainBar"}`}>
            <div className="side-box side2-box flex">
              <div className='icons2-all flex'>
                
                <div className="setting set2 flex">
                  <img src={setting} alt="" className="h-w2 side-setting " />
                  <span className='span'>Settings</span>
                </div>
                <div className="home set2 flex">
                  <img src={home} alt="" className="h-w2 side-home" />
                  <span className='span'>Home</span>
                </div>
                <div className="calender set2 flex">
                  <img src={calender} alt="" className="h-w2 side-calender" />
                  <span className='span'>Calender</span>
                </div>
                <div className="event set2 flex">
                  <img src={event} alt="" className="h-w2 side-event" />
                  <span className='span'>Event</span>
                </div>
                <div className="remainder set2 flex">
                  <img src={remainder} alt="" className="h-w2 side-remainder" />
                  <span className='span'>Remainder</span>
                </div>
                <div className="register set2 flex">
                  <img src={register} alt="" className="h-w2 side-register" />
                  <span className='span'>Register</span>
                </div>
                <div className="attendence set2 flex">
                  <img src={attendance} alt="" className="h-w2 side-attendance" />
                  <span className='span'>Attendance</span>
                </div>
              </div>
              <div className="user2 set2 flex">
                <img src={user} alt="" className="h-w2 side-user" />
                  <span className='span'>Profile</span>
              </div>
            </div>
        </main>
  )
}

export default Sidebar2