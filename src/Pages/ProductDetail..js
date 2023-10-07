import React from "react"
import { useParams } from "react-router-dom"

const ProductDetailPage=()=>{
    const params=useParams();
    
    const id=params.productId
   return(
    <React.Fragment>
        <h2 style={{textAlign:'center'}}>Detail Page!!</h2>
        <section>
            <div>
              <p>Id:{id}</p>
            </div>
        </section>
    </React.Fragment>
   )    
}

export default ProductDetailPage