import React from 'react'
import Sidebar from './Sidebar';

// ページリンクの設定
import { Link } from 'react-router-dom';

function hentai() {
  return (
    <>
      <div class='SidebarWapper'>
        <Sidebar />
      </div>
      <div className='HentaiPeople'>
        <Link to='/video' style={{ textDecoration: 'none' }}>一般人とつながる</Link>
      </div>
      <div className='HentaiPeopleReturn'>
        <Link to='/Home' style={{ textDecoration: 'none' }}>戻る</Link>
      </div>
    </>
  )
}

export default hentai
