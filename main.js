let  [seconed, minutes , hours]=[0,0,0]
let dt = document.getElementById("display-time")
let timer = null

function stopwatch(){
    seconed++;
    if(seconed==60){
        seconed=0
        minutes++;
        if(minutes==60){
            minutes=0
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconed < 10 ? "0" + seconed : seconed

    dt.innerHTML = h + ":" + m + ":" + s
}


function watchstart (){
    if(timer != null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
}
function watchstop(){ 
           clearInterval(timer)
}
function watchreset(){ 
           clearInterval(timer);
            [seconed, minutes, hours] = [0, 0, 0]
            dt.innerHTML="00:00:00"
}