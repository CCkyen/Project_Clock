/*Clock */

    setInterval (function getTime() {
        let dateNow = new Date();
        
            document.querySelector(".clock").innerHTML= 

            dateNow.getHours().toString().padStart(2,"0")+
            ":"+
            dateNow.getMinutes().toString().padStart(2,"0")+
            ":" +
            dateNow.getSeconds().toString().padStart(2,"0");


            },1000);



/*Countdown */            
    
            let dateTarget = new Date ("2022-02-17T17:00:00");

    setInterval(function () {
            const dateNow = new Date().getTime();
            let difference = dateTarget - dateNow;

            const seconds = Math.floor((difference /1000) % 60).toString().padStart(2,"0");
            const minutes = Math.floor((difference / 1000 / 60) % 60).toString().padStart(2,"0");
            const hours = Math.floor((difference / 1000 / 60 / 60) % 24).toString().padStart(2,"0");
        
            document.querySelector(".Countdown").innerText = `${hours}:${minutes}:${seconds}`;
            
}, 1000);

            
/*Digital Countdown Timer w/Datetime-Field */
       
        document.querySelector(".date-button").addEventListener("click",function() {
        dateTarget = new Date(document.querySelector(".date-input").value);


});

