function isString(val: string | string[]): val is string {
  return typeof val === 'string';
}

let sTest = '123';

if (isString(sTest)) {
  s.length;
} else {
  s.slice(1);
}

function isNumber(val: string | number) {
  if (typeof val === 'string') {
  } else {
    val.toFixed(0);
  }
}

interface Bird {
  cry(): string;
}

class RedBird implements Bird {
  cry() {
    return 'red bird';
  }
}

class BlueBird implements Bird {
  cry() {
    return 'blue bird';
  }
}

function getRandomBird(): Bird {
  const randomBird = Math.random();
  if (randomBird < 0.5) {
    return new RedBird();
  } else {
    return new BlueBird();
  }
}

let bird: Bird = getRandomBird();

if (bird instanceof RedBird) {
  bird.cry();
} else {
  console.log('blue bird');
}
