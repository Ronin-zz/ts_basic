// 普通创建函数
function add(x: number, y: number): number {
  return x + y;
}

// 匿名函数
let myFunc2 = function (x: number, y: number): number {
  return x + y;
};

// 完整版函数
let myFunc: (arr: Array<number>, val: number) => boolean;
myFunc = function (arr: Array<number>, val: number): boolean {
  return arr.includes(val);
};

function search(val?: string, isMerge: boolean = false) {
  console.log(val);
}

function counts(number = 1, isMerge: boolean) {
  console.log(number);
}

// search(false);
counts(undefined, false);

function isParent(...args: number[]): string[] {
  return args.join().split(',');
}

isParent(1, 2, 3);

interface Dicker {
  suits: Array<Date>;
  date: Date;
  installs(): void;
  createCardPicker: Function;
}

let dicker: Dicker = {
  date: new Date(),
  installs: (): void => {
    console.log(this); // error 包含箭头函数捕获 "this" 的全局值
  },
  createCardPicker: function (this: Dicker) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
dicker.installs();

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
  info: string;
  onClickBad(this: void, e: Event) {
    // oops, used this here. using this callback would crash at runtime
    // this.info = e.message;
  }
  onClickGood = (e: Event) => {
    // 可以使用 this
    this.info = e.message;
  };
}
let h = new Handler();

let uiElement: UIElement = {
  addClickListener(onclick: (e: Event) => void) {
    document.addEventListener('click', onclick);
  },
};

uiElement.addClickListener(h.onClickBad); // error!

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
