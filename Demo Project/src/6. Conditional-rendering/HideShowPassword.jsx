import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function HideShowPassword() {
    let [showPass, setShowPass] = useState(false)
  return (
    <div style={{height: "100vh", display:"grid", placeContent:'center'}}>
        <>
            <label htmlFor="">Password</label>
            <div className='d-flex gap-2 justify-content-center'>
                <input type={showPass? "text": "password"} />
                {showPass? (
                    <Button color='primary' onClick={()=>setShowPass(false)}>Hide</Button>
                ):(
                    <Button color='primary' onClick={()=>setShowPass(true)}>Show</Button>
                )}
            </div>
        </>
    </div>
    )
}
