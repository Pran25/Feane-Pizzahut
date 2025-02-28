import React from 'react'
import  Button  from 'react-bootstrap/Button'

function Cartoptions({food,filtercategory,displayprods}) {
    const cat = [...new Set(food.map((f)=>f.category))]
  return (
    <div className='d-flex flex-column'>
    <Button variant="dark" className='me-4 button rounded-pill mt-3 fs-5' onClick={() => { displayprods() }}>All</Button>
    {cat.map((c) => {
        return (
            <Button variant="dark" className='me-4 button rounded-pill mt-3 fs-5' onClick={() => { filtercategory(c) }}>{c}</Button>
        )
        })}
    </div>
  )
}

export default Cartoptions
