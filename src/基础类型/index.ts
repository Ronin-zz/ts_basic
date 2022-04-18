let n: number;

n = 12;
n = 12.3;
n = -12;
console.log(n);

let str: string;
str = '123';
str = `${n}`;
// str = new String('123');

let bol: Boolean;
let bol1: boolean;
bol1 = true;
bol = false;
// bol = new Boolean(true);

console.log(bol.valueOf());

var arr: number[] = [1, 2, 3];
var arr: Array<number> = [1, 2, 3];

console.log(arr);

// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为
let tuple: [number, string] = [1, '2'];
let one = tuple[0]; // number
let two = tuple[1]; // string

enum Status {
  Success,
  Fail = 4,
}

let s: string = Status[4];
console.log(s);

function getValue(params: string): void {
  console.log(params.padStart(10, '-'));
}
getValue('123');

function receiptValue(o: Object | null) {
  o?.valueOf();
}

receiptValue({});
