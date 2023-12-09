const timedisplay=()=>{
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let session='AM';
    if(hours==0) h=12
    if(hours>12){
        h=h-12;
        session='PM';
    }
    hours=(hours<10) ? "0"+hours:hours;
    minutes=(minutes<10)?"0"+minutes:minutes;
    seconds=(seconds<10)?"0"+seconds:seconds;
    let time=hours+":"+minutes+":"+seconds+" "+session;
    document.getElementById("clockdisplay").innerText=time;
    //console.log(time);     --using this syntax for run on terminal with node cmd
    setTimeout(timedisplay,1000);
}
timedisplay();
