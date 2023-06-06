// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）

let kaisu=1;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let kaito = document.querySelector('button#kaito'); 
kaito.addEventListener('dbclick',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let n = document.querySelector('input[name="seisu"]');
  let seisu = n.value;
  yoso =seisu;

  let a = document.querySelector('span#kaisu');
  a.textContent =(kaisu);
  let b = document.querySelector('span#answer');
  b.textContent =(yoso);
  let c = document.querySelector('p#result');
    // 課題3-1: 正解判定する
    
    if(yoso == kotae) {
      if(kaisu<4){
        c.textContent = '正解です.おめでとう!';
        kaisu=kaisu+1;
      }else if(kaisu>=4){
        c.textContent = '答えは' +(kotae)+ 'でした.すでにゲームは終わっています.';
        kaisu=kaisu+1;
      }
   }
  else {
    
    if(yoso > kotae){
      c.textContent= 'まちがい.答えはもっと小さいですよ';
    }else if(yoso < kotae){
      c.textContent= 'まちがい.答えはもっと大きいですよ';
    }
    
    kaisu=kaisu+1;
    if(kaisu==4){
      c.textContent = 'まちがい.答え'+(kotae)+'でした';
    }if(kaisu>4){
      c.textContent ='答えは'+(kotae)+'でした.すでにゲームは終わっています.';
    }
   }
}
