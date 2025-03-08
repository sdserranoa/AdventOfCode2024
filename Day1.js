const fs = require("fs");
let data = fs.readFileSync('./day1.txt', { encoding: 'ascii' }).split('\r\n')

let list1 = []
let list2 = []

data.forEach(line=> {
    list1.push(Number(line.split('   ')[0]))
    list2.push(Number(line.split('   ')[1]))

})

list1.sort()
list2.sort()
let sum = 0

for (let i = 0; i < list1.length; i++) {
    sum+= Math.abs(list1[i]-list2[i])
}

//console.log(sum);

sum = 0


for (let i = 0; i < list1.length; i++) {
    const num = list1[i];
    for (let j = 0; j < list2.length; j++) {
        const element = list2[j];
        if (num === element) {
            sum += element
        }
    }
}

console.log(sum);