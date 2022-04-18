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
##### 3.4、接口形式的函数调用签名
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

// 定义一个类实现接口
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
```