const llenar = (array) =>{
  for(let i = 0; i < array.length; i++){
    array[i] = 2 * (i+1);
  }
  return array;
}

const girarDerecha = (array) =>{
  let arraySize = array.length-1
  let ultimoNum = array[arraySize]
  for (let i = arraySize; i>=0; i--){
      let siguienteNum = array[i-1]
      array[i] = siguienteNum
  }
  array[0] = ultimoNum
  return array
}

const girarIzquierda = (array) =>{
  let ultimoNum = array[0]
  for (let i = 0; i<array.length; i++){
      let siguienteNum = array[i+1]
      array[i] = siguienteNum
  }
  array[array.length-1] = ultimoNum
  return array
}

const invertir = (array) => {
  let arraySize = array.length-1
  let e = Math.round(arraySize/2)
  let left = array[0], rigth = array[arraySize];
  for (let i = 0; i<e; i++){
      array[i] = rigth
      array[arraySize] = left
      arraySize-=1
      left = array[i+1]
      rigth = array[arraySize]
  }
  return array;
}

const fake_array = Array(10);

console.log(llenar(fake_array));
console.log(girarDerecha(fake_array));
console.log(girarIzquierda(fake_array));
console.log(girarIzquierda(fake_array));
console.log(invertir(fake_array));
