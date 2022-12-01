import React from 'react'
import Sidebar from './Sidebar';

// ページリンクの設定
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div class='SidebarWapper'>
        <Sidebar />
      </div>
      <div className='NotHentaiPeople'>
        <img></img>
      </div>
    </>
  )
}

export default Home

