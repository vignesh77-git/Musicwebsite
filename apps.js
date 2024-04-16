const music = new Audio('music/1.mp3');
// music.play();

const songs =[
   {
   id: '1',
   songname:`  Arcade <br>
                         
   <div class="subtitle">Duncan Laurence </div>`,
   poster:'/img/arcade.jpeg',
  },
 { 
   id: '2',
   songname:`  Belive <br>
                         
 <div class="subtitle">ImagineDragons</div>`,
   poster:'/img/belive.jpeg',
},
{
   id: '3',
   songname:`  Bones <br>
                         
    <div class="subtitle">ImagineDragons</div>`,
   poster:'img/boys.jpeg',
},
{
   id: '4',
   songname:`  Dancin  <br>
        <div class="subtitle">Aaron smith</div>`,
   poster:'img/dancin.jpeg',
},
{
   id: '5',
   songname:`  Dance Monkey<br>
                         
      <div class="subtitle">Royal music</div>`,
   poster:'/img/dncemon.jpeg',
},
{
   id: '6',
   songname:`  Enemy <br>
                         
     <div class="subtitle">ImagineDragons</div>`,
   poster:'img/enemy.jpeg',
},
{
   id: '7',
   songname:`  Falling  <br>
                         
                         <div class="subtitle">Syrebel vibes</div>`,
   poster:'img/falling.jpeg',
},
{
   id: '8',
   songname:`  Fast and Furious <br>
       <div class="subtitle">franke west</div>`,
   poster:'img/fastnd.jpeg',
},

{
   id: '9',
   songname:`  Heart waves<br>
                         
   <div class="subtitle">Alan Walker</div>`,
   poster:'/img/hrtwave.jpeg',
},

{
   id: '10',
   songname:`  memory bring back <br>
                         
    <div class="subtitle">7clouds</div>`,
   poster:'img/mems.jpeg',
},
{
 id: '11',
 songname:` 24k-Golden Mood <br>                
 <div class="subtitle">24k-Goldenvibe</div>`,
 poster:'img/mood.jpeg',
},


{
   id: '12',
   songname:`  No lie<br>
                         
   <div class="subtitle">Sean Paul</div>`,
   poster:'img/no lie.jpeg',
} ,

{
   id: '13',
   songname:`  Otilia - Bilionera <br>                
    <div class="subtitle">Jhaps records</div>`,
   poster:'img/otila.jpeg',
},
{
  id: '14',
  songname:`  Parse vevo <br>                
  <div class="subtitle">herike</div>`,
 poster:'img/parse.jpeg',
},
{
id: '15',
songname:`  The Kido LAROI <br>                
<div class="subtitle">The Kido LARIOVevo</div>`,
poster:'img/stay.jpeg',
},
{
id: '16',
songname:`  Streo hearts <br>                
<div class="subtitle">cakes & Eclairs</div>`,
poster:'img/streo.jpeg',
},
{
id: '17',
songname:`  Streo Pop <br>                
<div class="subtitle">Eclaris</div>`,
poster:'img/streo.jpeg',
},
 
]

// Array.from(document.getElementsByClassName('songitem')).forEach((element,i)=>{
//     element.getElementsByTagName('img')[0].src=songs[i].poster;
//     element.getElementsByTagName('h5')[0].innerHTML=songs[i].songname;
// })

const songItems = document.getElementsByClassName('songitem');

for (let i = 0; i < songItems.length && i < songs.length; i++) {
    songItems[i].getElementsByTagName('img')[0].src = songs[i].poster;
    songItems[i].getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
}

let pop_song_left =document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left =document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});



let mastr_play = document.getElementById('masterplay');
let wave = document.getElementsByClassName('wave')[0];

mastr_play.addEventListener('click',()=>{
   if (music.paused || music.currentTime <=0) {
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
      wave.classList.add('active2');
   }
   else {
      music.pause();
      masterplay.classList.add('bi-play-fill');
      masterplay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
   }
});

const makeAllPlays = () =>{
   Array.from(document.getElementsByClassName('PlayListPlay')).forEach((element)=>{
         element.classList.add('bi-play-circle-fill');
         element.classList.remove('bi-pause-circle-fill');
   })
}


let index = 0;
// Array.from(document.getElementsByClassName('PlayListPlay')).forEach((e)=>{
//    e.addEventListener('click',(el)=>{
//       index = el.target.id;
//       // console.log(index);
//       music.src = `music/${index}.mp3`;
//       music.play();
//    })
// })

let poster_mastr=document.getElementById('poster_mastr');
let title=document.getElementById('title');

Array.from(document.getElementsByClassName('PlayListPlay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
      index = e.target.id;
      makeAllPlays();
      e.target.classList.remove('bi-play-circle-fill');
      e.target.classList.add('bi-pause-circle-fill');
      music.src = `music/${index}.mp3`;
      poster_mastr.src=`img/${index}.jpeg`;
      music.play();
      let song_title = songs.filter((ele)=>{
         return element.id == index;
      })
      song_title.forEach(ele =>{
         let {songname} = ele;
         title.innerHTML = songname;
      })
   })
});




// Assuming 'music' and 'Seek' are defined elsewhere in your code

const currentStart = document.getElementById('currentstart');
const currentEnd = document.getElementById('currentEnd');
const bar2 = document.getElementById('bar2');
const dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
   const music_curr = music.currentTime;
   const music_dur = music.duration;

   const formatTime = (time) => {
      let minutes = Math.floor(time / 60);
      let seconds = Math.floor(time % 60);
      if (seconds < 10) {
         seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
   };

   currentEnd.innerText = formatTime(music_dur);
   currentStart.innerText = formatTime(music_curr);

   let progressbar = parseInt((music.currentTime / music.duration) * 100);
   seek.value = progressbar;
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change',()=>{
   music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended',()=>{
   masterplay.classList.add('bi-play-fill');
   masterplay.classList.remove('bi-pause-fill');
   wave.classList.remove('active2');
})

////------volume----------///

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementById('vol_bar')[0];

vol.addEventListener('change',()=>{
   if (vol.value ==0){
      vol_icon.classList.remove('bi-volume-down-fill');
      vol_icon.classList.add('bi-volume-mute-fill');
      vol_icon.classList.remove('bi-volume-up-fill');
   }
   if (vol.value > 0){
      vol_icon.classList.add('bi-volume-down-fill');
      vol_icon.classList.remove('bi-volume-mute-fill');
      vol_icon.classList.remove('bi-volume-up-fill');
   }
   if (vol.value > 50){
      vol_icon.classList.remove('bi-volume-down-fill');
      vol_icon.classList.remove('bi-volume-mute-fill');
      vol_icon.classList.add('bi-volume-up-fill');
   }

   let vol_a = vol.value;
   vol_bar.style.width = `${vol_a}%`;
   vol_dot.style.left = `${vol_a}%`;
   music.volume = vol_a/100;
})

