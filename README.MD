## 基础类型

#### 1、number

```ts
let n: number;

n = 12;
n = 12.3;
n = -12;
```

#### 2、string

```ts
let str: string;
str = '123';
str = `${n}`;
// str = new String('123'); 不行
```

#### 3、boolean

```ts
let bol: Boolean;
let bol1: boolean;
bol1 = true;
bol = false;
// bol = new Boolean(true);

console.log(bol.valueOf());
```

#### 4、数组

```ts
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
var arr: number[] = [1, 2, 3];
// 第二种方式是使用数组泛型，Array<元素类型>：
var arr: Array<number> = [1, 2, 3];

console.log(arr);
```

#### 5、元组

```ts
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为
let tuple: [number, string] = [1, '2'];
let one = tuple[0]; // number
let two = tuple[1]; // string
tuple[2] = '3'; // error, 元组类型允许越界访问
```

#### 6、枚举

```ts
// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
enum Status {
  Success,
  Fail = 4,
}
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
let s: string = Status[4];
console.log(s);
```

#### 7、any

```ts
let a: any;
a = 12;
a = '12';
a = [];
```

#### 8、void

```ts
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function getValue(params: string): void {
  console.log(params.padStart(10, '-')); // -------123
}
getValue('123');
```

#### 8、Null 和 Undefined

```ts
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null
let u: undefined = undefined;
let n: null = null;
```

#### 8、Never

```ts
// never类型表示的是那些永不存在的值的类型
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never
function error(message: string): never {
  throw new Error(message);
}
```

#### 8、Object

```ts
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never
function error(message: string): never {
  throw new Error(message);
}
```

## 类型推论以及类型断言

#### 1、类型推论

```ts
// 当不指定一个类型时，ts会推断出这个类型
let n1 = 12;
let n2 = 14;
```

#### 2、类型断言

```ts
let strAb: any = 'abcdef';
// 类型断言的两种方式
let numLen = (<string>strAb).length;
let numLens = (strAb as string).length;
```
#### 3、接口
##### 3.1、定义一个接口
```ts
// 定义一个接口
interface Person {
  username: string;
  password: string;
  sex: '男' | '女';
}

let person: Person;

person = { username: '', password: '', sex: '男' };


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
```
##### 3.2、接口的可选属性
```ts
// 接口的可选属性
interface Animal {
  name: string;
  age: number;
  isHot?: boolean;
}

let cat: Animal = { name: '', age: 0 };

let dog: Animal = { name: '', age: 0, isHot: true };
```
##### 3.3、接口的只读属性
```ts
// 接口的只读属性
interface Book {
  readonly name: string;
  price: number;
}

let book: Book = { name: '陆炳勋', price: 0 };

book.name = ''; // 无法分配到 "name" ，因为它是只读属性
```
##### 3.4、接口形式的函数调用签名（混合类型）
```ts
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
```
##### 3.5、可索引的类型
```ts
interface IndexLabel {
  [index: string]: string;
}

let indexLabel: IndexLabel = { k: '123', b: '2' };
let valItem = indexLabel['k']; // 可以通过索引获取值的正确类型为 string


interface IndexSign {
  readonly [index: number]: string;
}
let indexSign: IndexSign = ['1', '2'];

// indexSign[0] = '3'; 只读
```

##### 3.6、类实现接口
```ts
// 定义一个接口
interface ClassInterface {
  currentTime: Date;
  setTime(date: Date): Date;
}

// 定义一个类实现接口，接口描述了一个类的公共部分
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

// --------------------------------------------------------------------------------------------------------------
// 当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误，
// 因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) { }
}

// 正确的写法：因此，我们应该直接操作类的静态部分，我们定义了两个接口，ClockConstructor为构造函数所用和ClockInterface为实例方法所用
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

// ==================================================================================
// 接口继承接口
interface Parent {
  name: string;
}
interface Color {
  name_color: string;
}

interface Children extends Parent, Color {}

let children: Children = { name: '123', name_color: '123' };
// ==================================================================================
// 接口继承类
// 当一个接口继承了一个拥有私有的或受保护的成员类是，这个接口类型只能被这个类或其子类实现了
class Control {
  private state: any;
}
// SelectableControl 继承了具有私有属性的 Control 类，所以这个接口只能被 Control 的子类实现
interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}
class Images extends Control implements SelectableControl {
  select() {}
}
```

#### 4、类

##### 4.1、类的修饰符
```ts
// public > protected > private
// public 在哪里都可以访问
// protected 在派生类中可以访问
// private 只能在当前类的内部访问
class PersonClass {
  protected readonly age: number = 12;
  // 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
  public constructor(public readonly name: string) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}
let personClass = new PersonClass('张三');

// personClass.name = '李四'; error 只读
```
##### 4.2、类的静态属性(静态方法)
```ts
class Point {
   static isAnl() {
    return 'static Point is anl';
  }
  static origin = { x: 0, y: 0 };
  constructor(private _x: number, private _y: number) {}
}
console.log(Point.origin);
```

##### 4.3、抽象类
```ts
// 抽象类可以有抽象方法或非抽象方法
// 当一个类继承了抽象类，必须要实现抽象类中的所有抽象方法
// 抽象类一般做为其它派生类的基类使用
abstract class Animals {
  constructor(private name: string) {
    this.name = name;
  }
  abstract makeSound(): void; // 必须在派生类中实现
  move(): void {
    console.log('roaming the earch...');
  }
}

class Cat extends Animals {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    throw new Error('Method not implemented.');
  }
}
```

##### 4.4、把类当作接口
```ts
// 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
class PointClass {
  x: number;
  y: number;
}

interface Point3d extends PointClass {
  z: number;
}
let point3d: Point3d = {
  x: 1,
  z: 0,
  y: 0,
}
```

##### 4.5、类的存取器
```ts
class SetClass {
  private name!: string;

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
let setClass: SetClass = new SetClass();
setClass.setName('张三');
console.log(setClass.getName());
```

#### 5、函数
##### 5.1、函数的创建
```ts
// 函数的声明
function add(x: number, y: number): number {
  return x + y;
}

// 函数的表达式
let myFunc2 = function (x: number, y: number): number {
  return x + y;
};

// 完整版函数
let myFunc: (arr: Array<number>, val: number) => boolean;
myFunc = function (arr: Array<number>, val: number): boolean {
  return arr.includes(val);
};
```
##### 5.2、函数的可选参数和默认参数
```ts
function search(val?: string) {
  console.log(val);
}

function counts(number = 1) {
  console.log(number);
}
```

##### 5.3、剩余参数
```ts
function isParent(...args: number[]): string[] {
  return args.join().split(',');
}

isParent(1, 2, 3);
```

##### 5.4、函数中的 this 指向
```ts
interface Dicker {
  date: Date;
  installs(): void;
}

let dicker: Dicker = {
  date: new Date(),
  installs: function (): void {
    console.log(this);  // dicker
  },
};
dicker.installs();

//  错误示范
let dicker: Dicker = {
  date: new Date(),
  installs: (): void => {
    console.log(this); // error 包含箭头函数捕获 "this" 的全局值
  },
};
```

##### 5.5、函数的重载
```ts
function pickCard(x: string): string;

function pickCard(x: number): number;

function pickCard(x: string | number): any {
  if (typeof x === 'string') {
    return '1';
  } else if (typeof x === 'number') {
    return 1;
  }
}

pickCard('1').concat();
pickCard(1).toFixed(0);
```