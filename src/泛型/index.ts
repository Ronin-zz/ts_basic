function identity<T>(arg: T): T {
  return arg;
}

identity<string>('1');
identity(1);

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

// 我们还可以使用带有调用签名的对象字面量来定义泛型函数：
let myIdentity: { <T>(arg: T): T } = identity;

interface Family<U> {
  (x: number): U;
}

let family: Family<number> = (x) => {
  return x;
};

class Air<K> {
  color!: K;
}

let demos = new Air<string>();
demos.color = 'red';

function test<T extends { name: string }>(val: T) {
  if ((val.name = '1')) {
    console.log(val.name);
  }
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a'); // okay
// getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

function classEsFunc<T>(c: { new (): T }) {
  return new c();
}

function createArrowFunc<U>(c: new () => U): U {
  return new c();
}
