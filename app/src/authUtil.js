
const loggedIn = async () => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const response = await fetch('/api/auth/loggedIn', {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin',
    headers: myHeaders,
  })
  const user = await response.json()
  return user
}

export default loggedIn
