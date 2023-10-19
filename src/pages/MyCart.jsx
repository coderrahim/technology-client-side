import { Link, useLoaderData } from "react-router-dom";


const MyCart = () => {
    const cartProduct = useLoaderData()

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 max-w-7xl mx-auto">
            {
                cartProduct.map(cart => <div key={cart._id}>
                   
                    <div>
                        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border space-y-3">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-72 rounded-lg  bg-clip-border">
                                <img
                                    src={cart?.image}
                                    className="object-cover w-full h-full border p-5 shadow-lg"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900">
                                        {cart?.name}
                                    </p>
                                    <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900">
                                        ${cart?.price}
                                    </p>
                                </div>
                                <hr />
                                <div className="flex items-center justify-between my-3">
                                    <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                                        {cart?.brand}
                                    </p>
                                    <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                                        Rating: {cart?.ratting}
                                    </p>
                                    <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                                        {cart?.product}
                                    </p>
                                </div>

                            </div>
                            <div className="p-6 pt-0 flex items-center justify-between">
                                <Link to={`/detailsProduct/${cart._id}`}>
                                    <button className="btn btn-primary">Details</button>
                                </Link>

                                <Link to={`/updatedProduct/${cart._id}`}>
                                    <button className="btn btn-warning">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>



                </div>)
            }
        </div>
    );
};

export default MyCart;