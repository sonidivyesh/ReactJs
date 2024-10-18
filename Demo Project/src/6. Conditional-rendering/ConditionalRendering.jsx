import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function ConditionalRendering() {
    let [isGirl, setGender] = useState(false)
  return (
    <div style={{height: "100vh", display:"grid", placeContent:'center'}}>
        {isGirl ? (<h1>She is Girl</h1>) : (<h1>He is Boy</h1>)}
        <div className='d-flex gap-2 justify-content-center'>
            {isGirl? (
                <Button color='primary' onClick={()=>setGender(false)}>Boys</Button>
            ):(
                <Button color='danger' onClick={()=>setGender(true)}>Girls</Button>
            )}
        </div>
    </div>
  )
}
