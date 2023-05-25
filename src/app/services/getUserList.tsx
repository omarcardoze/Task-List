interface ListResult {
  id: Number
  name: string
  createdAt: string
  avatar: string
}

export async function getUserList() {
  try {
    const res = await fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
    const resultList = await res.json()
    
    return resultList
  } catch (error) {
    console.error('Error')  
  }
}