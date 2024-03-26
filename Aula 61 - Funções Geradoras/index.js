function* geradora1() {
  yield "Valor 1";
  //Código qualquer...
  yield "Valor 2";
  //Código qualquer...
  yield "Valor 3";
}
const g1 = geradora1();

for (let valor of g1) {
  console.log(valor);
}

////////////////////////////
function* contador() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const c1 = contador();
console.log(c1.next().value);
console.log(c1.next().value);
console.log(c1.next().value);

///////////////////////
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

///////////////////////
function* geradora5() {
  yield function(){
    console.log('Vim do Y1');
  }

  yield function() {
    console.log('Vim do Y2');
  }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();