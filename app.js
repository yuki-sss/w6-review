// Q1

// class Cat {
//   constructor() {
//     this.name = "Whiskers";
//   }
//   meow() {
//     return `${this.name} says meow!`;
//   }
// }
// let myCat = new Cat();
// console.log(myCat.meow());
//解答：thisが抜けている

// Q2

// class Student {
//   constructor(name) {
//     this.name = name;
//   }
//   getName = function () {
//     return this.name;
//   };
// }
// let student1 = new Student("Alice");
// console.log(student1.getName());
//解答：getNameメソッドを呼び出すのに()を追加する必要がある。

// Q3

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }
// let myRectangle = new Rectangle(5, 10);
// console.log(myRectangle.calculateArea());
//解答：calculateAreaメソッド内のthisが抜けている。

// Q4.
// Personという名前のクラスを作成してください。このクラスには以下の条件を満たすconstructorメソッドとsayHelloメソッドを実装してください。

// constructorメソッドはnameという引数を一つ取ります。この引数はインスタンスのプロパティとして保存されます。
// sayHelloメソッドは特に引数を取らず、"[name] says hello!"という形式でメッセージを出力します。ここで[name]はPersonのインスタンスの名前です。

// さらに、上記クラスを使って以下の動作を実現するコードを書いてください。
// "John"という名前のPersonのインスタンスを作成します。
// 作成したインスタンスのsayHelloメソッドを呼び出します。

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `${this.name} says hello!`;
  }
}

const john = new Person("John");
console.log(john.sayHello());

// Q5.
// Personという名前のクラスを作成してください。
// このクラスは以下の条件を満たすconstructorメソッドとspeakメソッドを実装してください。

//  ・constructorメソッドはnameとageという2つの引数を取ります。
// これらの引数はそれぞれインスタンスのプロパティとして保存されます。
// ・nameは文字列、ageは整数を受け取ります。
// ・speakメソッドは特に引数を取らず、"{一人称}は[name]という名前です。[age]歳です。よろしく!"という形式でメッセージを出力します。
// ・ageが20未満なら{一人称}は"僕"、それ以上なら"私"という文字列が適応されるよう条件を加えてください。

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    let first = "私";
    if (this.age < 20) {
      first = "僕";
    }
    document.getElementById(
      "speak"
    ).innerHTML = `${first}は${this.name}という名前です。${this.age}歳です。よろしく!`;
  }
}
const person1 = new Person1("山田", 27);
person1.speak();
