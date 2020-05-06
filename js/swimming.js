let johnDays = [];
let jackDays = [];
let bothDays = [];

for (let day = 1; day < 366; day++) {
    if (day % 3 === 0) {
        jackDays.push(day);
    } else if (day % 50 === 0) {
        bothDays.push(day);
    } else {
        johnDays.push(day);
    }
}

const johnData = document.getElementById('johnData');
johnData.innerHTML = johnDays;

const jackData = document.getElementById('jackData');
jackData.innerHTML = jackDays;

const bothData = document.getElementById('bothData');
bothData.innerHTML = bothDays;
