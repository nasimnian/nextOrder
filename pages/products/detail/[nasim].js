import React from 'react'
import { useRouter } from 'next/router'

export default function Detail() {
    const router = useRouter()
    
    const name = router.query.nasim
  return (
    <div>detail {name}</div>
  )
}


