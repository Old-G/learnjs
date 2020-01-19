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



let arrow = {
  firstName: "Jon",
  sayHi() {
    let arrow = () =>alert(this.firstName);
    arrow();
  }
};

user.sayHi();