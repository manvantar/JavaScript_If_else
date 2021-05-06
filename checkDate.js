var startingDate = new Date(2020, 03, 20);
var endingDate = new Date(2020, 06, 20);
let userDate=new Date(2020,04,20);
let pass=0;
if(userDate > startingDate && userDate < endingDate){
    pass=1;
}
else{
    pass=0;
}
