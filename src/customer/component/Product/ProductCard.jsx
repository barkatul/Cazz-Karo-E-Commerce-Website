import { Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom/dist";
import "./ProductCard.css";

const ProductCard = ({product}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/product/${product?._id}`)}>
        <Card className="productCard w-[15rem] h-[30rem] m-3 transition-all cursor-pointer">
            <div className="h-[70%]">
                <img className="h-full w-full object-cover object-left-top"
                src={product.imageUrl} alt="">
                </img>
            </div>
            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60">{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold">{product.discountedPrice}</p>
                    <p className="line-through opacity-50">{product.price}</p>
                    <p className="text-green-600 font-semibold">{product.discountPersent}</p>
                </div>
            </div>
        </Card>
        </div>
    )
}

export default ProductCard