import React from 'react';
import Sidebar from './Sidebar';

// ページリンクの設定
import { Link } from 'react-router-dom';

function Nothentai() {
  return (
    <>
      <div class='SidebarWapper'>
        <Sidebar />
      </div>
      <div className='NotHentaiPeople'>
        <Link to='/video' style={{ textDecoration: 'none' }}>変態とつながる</Link>
      </div>
      <div className='NotHentaiPeopleReturn'>
        <Link to='/Home' style={{ textDecoration: 'none' }}>戻る</Link>
      </div>
    </>
  )
}

export default Nothentai;
