const fs = require("fs");
let data = fs.readFileSync('./day2.txt', { encoding: 'ascii' }).split('\r\n')

let valid = 0
let isValid = false
let prev = 0
let direction = true

let data2


for (let i = 0; i < data.length; i++) {
    const report = data[i].split(' ');
    isValid = true

    for (let k = 0; k < report.length; k++) {
        data2 = report.map((x) => x)
        data2.splice(k, 1)
        //console.log("data1", report);
        console.log("data2", data2);

        prev = data2[0]
        if (prev - data2[1] > 0) {
            direction = true
        } else if (prev - data2[1] < 0) {
            direction = false
        }

        if (Math.abs(prev - data2[1]) > 3 || Math.abs(prev - data2[1]) === 0) {
            console.log("skip");
            continue
        }

        for (let j = 1; j < data2.length; j++) {
            const element = data2[j];
            console.log(prev, element);

            if (prev - element < 0 && !direction && (Math.abs(prev - element) < 4 && Math.abs(prev - element) > 0)) {
                isValid = true
                prev = element
            } else if (prev - element > 0 && direction && Math.abs(prev - element) < 4 && Math.abs(prev - element) > 0) {
                isValid = true
                prev = element
            } else {
                isValid = false
            }
        }
        console.log(isValid);
        if (isValid) {
            valid++
            break;
        }


    }

    /* for (let j = 1; j < report.length && isValid; j++) {
        const element = report[j];
        //console.log(prev,element,direction, Math.abs(prev - element));


        if (prev - element < 0 && !direction && (Math.abs(prev - element) < 4 && Math.abs(prev - element) > 0)) {
            isValid = true
            prev = element
        } else if (prev - element > 0 && direction && Math.abs(prev - element) < 4 && Math.abs(prev - element) > 0) {
            isValid = true
            prev = element
        } else {
            //console.log("NOT VALID");

            isValid = false
        }
    } */


}

console.log(valid);
