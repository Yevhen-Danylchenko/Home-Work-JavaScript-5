// ===================== Завдання 1 ====================

// let num = [12,56,89,34];

// num.splice(1,1);
// num.splice(1,0,45);

// console.log(num);


// ======================= Завдання 2 ==========================

// let num = [12,56,89,34,4,-33];

// let sum = 0;

// for (i of num) {
//     sum += i;
// }

// console.log(sum);


// ====================== Завдання 3 ============================

// let num = [23,77,45,12,56,3,6,2,4,11];

// for (i of num) {
//     console.log(i);
// }


// ===================== Завдання 4 =========================

// let num = [23,77,45,12,56,3,6,2,4,11,0,-5,99,-8,-99];
// let result = num[0];

// for (i of num) {
//     if (result <= i) {
//         result = i;
//     }
// }

// console.log(result);


// ====================== Завдання 5 ==========================

// let stroke = ['dfgh', 'qwertyuio', 'fg', 'rtyug'];

// for (i of stroke) {
//     if (i.length > 7) {
//         console.log(i);
//     }
// }


// ===================== Завдання 6 ==========================

// let stroke = ['dfgh', 'qwertyuio', 'fg', 'rtyug'];

// stroke = stroke.join(', ');

// console.log(stroke);


// ======================= Завдання 7 ========================

// let stroke = prompt('Введіть рядок:');
// let stroke1 = '';

// for (i of stroke) {
//     if (i.toLowerCase() === i) {
//         stroke1 += i.toUpperCase();
//     }
//     else {
//         stroke1 += i.toLowerCase();
//     }
// }

// alert(stroke1);


// ===================== Завдання 8 ===========================

let mass = prompt('Введіть данні:');

mass = mass.split(' ');

console.log(mass);
