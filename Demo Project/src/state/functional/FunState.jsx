import React, { useState } from 'react';
import { Button } from 'reactstrap';

export default function FunState() {
    
    let [count, setCount] = useState(0);
    let [data, setData] = useState({
        amount: 10,
        point: 20
    });
    
    const counter = () => {
        setCount(count + 1 );
    };

    const pointer = () => {
        setData({point: data?.point + 1});
    };

    // const amt = () => {
    //     setData({amount: data?.amount + 1});
    // };

  return (
    <>
        <h1>Count is {count}</h1>
        <Button onClick = {() => counter()}>Click Here</Button>
        <hr />

        <h1>Point is {data?.point}</h1>
        <Button onClick={() => pointer()}>Click Here</Button>
        <hr />

        {/* <h1>Amount is {data?.amount}</h1>
        <Button onClick={() => amt()}>Click Here</Button> */}
    </>
  );
}
