
const loggedIn = async () => {
  const response = await fetch('/api/auth/loggedIn')
  const user = await response.json()
  console.log(user)
  return user
}

export default loggedIn
