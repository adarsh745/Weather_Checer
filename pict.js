module.exports=getPic;
function getPic(m,time,sunset,sunrise){
  let ur;
  switch(m){
    case "Snow":
      if(time>=sunset || time<=sunrise){
        ur="/images/Night/snow.jpg";
      }else{
        ur ="/images/Day/snow.jpg";
      }
      break;
    case "Clouds":
      if(time>=sunset || time<=sunrise){
        ur="/images/Night/cloudy.jpg";
      }else{
        ur="/images/Day/cloudy.jpg";
      }
        break;
    case "Fog":
      if(time>=sunset || time<=sunrise){
        ur="/images/Night/fog.jpg";
      }else{
        ur="/images/Day/fog.jpg";
      }
      break;
    case "Rain":
    if(time>=sunset || time<=sunrise){
      ur="/images/Night/rain.jpg";
    }else{
      ur="/images/Day/rain.jpg";
    }
      break;
    case "Clear":
      if(time>=sunset || time<=sunrise){
        ur="/images/Night/clear.jpg";
      }else{
        ur="/images/Day/clear.jpg";
      }
      break;
    case "Thunderstorm":
        ur="/images/Thunderstorm.jpg";
      break;
  }
  return ur;
}
