const date = new Date();

const renderCalendar = () => {
    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    const firstDayIndex = date.getDay();
    console.log(firstDayIndex);
    
    const nextDays = 7 - lastDayIndex - 1;
    
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    document.querySelector('.date h1').innerHTML
    = months[date.getMonth()];
    
    let days = "";
    
    for(let x = firstDayIndex + 1; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    } 
    
    for(let i = 1; i <= lastDay; i++) {
        monthDays.innerHTML = days;
            days += `<div>${i}</div>`;
    }
    
    for(let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
    
}


document.querySelector('.left').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

document.querySelector('.right').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})

renderCalendar();