// let n = + '155';
// console.log(`Bigint ${n}`)

// if (5<9){
//     console.log('yes')
// }else{
//     console.log('not')
// }
// 
// if (5 <= 9){
//     console.log('yes')
// }else if (3<7){
//     console.log('no')
// }else if (12>16){
//     console.log('qwerty')
// } else {
//     console.log('asdfgh')
// }

// let a = 2;
// switch (a){
//     case 1:
//         console.log(1)
//         break;
//     case 2:
//         console.log(2)
//         break;
//     case 3:
//         console.log(3)
//         break;
//     default:
//         console.log('error')
// }

// let state = 9 + 15 < 3;
// let a = state ? console.log('yes') :
//     (2>6) ? console.log('qwerty') :
//     (2*9 == 3) ? console.log('qwerty') : console.log('false')


// let i = 0;
// while (i < 6) console.log(i++);

// do {
//     console.log(i--)
// }while(i>0)
 

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// let array = [45, 12, 45, 78, 36]
// let array = {
//     'name': 'Vasya',
//     'age': 18,
//     'email': 'admin@shop.ru'
// }
// for (let i in array){
//     console.log(array[i]);
//     if (i=='age'){
//         break;
//     }
// }


// for (let i=0; i<=5; i++){
//     for (let j=0; j<=5; j++){
//         console.log(i, j)
//         if (i==3){
//             break ;
//         }
//     }
// }

// console.log(summ(2,3))
// function summ(a,b){
//     let one, two;
//     function first(x){
//         one = x
//     }
//     function second(x){
//         two = x
//     }
//     first(a);
//     second(b)
//     rez = one+two
//     return one+two
// }
// console.log(rez)

// function first(x){
//     one = x
// }
// function second(x){
//     two = x
// }
// console.log(summ(2,3, first, second))
// var rez;
// function summ(a=0, b=0, first, second){
//     var one, two;

//     one = first(a);
//     two = second(b)
//     rez = one + two;
//     return one + two
// }
// console.log(rez)

// Задание 1

// let a = 10;
// if (a == 10){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }

// Задание 2 

// let min = 58;
// let time = (min < 0) ? 'None' :
//  (min <=15) ? 'Первая четверть' :
//  (min <= 30) ? 'Вторая четверть' :
//  (min <= 45) ? 'Третья четверть' :
//  (min <= 59) ? 'Четвёртая четверть' : 'None'; 
// console.log(time)

// Задание 3

// let lang = 'en';
// let arr;
// if (lang == 'ru'){
//     arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
// }else  if (lang == 'en'){
//     arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
// }
// console.log(arr)

// let lang = 'ru';
// let arr;
// switch (lang){
//     case 'ru':
//     arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
//     break;
//     case 'en':
//     arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
//     break;
// }
// console.log(arr)

// let lang = 'en';
// let arr = {
//     ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
// }[lang];
// console.log(arr)

// Задание 4

// let a = 0;
// if (a == 0){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// let a = 0;
// if (a > 0){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// let a = -3;
// if (a < 0){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// let a = 0;
// if (a >= 0){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// let a = 1;
// if (a <= 0){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// let a = 1;
// if (a != 0){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// let a = 'test';
// if (a === 'test'){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// let a = '1';
// if (a === '1'){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// };

// Задание 5

// let a = -1;
// if (a > 0 && a < 5){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// };

// let a = 2;
// if (a == 0 || a == 2){
//     console.log(a + 7)
// }else{
//     console.log(a/10)
// }

// let a = 3, b = 5;
// if (a <= 1 && b >= 3){
//     console.log(a + b)
// }else{
//     console.log(`a - b = ${a - b}`)
//     console.log(`b - a = ${b - a}`)
// }

// let a = 3, b = 7;
// if (a > 2 && a < 11 || b >= 6 && b < 14){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// Задание 6

// let num = 4;
// switch (num){
//     case 1:
//     console.log('Зима');
//     break;
//     case 2:
//     console.log('Весна');
//     break;
//     case 3:
//     console.log('Лето');
//     break;
//     case 4:
//     console.log('Осень');
//     break;
// }

// Задание 7

// let day = 31;
// if (day > 0 && day <= 10){
//     console.log('Первая декада')
// }else if (day > 10 && day <= 20){
//     console.log('Вторая декада')
// }else if(day > 20 && day <= 31){
//     console.log('Третья декада')
// }else{
//     console.log('None')
// }

// let month  = 12;
// if (month  > 0 && month  <= 2 || month == 12){
//     console.log('Зима')
// }else if (month  > 2 && month  <= 5){
//     console.log('Весна')
// }else if(month  > 5 && month  <= 8){
//     console.log('Лето')
// }else if (month > 8 && month <=11){
//     console.log('Осень')
// }else{
//     console.log('None') 
// }

// let str = 'abcde';
// if (str[0] == 'a'){
//     console.log('да')
// }else{
//     console.log('нет')
// }

// let str = '12345';
// if (str[0] == '1' || str[0] == '2' || str[0] == '3'){
//     console.log('да')
// }else{
//     console.log('нет')
// }

// let str = '423';
// console.log(parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]))

// let str = '123321';
// if ((parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2])) == (parseInt(str[3]) + parseInt(str[4]) + parseInt(str[5]))){
//     console.log('да')
// }else{
//     console.log('нет')
// }
