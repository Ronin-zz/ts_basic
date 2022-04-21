function sealed(value: string) {
  console.log('one');

  return function (target: Function) {};
}
function desc(bole: boolean) {
  console.log('two');
  return function (target: Function) {};
}

@sealed('sealed')
@desc(false)
class Cloth {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
}
interface Us {
  name: string;
  age: number;
}
// 例子：
type Is = InstanceType<new () => { name: string; age: number }>; // type Is = {name: string; age: number;}
