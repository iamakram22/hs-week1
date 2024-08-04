/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function printTime() {
    let cd = new Date();
    let hour = cd.getHours() >= 12 ? cd.getHours() - 12 : cd.getHours();
    let currentTime = hour + ':' + cd.getMinutes() + ':' + cd.getSeconds() + ' ';
    currentTime += hour > 12 ? 'PM' : 'AM'
    return currentTime;
}

function showClock() {
    console.clear()
    console.log(printTime());
}

setInterval(showClock, 1000);