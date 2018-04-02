
const loggedIn = async () => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  let response, user
  try {
    response = await fetch('/api/auth/loggedIn', {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'same-origin',
      headers: myHeaders,
    })

    user = await response.json()
  } catch (e) {
    user = undefined
    console.log(e)
  }
  return user
}

export default loggedIn
