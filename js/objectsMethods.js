// user = {
//   sayHi: function () {
//     alert('Hello');
//   }
// };

// user = {
// sayHi() {
//   alert("Hello");
// }
// };

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert(this.name);
//   }
// };



// let arrow = {
//   firstName: "Jon",
//   sayHi() {
//     let arrow = () =>alert(this.firstName);
//     arrow();
//   }
// };

// user.sayHi();

// const person = {
//   name: "Lynda",
//   age: 21
// }

// const changeAge = (x = { ...person }) => x.age += 1;
// const changeAgeAndName = (x = { ...person }) => {
//   x.age += 1
//   x.name = "Sarah"
// }

// changeAge(person);
// changeAgeAndName();

// console.log(person);


// function generateRandomString(length) {
//   let text = "";
//   let possible = "abc";
   
//   for (let i = 0; i < length; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
   
//   return text;
// }

// console.log(generateRandomString(2));

// let users = ['user1','user2','user3'];

// let getArrayElements = (arr, n) => {
//   let resultArray = [];
//   for (let i = 0; i < n; i += 1) {
//     resultArray.push(arr.splice(Math.floor(Math.random() * n), 1)[0]);
//   }
//   return resultArray;
// }


// console.log(getArrayElements(users,2))


// const forAllRate = (rate) =>{
//   let users = [
//              {name:"Витя",count:rate},
//              {name:"Глеб",count:rate},
//              {name:"Паша",count:rate}
//             ];


// const bank = users.reduce((current,next)=>({count:current.count+next.count})).count/2;


// let getArrayElements = (arr, n) => {
//   let resultArray = [];
//   for (let i = 0; i < n; i += 1) {
//     resultArray.push(arr.splice(Math.floor(Math.random() * n), 1)[0]);
//   }
//   return `${resultArray[0].name} и ${resultArray[1].name} выиграли по ${bank}` ;
// }
// return getArrayElements(users,2);
// }

// alert(forAllRate(10))


const forAllRate = (rate=+prompt("Ставка для всех игроков")) =>{
  let users = [
             {name:"Витя",count:rate},
             {name:"Глеб",count:rate},
             {name:"Паша",count:rate}
            ];


const bank = users.reduce((current,next)=>({count:current.count+next.count})).count/2;


let getArrayElements = (arr, n) => {
  let resultArray = [];
  for (let i = 0; i < n; i += 1) {
    resultArray.push(arr.splice(Math.floor(Math.random() * n), 1)[0]);
  }
  return `${resultArray[0].name} и ${resultArray[1].name} выиграли по ${bank}` ;
}
return getArrayElements(users,2);
}


alert(forAllRate())