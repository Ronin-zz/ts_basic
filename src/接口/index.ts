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

// 定义一个接口，接口是构造函数类型
interface ClockContructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}

// interface ClockConstructor {
//   new (hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }

// 通过 ctor 进行检验类的 constructor 的类型是否符合标准
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
