let random1=Math.floor((Math.random() * 90)+10);;
let random2=Math.floor((Math.random() * 90)+10);;
let random3=Math.floor((Math.random() * 90)+10);;
let random4=Math.floor((Math.random() * 90)+10);;
let random5=Math.floor((Math.random() * 90)+10);;
let max=0;
let min=0;

if( (random1 > random2) && (random1 >random3) && (random1 >random4) && (random1 >random5)){
    max=random1;
}
if ( (random2 >random3) && (random2 >random4) && (random2 >random5)){
    max=random2;
}
if ( (random3 >random4) && (random3 >random5)){
    max=random3;
}
if ( (random4 &&random2 >random5)){
    max=random4;
}
else{ max=random5;}


if(random1 < random2 && random1 <random3 && random1 <random4 &&random1 <random5){
    min=random1;
}
if ( random2 <random3 && random2 <random4 &&random2 <random5){
    min=random2;
}
if ( random3 <random4 &&random3 <random5){
    min=random3;
}
if ( random4 &&random2 <random5){
    min=random4;
}
else{ min=random5;}

