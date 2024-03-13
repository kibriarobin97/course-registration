import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = ({handleSelect}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)
    return (
        <div className="w-2/3">
            <div className="grid grid-cols-1, md:grid-cols-3 gap-5">
                {
                    products.map((product) => <Product
                        key={product.id}
                        product={product}
                        handleSelect={handleSelect}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;