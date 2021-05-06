let year=2016;
let mod4=year%4;
let mod100=year % 100;
let mod400=year%400;
let leap=0;
if ((mod4 == 0 && mod100 != 0)  || mod400 == 0 ){
	leap=1;
}
else{
    leap=0;
}