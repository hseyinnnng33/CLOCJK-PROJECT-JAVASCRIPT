const clock = document.querySelector(".display");
setInterval(function(){
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let counTR = "Turkey";
    clock.innerHTML = hr +":"+ min + ":"+ sec +"<br>"+ counTR;
});

