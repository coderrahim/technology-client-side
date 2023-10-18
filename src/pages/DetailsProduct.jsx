import { Link, useLoaderData } from "react-router-dom";


const DetailsProduct = () => {

    const detailsProduct = useLoaderData()
    const { name, brand, product, image, price, ratting, description} = detailsProduct
    
    
    return (
        <div>
            <div className=" flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border space-y-3 md:w-3/4 lg:w-2/4  mx-auto">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        className=" border rounded-lg shadow-sm"
                    />
                </div>
                <div className="p-6">
                    <div className=" items-center justify-between mb-3">
                        <p className="block font-sans text-4xl text-center antialiased font-medium leading-relaxed text-blue-gray-900 bg-violet-700 rounded-full text-white py-2">
                            {name}
                        </p>
                        <p className="block font-sans text-4xl text-center antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between my-3">
                        <p className="block font-sans text-4xl text-center antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                            {brand}
                        </p>
                        <p className="block font-sans text-4xl text-center antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                            {product}
                        </p>
                    </div>

                    <p className="block font-sans text-2xl my-12 text-justify antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                            {description}
                        </p>

                </div>
                <div className="p-6 pt-0   justify-between">
                    <Link to=''>
                        <button className="btn btn-primary btn-outline text-lg font-bold w-full">Add to cart</button>
                    </Link>
                    <Link to=''>
                        <button className="btn btn-primary w-full my-5">BAckt</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;