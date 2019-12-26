// let compName = prompt ("Какое «официальное» название JavaScript?", "");

// if (compName == "ECMAScript") {
//   alert ("Верно!");
// }
// else {
//   alert ("Не знаете? ECMAScript!:");
// }

// let number = prompt ("ВВедите число", "6");

// if (number > 0) {
//   alert (1);
// } else if (number < 0) {
//   alert (-1);
// } else {
//   alert (0);
// }


// let result = (a + b < 4) ? 'Мало' : 'Много';


let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';