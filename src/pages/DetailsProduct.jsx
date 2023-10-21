
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsProduct = () => {

    const detailsProduct = useLoaderData()
    const { name, brand, product, image, price, description, ratting } = detailsProduct || {};

    const SelectProduct = { name, brand, product, image, price, description, ratting }

    const AddToCart = () => {
    
    // // post to mongodb
    fetch('https://technology-server-side.vercel.app/addtocart', {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(SelectProduct)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire(
                'Good job!',
                'Product Add To Cart Successfull!',
                'success'
              )
        }
    })
        
};

    return (
        <div className="dark:bg-gray-900">
            <div className=" flex flex-col text-gray-700 bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-xl bg-clip-border space-y-3 md:w-3/4 pt-8 mx-auto">
                <div className="relative mt-4 overflow-hidden text-gray-700 rounded-xl bg-clip-border w-80 mx-auto">
                    <img
                        src={image}
                        className="w-full border rounded-lg shadow-sm"
                    />
                </div>
                <div className="p-6">
                    <div className=" items-center justify-between mb-3">
                        <p className="block font-sans text-2xl md:text-3xl lg:text-4xl text-center antialiased font-medium leading-relaxed text-blue-gray-900 bg-violet-700 rounded-full text-white py-2">
                            {name}
                        </p>
                        <p className="block font-sans text-4xl text-center antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between my-3">
                        <p className="block font-sans text-xl md:text-2xl text-center antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                            {brand}
                        </p>
                        <p className="block font-sans text-xl md:text-2xl text-center antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                            {product}
                        </p>
                    </div>

                    <p className="block font-sans text-2xl my-12 text-justify antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                        {description}
                    </p>

                </div>
                <div className="p-6 pt-0   justify-between">

                    <button onClick={() => AddToCart(detailsProduct)} className="btn btn-primary btn-outline text-lg font-bold w-full">Add to cart</button>

                    <Link to={-1}>
                        <button className="btn btn-primary w-full my-5">Back</button>
                    </Link>
                </div>
            </div>




           
        </div>
    );
};

export default DetailsProduct;