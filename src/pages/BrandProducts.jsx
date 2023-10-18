

import { useLoaderData } from "react-router-dom";


const BrandProducts = () => {
    const brandProducts = useLoaderData()

    return (
        <div className="grid grid-cols-2 gap-5">
            {
                brandProducts.map(product => <div key={product._id}>

                    <img src={product?.image} alt="" />
                    <h2 className="text-2xl text-center"> {product?.name} </h2>
                    <h2 className="text-2xl text-center"> {product?.brand} </h2>

                </div>)
            }
        </div>
    );
};

export default BrandProducts;