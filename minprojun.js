var count=document.getElementById("count");
var integer=0;
var i=0,c=0;
var color=["#00FFFF","#8A2BE2","#228B22","#00FA9A","#A0522D"];
function increment(){
    integer=integer+1;
    count.innerHTML=integer;
}
function decrement(){
     integer=integer-1;
     count.innerHTML=integer;
 }
function reset(){
     integer=0;
     count.innerHTML=integer;
     co.innerHTML=++i;
     if (i>50) {i=0;}
 }
function cml(){
    co.innerHTML=i=0;
    c=c<color.length?++c:0;
    document.body.style.background=color[c]
}

