import React, { useState } from 'react'
import Data from './Data'

function Search() {
    let [store , setStore ] = useState(Data);
    let [data , setData] = useState();
    let filterOut = store.filter((currValue)=>{
        return currValue.name.toLocaleLowerCase().includes(data) || currValue.brand.toLocaleLowerCase().includes(data)
    })
  return (
    <>
    <div className="container">
        <input type="text" name="" onChange={(e)=>setData(e.target.value)} placeholder='Search Here....' id="" />

        <div className="type">
            <h3>Name
                <hr />
            </h3>
            <h3>Brand

                <hr />
            </h3>
            <h3>Image
                <hr />
            </h3>
        </div>
<hr />
        {
            filterOut.map((curr)=>{
                return(
                    <div className="itemList">
                        <h4>{curr.name}</h4>
                        <h4>{curr.brand}</h4>
                        <img src={curr.image} alt="" />
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Search