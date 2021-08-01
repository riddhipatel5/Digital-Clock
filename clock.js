function gettime(){
    var datetime = new Date();
    var hours = datetime.getHours();
    var minutes = datetime.getMinutes();
    var seconds = datetime.getSeconds();
    var amorpm =document.getElementById("amorpm");
    if(hours >= 12)
    {
        amorpm.innerHTML ='PM';
    }
    else{
        amorpm.innerHTML='AM';
    }
    if(hours > 12){
        hours = hours - 12;
    }
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML= seconds;
}
setInterval(gettime, 1000);
