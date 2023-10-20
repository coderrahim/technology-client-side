import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    const loadedCartProduct = useLoaderData()
    const [cartProduct, setCartProduct] = useState(loadedCartProduct);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
            
                fetch(`https://tech-zone-iota.vercel.app/addtocart/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remaining = cartProduct.filter(product => product._id !== _id)
                        setCartProduct(remaining)
                    }
                })
            }
        })
    }

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
                                <Link to={-1}>
                                    <button className="btn btn-primary">Go Home</button>
                                </Link>

                                <button onClick={() => handleDelete(cart._id)} className="btn btn-warning">Delete</button>
                            </div>
                        </div>
                    </div>



                </div>)
            }
        </div>
    );
};

export default MyCart;