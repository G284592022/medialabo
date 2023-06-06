let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

let adata= [
  {tosimei: "カイロ",tosiID:"360630"},
  {tosimei: "モスクワ",tosiID:"524901"},
  {tosimei: "ヨハネスブルク",tosiID:"993800"},
  {tosimei: "北京",tosiID:"1816670"},
  {tosimei: "東京",tosiID:"1850147"},
  {tosimei: "シンガポール",tosiID:"1880252"},
  {tosimei: "シドニー",tosiID:"2147714"},
  {tosimei: "ロンドン",tosiID:"2643743"},
  {tosimei: "パリ",tosiID:"2968815"},
  {tosimei: "リオデジャネイロ",tosiID:"3451189"},
  {tosimei: "ニューヨーク",tosiID:"5128581"},
  {tosimei: "ロサンゼルス",tosiID:"5368361"},
]

////////// 課題3-2 ここからプログラムを書こう
let kensaku = document.querySelector('button#kensaku');
kensaku.addEventListener('dblclick',where);

function where() {

  let x = document.querySelector('input[name="tosi"]');
  let tosi = x.value;
  console.log(tosi);
  
  for(let n of adata){
    if(tosi==(n.tosimei)){
      let id =(n.tosiID);
      let url ='https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

      axios.get(url)
      .then(showResult)
      .then(showError)
      .then(finish);
    }
  }
}

function showResult(resp){
  let data = resp.data;

  if(typeof data === 'string') {
    data = JSON.parse(data);
  }

  console.log(data);
  console.log(data.name);
  console.log(data.weather[0].description);
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  console.log(data.wind.speed);
  const para = document.querySelector('p');

  console.log(data.x);

  let tenkiyohou = document.querySelector('span#tenki');
  tenkiyohou.textContent = (data.weather[0].description);
  let max = document.querySelector('span#saikoukion');
  max.textContent = (data.main.temp_max);
  let min = document.querySelector('span#saiteikion');
  min.textContent = (data.main.temp_min);
  let speed = document.querySelector('span#huusoku')
  speed.textContent = (data.wind.speed);
}


function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}