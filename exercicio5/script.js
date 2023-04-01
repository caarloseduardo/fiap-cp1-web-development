const credentials = {
  user: 'admin',
  password: '1234'
}

const user = prompt('Qual o seu usuário?')
const password = prompt('Qual a sua senha?')

function checkCredentials(user, password) {
  if (user !== credentials.user || password !== credentials.password) {
    return alert('As suas credenciais estão incorretas.')
  }
  return alert('O login foi realizado com sucesso')
}

checkCredentials(user, password)