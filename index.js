let countHome = document.getElementById("homeCount");
let countGuest = document.getElementById("guestCount");
let countH = 0;
let countG = 0;

function incrementby1home() {
    countH += 1
    countHome.innerText = countH
}

function incrementby2home() {
    countH += 2;
    countHome.innerText = countH
}

function incrementby3home() {
    countH += 3;
    countHome.innerText = countH
}

function incrementby1guest() {
    countG += 1
    countGuest.innerText = countG
}

function incrementby2guest() {
    countG += 2;
    countGuest.innerText = countG
}

function incrementby3guest() {
    countG += 3;
    countGuest.innerText = countG
}

