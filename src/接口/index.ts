interface Person {
  username: string;
  password: string;
  sex: '男' | '女';
}

let person: Person;

person = { username: '', password: '', sex: '男' };

function printPerson<T extends keyof Person>(p: Person, val?: T): string[] {
  let arr: string[] = [];
  Object.keys(p).map((item) => {
    console.log(item);
    arr.push(item);
  });
  return arr;
}
printPerson(person, 'password');

interface LabelValue {
  label: string;
}

let val: LabelValue = { label: '' };

function printLabel(val: LabelValue) {
  val.label;
}

interface Animal {
  name: string;
  age: number;
  isHot?: boolean;
}

let cat: Animal = { name: '', age: 0 };

let dog: Animal = { name: '', age: 0, isHot: true };

interface Book {
  readonly name: string;
  price: number;
}

let book: Book = { name: '陆炳勋', price: 0 };

interface Counter {
  (x?: number, y?: number): void;
  count: number;
}

function getCounter(): Counter {
  let counter: Counter;
  counter = function (x, y) {} as Counter;
  counter.count = 0;
  return counter;
}

console.log(getCounter().count);

interface IndexLabel {
  [index: string]: string;
}
let indexLabel: IndexLabel = { k: '123', b: '2' };

let valItem = indexLabel['k']; // string
interface IndexSign {
  readonly [index: number]: string;
}
let indexSign: IndexSign = ['1', '2'];

// indexSign[0] = '3'; 只读

interface ClassInterface {
  currentTime: Date;
  setTime(date: Date): Date;
}

class Clock implements ClassInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
  setTime(date: Date): Date {
    return date;
  }
}

let clock = new Clock(1, 2);
console.log(clock.currentTime);
console.log(clock.setTime(new Date()));

/* ------------------------------------------------------------------------------------- */
/* 当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误， */
// interface ClockConstructor {
//   new (hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }

// 我们应该直接操作类的静态部分。 看下面的例子，我们定义了两个接口， ClockConstructor为构造函数所用和ClockInterface为实例方法所用
interface ClockContructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}

// 为了方便我们定义一个构造函数 createClock，它用传入的类型创建实例。
function createClock(ctor: ClockContructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock');
  }
}

createClock(DigitalClock, 12, 12);
createClock(AnalogClock, 12, 12);

interface Parent {
  name: string;
}
interface Color {
  name_color: string;
}

interface Children extends Parent, Color {}

let children: Children = { name: '123', name_color: '123' };
