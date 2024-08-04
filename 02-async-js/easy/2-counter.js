/* Counter without setInterval
 * Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

function counter() {
    console.clear();
    console.log(n);
    n++;
    // setTimeout(counter, 1000); // for infinite
}

let n = 1;
for(let i = 0; i < 10; i++) {
    setTimeout(counter, i * 1000);
}