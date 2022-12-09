
document.body.style.background = "yellow";              /* заменим цвет фона на желтьій, */


let timerId = setInterval(() => {                        /* каждую 1 сек изменим цвет фона на ...*/
    if (document.body.style.background == "yellow") {
        document.body.style.background = "red";
    } else if (document.body.style.background == "green") {
        document.body.style.background = "yellow";
    } else {
        document.body.style.background = "green";
    }
}, 1000
);

let timerId1 = setTimeout( () => {                        /* а через 12 секунд вернём как было*/
    clearInterval(timerId);
    document.body.style.background = "yellow"; 
    alert("Stop"); 
}, 12000 
);





