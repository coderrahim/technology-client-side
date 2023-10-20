import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa"

const SingleBrandProduct = ({ singleProduct }) => {

    const { _id, name, brand, product, image, price, ratting } = singleProduct
    return (
        <div className=''>
            <div className="relative flex flex-col text-gray-700 bg-white dark:bg-gray-800 dark:text-white shadow-md w-96 rounded-xl bg-clip-border space-y-3">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white dark:bg-gray-800 h-72 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        className="object-cover w-full h-full border rounded-lg shadow-sm"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900">
                            {name}
                        </p>
                        <p className="block font-sans text-xl antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>

                    <div className="flex items-center justify-between my-5">
                        <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 capitalize border-violet-600 border rounded-full px-3 p-1">
                            Brand: {brand}
                        </p>

                        <br />

                        <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 capitalize border-violet-600 border rounded-full px-3 p-1">
                            Type: {product}
                        </p>
                    </div>

                    <div className='flex items-center justify-center gap-4 mt-5'>

                        <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">Ratting</p>

                        <div className="flex text-orange-500">
                            {[...Array(parseInt(ratting))].map(star => {
                                return <FaStar key={star?._id}></FaStar>;
                            })}
                        </div>

                    </div>

                </div>
                <div className="p-6 pt-0 flex items-center justify-between">
                    <Link to={`/detailsProduct/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>

                    <Link to={`/updateProduct/${_id}`}>
                        <button className="btn btn-warning">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

SingleBrandProduct.propTypes = {
    singleProduct: PropTypes.object
}
export default SingleBrandProduct;