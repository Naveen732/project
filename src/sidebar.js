import React from 'react';
import './App.css'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          {/* <BsPersonCircle  className='icon'/> PROFILE */}
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <span>SEMESTER</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <span>GRADE</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <span>SUBJECT</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
