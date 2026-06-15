const text =
"tanggal 11 juni ada apaya?!...";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(i);

        i++;

        setTimeout(typing,80);
    }
}

typing();

for(let i=0;i<150;i++){

    let star = document.createElement("div");

    star.classList.add("star");

    let size = Math.random()*4;

    star.style.width = size+"px";
    star.style.height = size+"px";

    star.style.left = Math.random()*100+"vw";
    star.style.top = Math.random()*100+"vh";

    document.getElementById("stars").appendChild(star);
}

function openGift(){

    document.querySelector(".gift").style.display =
    "none";

    document.getElementById("birthdayCard")
    .classList.remove("hidden");

    document.getElementById("music").play();

    confetti();
}

function showMessage(){
    document.getElementById("popup").style.display = "flex";
}

function Close(){
    document.getElementById("popup").style.display = "none";
}

function confetti(){

    for(let i=0;i<200;i++){

        let c = document.createElement("div");

        c.style.position = "absolute";
        c.style.width = "10px";
        c.style.height = "10px";

        c.style.left =
        Math.random()*100+"vw";

        c.style.top = "-20px";

        c.style.background =
        `hsl(${Math.random()*360},100%,50%)`;

        c.style.transform =
        `rotate(${Math.random()*360}deg)`;

        c.style.transition =
        "all 4s linear";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.style.top = "110vh";
            c.style.opacity = "0";

        },10);

        setTimeout(()=>{

            c.remove();

        },4000);
    }
}