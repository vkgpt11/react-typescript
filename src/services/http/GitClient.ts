export const fetchData = async () => {
  const response = await fetch(`https://api.github.com/users/vkgpt11/repos`)
  const rpos = await response.json()
  return rpos
}
