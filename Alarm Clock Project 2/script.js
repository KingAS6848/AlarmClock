//   CURRENT TIME SET
const curr = document.querySelector('#current-T span');


function updateCurrTime() {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, '0');;
    const min = String(time.getMinutes()).padStart(2, '0');
    const sec = String(time.getSeconds()).padStart(2, '0');
    if (hour < 9) {
        curr.innerText = `0${hour}:${min}:${sec}`
    }

    if (min < 9) {
        curr.innerText = `${hour}:0${min}:${sec}`
    }
    if (sec < 10) {
        curr.innerText = `${hour}:${min}:0${sec}`
    }

    curr.innerText = `${hour}:${min}:${sec}`
}

setInterval(updateCurrTime, 1000);
//

//   onclick is used to set Alarm


function setAlarm1() {
    const alarmDate = document.getElementById('input-1').value;

    const d = new Date(alarmDate);
    const n = new Date();
    if (d.getTime() < n.getTime()) {
        alert("alarm Cannot be Set in Past")
    } else {
        alarmSet1(alarmDate);
        const timeLeft = d.getTime() - n.getTime();
        alarmOver(timeLeft);
    }

}

let refOfTimeOut1;
function alarmOver(timeLeft) {
    refOfTimeOut1 = setTimeout(() => {
        // alert('time Over');
        popup1(); //Slider Activate
    }, timeLeft)
}


function del1() {
    if (refOfTimeOut1) {
        clearTimeout(refOfTimeOut1);
    }
    remove();

}


// box2 Copying all Above code Same to same with some variable name changes

function setAlarm2() {
    const alarmDate = document.getElementById('input-2').value;

    const d = new Date(alarmDate);
    const n = new Date();
    if (d.getTime() < n.getTime()) {
        alert("alarm Cannot be Set in Past")
    } else {
        alarmSet2(alarmDate);
        const timeLeft = d.getTime() - n.getTime();
        alarmOver1(timeLeft);
    }

}

let refOfTimeOut2;
function alarmOver1(timeLeft) {
    refOfTimeOut2 = setTimeout(() => {
        // alert('time Over');
        popup1(); //Slider Activate
        


    }, timeLeft)
}

function del2() {
    if (refOfTimeOut2) {
        clearTimeout(refOfTimeOut2);
    }
    remove();

}

// Slider for popup 
function popup1() {

    //   Outer Box Created
    const section = document.getElementById('alarm');
    const slider = document.createElement('div');
    slider.id = "Time-Over-set-slider1";
    section.appendChild(slider);

    // images

    const img = document.createElement('img');
    img.src = "images/TimeOut.png"
    slider.appendChild(img);

    // Text (Span)

    const span = document.createElement('span');
    span.innerText = "TimeOut !";
    slider.appendChild(span);

    //  Text Tips P tag
    const Tips = document.createElement('p');
    Tips.innerText = "THe most powerful warrior is Time.";
    slider.appendChild(Tips);
    setTimeout(() => {
        slider.remove();
    }, 6000)
};


//  Slider for settting a Alarm
function alarmSet1(alarmDate) {

    //   Outer Box Created
    const section = document.getElementById('alarm');
    const slider = document.createElement('div');
    slider.id = "Time-Over-set-slider1"; // Using Style for add alarm
    section.appendChild(slider);

    // images

    const img = document.createElement('img');
    img.src = "images/AdaAlarmBG.png";
    slider.appendChild(img);

    // Text (Span)

    const span = document.createElement('span');
    span.innerText = "Alarm Sucessfully set";
    span.style.fontSize = "2.5rem";
    slider.appendChild(span);

    //  Text Tips P tag
    const Tips = document.createElement('p');
    Tips.innerText = `${alarmDate}`;
    slider.appendChild(Tips);
    setTimeout(() => {
        slider.remove();
    }, 4000);


}

function alarmSet2(alarmDate) {

    //   Outer Box Created
    const section = document.getElementById('alarm');
    const slider = document.createElement('div');
    slider.id = "Time-Over-set-slider1"; // Using Style for add alarm
    section.appendChild(slider);

    // images

    const img = document.createElement('img');
    img.src = "images/AdaAlarmBG.png";
    slider.appendChild(img);

    // Text (Span)

    const span = document.createElement('span');
    span.innerText = "Alarm Sucessfully set";
    span.style.fontSize = "2.5rem";
    slider.appendChild(span);

    //  Text Tips P tag
    const Tips = document.createElement('p');
    Tips.innerText = `${alarmDate}`;
    slider.appendChild(Tips);
    setTimeout(() => {
        slider.remove();
    }, 4000);


}

function remove() {

    //   Outer Box Created
    const section = document.getElementById('alarm');
    const slider = document.createElement('div');
    slider.id = "Time-Over-set-slider1"; // Using Style for remove alarm
    section.appendChild(slider);

    // images

    const img = document.createElement('img');
    img.src = "images/deleteAlarm.png";
    slider.appendChild(img);

    // Text (Span)

    const span = document.createElement('span');
    span.innerText = "Alarm Removed";
    span.style.fontSize = "3rem";
    slider.appendChild(span);

    //  Text Tips P tag
    const Tips = document.createElement('p');

    slider.appendChild(Tips);
    setTimeout(() => {
        slider.remove();
    }, 5000);


}





