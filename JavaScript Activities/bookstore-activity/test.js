const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element < 10);

// console.log(found);
// expected output: 12

// function foundx() {
//     if (array1.find(element => element < 10)) {
//         console.log ()
//     }
// }

function foundX() {
    if (found !== undefined) {
        console.log(found)
    } else {
        console.log('error')
    }
}

foundX();