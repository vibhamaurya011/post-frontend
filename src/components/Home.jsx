import React, { useEffect, useState } from 'react'

function Home() {
  const [posts, setposts] = useState([])

  useEffect(()=>{
    fetch("https://excited-raincoat-eel.cyclic.app")
  })
  return (
    <div>
      Here are all notes
    </div>
  )
}

export default Home
