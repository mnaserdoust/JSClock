// Function for getting the current time
function currentTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var timeOfDay ="AM";
    if (h>12)
    {
        h=h-12;
        timeOfDay="PM";
    }
    if (h==12)h=0; //Midnight
    h = (h < 10) ? "0" + h : h;
    m = (m<10)? "0"+m:m;
    s = (s<10)? "0"+s:s;

    var time = h+":"+m+":"+s+" "+timeOfDay;
    document.getElementById("currentClock").innerText=time;
    document.getElementById("currentClock").textContent=time;
    setTimeout(currentTime,1000);

}

currentTime();