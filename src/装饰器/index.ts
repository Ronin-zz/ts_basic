function sealed(value: string) {
  return function (target: Function) {};
}

@sealed('sealed')
class Cloth {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
}
