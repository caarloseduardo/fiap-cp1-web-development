function average(grades) {
  if (grades.length !== 7) {
    return alert('É preciso ser 7 notas para fazer média.')
  }

  let sum = 0

  grades.forEach(grade => {
    sum += Number(grade)
  })

  const average = (sum / grades.length).toFixed(1)

  return alert(`A média das ${grades.length} notas é ${average}`)
}

const grades = prompt('Quais são as notas? (Obrigatório 7 notas)\nOBS: Separe as notas com ";".').split(';')

average(grades)