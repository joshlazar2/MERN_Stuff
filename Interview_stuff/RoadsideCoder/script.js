// const arr = [1,2,3,4,5,6]

// const mapResult = arr.map((ar, i) => {
//     return ar + 2;
// })

// console.log(arr, mapResult)

// const forEachResult = arr.forEach((ar, i) => {
//     return ar + 2;
// })

// console.log(arr, forEachResult)



// let array = [
//     [1, 2],
//     [3, 4],
//     [5, 6, [7, 8], 9],
//     [10, 11, 12]
// ]

// const customFlat = (arr, depth) => {
//     const flat = [];

//     arr.forEach(ar => {
//         if (Array.isArray(ar)) {
//             flat.push(...customFlat(ar));``
//         } else {
//             flat.push(ar);
//         }
//     });

//     return flat;
// }

// console.log(customFlat(array))


// {
//     var a = 'hi'
//     let b = 'hi'
//     const c = 'hi'
// }

// console.log(a)
// console.log(b)
// console.log(c)


var person = {
    name: "Josh",
    pantColor: 'blue',
    hello: function (thing) {
        console.log(this.name + ' wears ' + this.pantColor + ' ' + thing)
    },
}

console.log(person.hello('pants'))

var alterEgo = {
    name: 'Cameron Umpleby',
    pantColor: 'pink'
}

console.log(person.hello.call(alterEgo, 'socks'))