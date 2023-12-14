function updateTime(){
    const currentTime=new Date();
    let hours=currentTime.getHours();
    let minutes=currentTime.getMinutes();
    let seconds=currentTime.getSeconds();


    hours=hours%12;
    hours=hours?hours:12;
    ampm=ampm>=12?"AM":"PM"
//hours is such that if hours is less than 10 then,
    hours=hours<10?"0"+hours:hours
    seconds=seconds<10?"0"+seconds:seconds
    minutes=minutes<10?"0"+minutes:minutes

    document.getElementById('hours').textContent=hours;
    document.getElementById('minutes').textContent=minutes;
    document.getElementById('seconds').textContent=seconds;
    document.getElementById('ampm').textContent=ampm;

}
setInterval( updateTime, 1000)
updateTime();