// ホーム画面
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Sidebar from './Sidebar';
import google_logo from '../img/googles-new-logo-5078286822539264.3-hp2x.gif';
// ページ遷移用
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function Signin() {
  // ユーザーの状態をuser変数に渡す
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className='signin'>
        {/* 三項演算子を使った記述（userがtrueならUserInfoとSignOutButton、
        falseならSignInButton） */}
        {user ? (
          <div class='SidebarWapper'>
            <UserInfo />
            <SignOutButton />
            <Sidebar />
          </div>
        ):(
          <SignInButton />
          )}
      </div>
    </div>
  );
}

export default Signin;

// サインインする関数
function SignInButton (){
  const signInWithGoogle = () => {
    // firebaseを使ってグーグルでサインインする(firebaseで用意されている)
    signInWithPopup(auth, provider);
  };

  return(
    <div className='SignInWrapper'>
      <img src={google_logo}/>
      <button onClick={signInWithGoogle}>
        googleアカウントでサインイン
      </button>
    </div>
  );
}

// サインアウトする関数(confirmでOKならサインアウト)
function SignOutButton (){
  const ComfirmSignOut = () => {
    let result = window.confirm('ログアウトしますか？');
    result && auth.signOut()
  };

  return(
    // firebaseを使ってサインアウトする(firebaseで用意されている)
    <button class='buttondaca' onClick={ComfirmSignOut}>
      <p className='SignOutButton'>サインアウト</p>
    </button>
  );
}

// ユーザー情報
function UserInfo (){
  return(
      <div className='userInfo'>
        <img src={auth.currentUser.photoURL} alt='googleのアイコン'></img>
        <p>{auth.currentUser.displayName}</p>
      </div>
  );
}
