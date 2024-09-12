module.exports=getfav;
function getfav(m,time,sunset,sunrise){
  let ur;
  switch(m){
    case "Snow":
      if(time>=sunset || time<=sunrise){
        ur="/icons/Night/snow.svg";
      }else{
        ur ="/icons/Day/snow.svg";
      }
      break;
    case "Clouds":
      if(time>=sunset || time<=sunrise){
        ur="/icons/Night/cloudy.svg";
      }else{
        ur="/icons/Day/cloudy.svg";
      }
        break;
    case "Fog":
      if(time>=sunset || time<=sunrise){
        ur="/icons/Day/fog.png";
      }else{
        ur="/icons/Day/fog.png";
      }
      break;
    case "Rain":
    if(time>=sunset || time<=sunrise){
      ur="/icons/Day/rain.svg";
    }else{
      ur="/icons/Day/rain.svg";
    }
      break;
    case "Clear":
      if(time>=sunset || time<=sunrise){
        ur="/icons/Night/clear.svg";
      }else{
        ur="/icons/Day/clear.svg";
      }
      break;
    case "Thunderstorm":
        ur="/icons/Night/thunder.svg";
      break;
  }
  return ur;
}
