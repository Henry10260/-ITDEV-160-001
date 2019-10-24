var halloween = new Date("Oct 31, 2019 00:00:00").getTime(); //time till halloween
var x = setInterval(function() 
{ 
    var currenttime = new Date().getTime(); //current time
    var timeremaining = halloween - currenttime; //time difference between now and halloween
    var days = Math.floor(timeremaining / (86400000)); //time difference converted to days then rounded 
    var hours = Math.floor((timeremaining%(86400000))/(3600000)); //time difference converted to hours then rounded
    var minutes = Math.floor((timeremaining % (3600000)) / (60000)); //time difference converted to minutes then rounded
    var seconds = Math.floor((timeremaining % (60000)) / 1000); //time difference converted to seconds then rounded
    document.getElementById("countdown").innerHTML = days + "Days "  + hours + "Hours " + minutes + "Minutes " + seconds + "Seconds "; 
    if (timeremaining < 0) 
    { 
        clearInterval(x); 
        document.getElementById("countdown").innerHTML = "Countdown Finished for this year. Return next October for another countdown!"; 
    } 
}, 1000); 