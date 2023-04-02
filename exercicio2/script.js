function checkIsOdd(number) {
  const isOdd = number % 2 !== 0

  if (!isOdd) {
    return alert(`O valor ${number} é par.`)
  }

  return alert(`O valor ${number} é impar.`)
}

checkIsOdd(Number(prompt('Digite o valor a ser checado se é impar')))