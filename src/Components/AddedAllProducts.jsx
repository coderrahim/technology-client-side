import { useLoaderData } from "react-router-dom";

const AddedAllProducts = () => {
    const allProducts = useLoaderData()
    return (
        <div>
            all pro
            <div className="grid grid-cols-2 gap-5">
                {/* {
                    allProducts.map(product => <div key={product._id}>

                        <img src={product?.image} alt="" />
                        <h2 className="text-2xl text-center"> {product?.name} </h2>
                        <h2 className="text-2xl text-center"> {product?.brand} </h2>

                    </div>)
                } */}
            </div>
        </div>
    );
};

export default AddedAllProducts;