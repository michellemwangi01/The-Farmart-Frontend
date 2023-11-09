import React from "react";

const ShowProductCard = ({product}) => {
    return (
        <div className="m-4 bg-green-100 w-72 h-72 rounded-xl">
            <img className="w-60 h-52 rounded-lg m-6 mb-2 " src={product.image} alt="product" />
           
                <div className="ml-4">
                    <h1 className="font-medium text-left">{product.name}</h1>
                    <p className="font-light">Ksh.{product.price}</p>

            </div>
        </div>
    )
}

export default ShowProductCard