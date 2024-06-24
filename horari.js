let enter = document.getElementById('enter');
let hide = document.getElementById('hide');
let tds = [...document.querySelectorAll("td")];

const monthsInDutch = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];


function writeNumberDays() {
    let date = new Date();
    tds[0].innerText = monthsInDutch[date.getMonth()+1] + " " + date.getFullYear();
    tds[1].innerText = "Planning";


    let number = 1;
    let counter = 4;
    for (counter ; counter <= 60; counter += 4 ) {
        tds[counter].innerText = number;
        tds[counter].style.backgroundColor = '#FFFFCC';
        number++;
    }

    let numberSecondRow = 16;
    counter = 2;
    for (counter ; counter <= 60; counter += 4 ) {
        tds[counter].innerText = numberSecondRow;
        tds[counter].style.backgroundColor = '#FFFFCC';
        numberSecondRow++;
    }
}

function busNumbers() {
    let date = new Date();
    let counter = 5;
    for (counter; counter<=61; counter += 4) {
        let bus = prompt(monthsInDutch[date.getMonth()+1] + " " + tds[counter-1].innerText);
        tds[counter].innerText = bus;
    }

    counter = 3;
    for (counter; counter<=61; counter += 4) {
        let bus = prompt(monthsInDutch[date.getMonth()+1] + " " + tds[counter-1].innerText);
        tds[counter].innerText = bus;
    }    

    
    if (has31(date.getMonth()+2)) {
        tds[62].innerText = "31";
        let bus = prompt(monthsInDutch[date.getMonth()+1] + " " + tds[counter-1].innerText);
        tds[62].style.backgroundColor = '#FFFFCC';
        tds[63].innerText = bus;
    }


}



function has31(month) {
    let monthsWith31 = [1, 3, 5, 7, 8, 10, 12];
    if (monthsWith31.includes(month)) return true; 

    return false;
}


writeNumberDays();

enter.addEventListener('click', busNumbers);
hide.addEventListener('click', () => {
    enter.style.display = 'none';
    hide.style.display = 'none';
})