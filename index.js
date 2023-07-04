const myHours = document.getElementById("hours");
const myMinutes = document.getElementById("minutes");
const mySeconds = document.getElementById("seconds");
const amPm = document.getElementById("am-pm");

updateTime();
setInterval(updateTime, 1000)

function updateTime(){
    let date = new Date();
    myHours.innerHTML = displayHour(date);
    myMinutes.innerHTML = displayMinutes(date);
    mySeconds.innerHTML = displaySeconds(date);

    function displayHour(date){
        let hour = date.getHours();

        if (hour > 12){
            ampm = "PM"
        }

        hour = (hour % 12) || 12;
        hour = doubleDigits(hour);
        
        return `${hour}`
    }

    function displayMinutes(date){
        let minute = date.getMinutes();
        minute = doubleDigits(minute);

        return `${minute}`
    }

    function displaySeconds(date){
        let second = date.getSeconds();
        second = doubleDigits(second);

        return `${second}`
    }

    function doubleDigits(clock){
        clock = clock.toString();

        if (clock.length < 2) {
            return "0" + clock
        } else {
            return clock;
        }
    }


}