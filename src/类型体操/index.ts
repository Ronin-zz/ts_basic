type Ids = number[];

type Names = string[];

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type DemoInfer<T> = T extends (...args: any) => infer R ? R : any;

type Func = () => string;

type UserEs = DemoInfer<Func>;

type Foo<T> = T extends { a: infer U; b: infer E } ? U | E : never;

type T11 = Foo<{ a: string; b: number; c: boolean }>;

type PromiseRes<T> = T extends Promise<infer U> ? U : T;

type Responses = PromiseRes<Promise<ResponseDate<GoodsLists[]>>>;

type ResponseDate<T> = {
  code: number;
  msg: string;
  data: T;
};

interface GoodsLists {
  name: string;
  price: number;
  isHot: boolean;
}

function createPromise(): Promise<ResponseDate<GoodsLists[]>> {
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      msg: 'success',
      data: [{ name: 'iphone', price: 10000, isHot: true }],
    });
  });
}

type ArrToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};
const arrs = ['12', 'js', 'javascript'] as const;
type demos = ArrToObject<typeof arrs>;
