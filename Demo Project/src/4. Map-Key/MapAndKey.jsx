import React, { useId } from "react";

let name = ["Divyesh", "Vishvesh", "Hetul", "Riddhi", "Pranshi"];

export default function MapAndKey() {
  return (
    <>
      {/* Method 1 - using index i */}
      <ul className="list-unstyled ">
        {name?.map?.((e, i) => {
          return (
            <>
              <div className="d-flex">
                <span>{i + 1}&nbsp;</span>
                <li>{e}</li>
              </div>
            </>
          );
        })}
      </ul>

      {/* Method 2 - using useID() fun */}
      {/* <ul className='list-unstyled '>
            {name?.map?.((e) => {
            let id = useId()
                return (
                    <div className='d-flex'>
                        <span>{id}&nbsp;</span>
                        <li>{e}</li>
                    </div>
                )
            })}
        </ul> */}
    </>
  );
}
