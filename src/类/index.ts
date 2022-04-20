// 类的修饰符 private-> 不能在类的外部访问  |  protected-> 在类的派生类中可以访问 | public-> 在所有地方可以访问
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

class Point {
  static isAnl() {
    return 'static Point is anl';
  }
  static origin = { x: 0, y: 0 };
  constructor(private _x: number, private _y: number) {}
}
console.log(Point.origin);

// 抽象类做为其它派生类的基类使用
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

class PointClass {
  x!: number;
  y!: number;
}

interface Point3d extends PointClass {
  z: number;
}
let point3d: Point3d = {
  x: 1,
  z: 0,
  y: 0,
};

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
