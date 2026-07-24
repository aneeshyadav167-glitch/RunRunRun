/* ===========================
   GLOBAL
=========================== */

*{
margin:0;
padding:0;
box-sizing:border-box;
-webkit-tap-highlight-color:transparent;
touch-action:none;
user-select:none;
}

html,
body{

width:100%;
height:100%;
overflow:hidden;
background:#87CEEB;

font-family:Arial,Helvetica,sans-serif;

}

/* ===========================
   GAME CONTAINER
=========================== */

#gameContainer{

position:fixed;

left:50%;
top:50%;

transform:translate(-50%,-50%);

width:min(100vw,56.25vh);
height:min(177.78vw,100vh);

overflow:hidden;

background:#87CEEB;

}

/* ===========================
   THREE.JS CANVAS
=========================== */

canvas{

display:block;
width:100%;
height:100%;

}

/* ===========================
   UI
=========================== */

#gameUI{

position:fixed;

left:50%;
top:50%;

transform:translate(-50%,-50%);

width:min(100vw,56.25vh);
height:min(177.78vw,100vh);

pointer-events:none;

z-index:100;

}

/* ===========================
   SCORE
=========================== */

#score{

position:absolute;

left:15px;
top:15px;

padding:10px 16px;

border-radius:12px;

background:rgba(0,0,0,.35);

color:white;

font-size:18px;
font-weight:bold;

}

/* ===========================
   DISTANCE
=========================== */

#distance{

position:absolute;

right:15px;
top:15px;

padding:10px 16px;

border-radius:12px;

background:rgba(0,0,0,.35);

color:white;

font-size:18px;
font-weight:bold;

}

/* ===========================
   GAME OVER
=========================== */

#gameOver{

position:absolute;

left:50%;
top:50%;

transform:translate(-50%,-50%);

width:80%;

padding:30px;

border-radius:20px;

background:rgba(0,0,0,.75);

display:none;

text-align:center;

pointer-events:auto;

}

#gameOver h1{

color:white;

font-size:40px;

margin-bottom:25px;

}

/* ===========================
   BUTTON
=========================== */

#restartBtn{

padding:15px 35px;

font-size:20px;

border:none;

border-radius:12px;

cursor:pointer;

background:white;

transition:.2s;

}

#restartBtn:active{

transform:scale(.96);

}

/* ===========================
   MOBILE
=========================== */

@media (max-width:700px){

#score,
#distance{

font-size:16px;

padding:8px 12px;

}

#gameOver h1{

font-size:34px;

}

#restartBtn{

font-size:18px;

padding:14px 28px;

}

}
