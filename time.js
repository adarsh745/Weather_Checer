module.exports=getTime;
function getTime(code){
var myDate = new Date(code*1000);
var hours = myDate.getHours();
var minutes  =  myDate.getMinutes();
var seconds  =  myDate.getSeconds();
let time=hours.toString() + ':' + minutes.toString().substr(-2) + ':' + seconds.toString().substr(-2);
return time;
}
