import React from 'react'
import Peer from 'skyway-js';

// P2P接続を操作するためのPeerクラスのオブジェクトをインスタンス化
// keyでAPIキーを取得、debugはログの出力レベル、3が開発用
const peer = new Peer({
  key: "77cd23a7-a204-435d-9886-765953d75c73",
  debug: 3,
});

const Video = (props) => {
  let localStream;
  console.log(navigator.userAgent);

  // カメラ映像取得
  // getUserMediaはブラウザ標準のAPI
  // navigatorオブジェクトのmediaDeviceクラスからgetUserMedia()を呼び出し
  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    // getUserMediaで取得したstreamオブジェクトをvideo要素にセット
    .then( stream => {
    // 成功時にvideo要素にカメラ映像をセットし、再生
    const videoElm = document.getElementById('my-video');
    videoElm.srcObject = stream;
    videoElm.play();
    // 着信時に相手にカメラ映像を返せるように、グローバル変数(localStream)に保存しておく
    localStream = stream;
  }).catch( error => {
    // 失敗時にはエラーログを出力
    console.error('mediaDevice.getUserMedia() error:', error);
    return;
  });

  // サーバーへ正常に接続できた時のイベント
  peer.on('open', () => {
    document.getElementById('my-id').textContent = peer.id;
  });

  peer.on('error', err => {
    alert('不明なエラーが発生しました');
  });

  // 通信を切断
  // const finishVideo = () => {
  //   return(
  //   ここに処理を記載
  //   )
  // };

  peer.on('close', () => {
    alert('通信が切断しました。');
  });

  // 着信処理
  // callは接続先のpeerから音声・映像の接続を受診した時のイベント
  // mediaConnectionは接続先Peerへのメディアチャネル接続を管理するクラス
  // mediaConnectionはcallイベントで作成される
  peer.on('call', mediaConnection => {
    // mediaConnectionオブジェクトのanserメソッドでカメラ映像取得時に
    // 保存しておいたlocalStream変数を引数にとり、 自分のカメラ映像を相手に返す。
    mediaConnection.answer(localStream);
    setEventListener(mediaConnection);
  });

  // 発信処理(handleCall関数を定義)
  const handleCall = () => {
    // 入力された相手のID情報を取得
    const theirID = document.getElementById('their-id').value;
    // 相手の映像をvideoにセットする処理を記載
    const mediaConnection = peer.call(theirID, localStream);
    setEventListener(mediaConnection);
  };

  // イベントリスナを設置する関数
  const setEventListener = mediaConnection => {
    mediaConnection.on('stream', stream => {
      // video要素にカメラ映像をセットして再生
      const videoElm = document.getElementById('their-video')
      videoElm.srcObject = stream;
      videoElm.play();
    });
  }

  // html要素
  return (
    <div>
      {/* 映像の表示領域 */}
      <video id="my-video" width="70%" autoPlay muted playsInline></video>
      {/* 着信時に相手の映像を表示 */}
      <video id="their-video" width="400px" autoPlay muted playsInline></video>
      
      {/* 自分のIDを表示、これを相手が打ち込むと通信できる */}
      <p id='my-id'></p>
      {/* 相手のPeerIDを入力 */}
      <input id="their-id"></input>
      {/* 発信ボタン */}
      <button id="make-call" onClick={handleCall}>発信</button>
      {/* 通話を切断 */}
      {/* <button onClick={finishVideo}>切断</button> */}
    </div>
  );
}

export default Video;
