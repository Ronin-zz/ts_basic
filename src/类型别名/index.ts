type TypeStringOrNumber = string | number;

type FuncReturnValString = () => string;

let stringFunc: FuncReturnValString;

stringFunc = () => {
  return '';
};

type ModeFunction<T> = (...args: T[]) => T;

let mode: ModeFunction<number>;

mode = (...args) => {
  return args[0];
};
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
};

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => o[n]);
}

let obj = { a: 1, b: 2, c: 3 };

pluck(obj, ['b', 'a']);

type Demos<T> = {
  readonly [P in keyof T]?: T[P];
};

interface PersonInfo {
  name: string;
  age: number;
}

type PersonInfoDemos = Demos<PersonInfo>;

type fileRedirect<T> = {
  [key in keyof T as `get${Capitalize<key & string>}`]: T[key];
};
type Res = fileRedirect<PersonInfo>;

type IsString<T> = T extends string ? true : false;

type isBole = IsString<PersonInfo>;
