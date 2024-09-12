module.exports = getDate;
function getDate(code){
var myDate = new Date(code*1000);
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
return myDate.toLocaleDateString("en-US", options);
}
