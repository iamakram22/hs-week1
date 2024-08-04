/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` */

const fs = require('fs');

function clean(data) {
    data = data.split(' ');
    let newData = [];
    for(let i = 0; i < data.length; i++) {
        if(data[i].length > 0) newData.push(data[i]);
    }
    newData = newData.join(' ');
    return newData;
}

fs.readFile('./test.txt', 'utf-8', (err, data) => {
    let cleaned = clean(data);
    // let cleaned = data.split(' ').filter(e => e.length > 0).join(' '); // concise approach
    fs.writeFile('./test.txt', cleaned, 'utf-8', (err) => {
        if(err) {
            console.error(err); return;
        }
        console.log('Done');
    })
});