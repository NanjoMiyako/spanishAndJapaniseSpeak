var currentSpeech = null;

var timer1;
var idx = 0;

function speakSpnshAndJap(){

	  
  timer1 = setTimeout(Yomiage, 7000, idx);
}

function Yomiage(idx){


	  if(idx >= lines.length){
	  	clearInterval(timer1);
	  	return
	  }
	  
  	  phs = lines[idx].split(',');
  	  jph = phs[0]
  	  sph = phs[1]

	  speakES(sph)  	  
	  speakJ(jph)

	  
	  setPhase(jph, sph)
	  
	  timer1 = setTimeout(Yomiage, 7000, idx+1)

}



function setPhase(jph,sph){
	  p1 = document.getElementById('JapanesePhrase');
  	  p2 = document.getElementById('SpanishPhrase'); 
  	  
  	  p1.innerHTML = jph
  	  p2.innerHTML = sph

}


let input = document.getElementById('file');
let reader = new FileReader();

var content
var lines
input.addEventListener('change', () => {
    for(file of input.files){
        //Fileオブジェクト(テキストファイル)のファイル内容を読み込む
        reader.readAsText(file, 'UTF-8');
        //ファイルの読み込み完了後に内容をコンソールに出力する
        reader.onload = ()=> {
            content = reader.result
            lines = content.split(/\n/);
            alert('ファイル読み込みました')
        };
    }
});


function speakJ(text1){
// ブラウザにWeb Speech API Speech Synthesis機能があるか判定
  if ('speechSynthesis' in window) {

    // 発言を設定 (必須)
    const uttr = new SpeechSynthesisUtterance()

    // テキストを設定 (必須)
    uttr.text = text1

    // 言語を設定
    uttr.lang = "ja-JP"

    // 速度を設定
    uttr.rate = 1

    // 高さを設定
    uttr.pitch = 1

    // 音量を設定
    uttr.volume = 1

    // 発言を再生 (必須)
    window.speechSynthesis.speak(uttr)
    


 }
 
}

function speakES(text1){
// ブラウザにWeb Speech API Speech Synthesis機能があるか判定
  if ('speechSynthesis' in window) {

    // 発言を設定 (必須)
    const uttr = new SpeechSynthesisUtterance()

    // テキストを設定 (必須)
    uttr.text = text1

    // 言語を設定
    uttr.lang = "es-ES"

    // 速度を設定
    uttr.rate = 1

    // 高さを設定
    uttr.pitch = 1

    // 音量を設定
    uttr.volume = 1

    // 発言を再生 (必須)
    window.speechSynthesis.speak(uttr)

 }
 
}
 

 
