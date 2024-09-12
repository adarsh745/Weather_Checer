const express= require("express");
const bodyParser=require("body-parser");
const request=require("requests");
const d=require(__dirname+"/date.js");
const ti=require(__dirname+"/time.js");
const pic=require(__dirname+"/pict.js");
const fav=require(__dirname+"/fac.js");

const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

let objdata=[];
let date;
let ur;
let fa;
let cod;
app.get('/',function(req,res){
  if (typeof objdata === 'undefined' || objdata.length === 0 || cod==="404"){
    res.render("start");
  }else{
    res.render("home",{objdata:objdata,date:date,ur:ur,fa:fa});
  }
});
app.get('/error404',function(req,res){
  res.render("error");
});
app.post('/',function(req,res){
  let cityname=req.body.city;
  if(cityname === ""){
     res.render('error');
  }else{
    let url="http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=metric&APPID=6a7f3fcafd67ddb95159d492ec4833ee";
    request(url)
  .on('data', function (chunk) {
    const obj=JSON.parse(chunk);
    objdata=obj;
    console.log(objdata.cod);
    cod=objdata.cod;
    if(cod !=="404"){
      date=d(objdata.dt);
      let time=ti(objdata.dt);
      let sunset=ti(objdata.sys.sunset);
      let sunrise=ti(objdata.sys.sunrise);
      let m = objdata.weather[0].main;
     ur=pic(m,time,sunset,sunrise);
     fa=fav(m,time,sunset,sunrise);
   }
  })
  .on('end', function (err) {
    if(err ||cod ==="404" ){
      res.redirect("/error404");
      for (var member in objdata) delete objdata[member];
      return;
    }
    res.redirect("/")
    console.log('end');
  });
  }
});
app.post('/error404',function(res,req){
  cosole.log("error");
  res.redirect('/');
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
