import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const SingleBrandProduct = ({ singleProduct }) => {

    const { _id, name, brand, product, image, price, ratting, } = singleProduct
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border space-y-3">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-72 rounded-xl bg-clip-border">
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
                        <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between my-3">
                        <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                            {brand}
                        </p>
                        <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                            Rating: {ratting}
                        </p>
                        <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 capitalize">
                            {product}
                        </p>
                    </div>

                </div>
                <div className="p-6 pt-0 flex items-center justify-between">
                    <Link to={`/detailsProduct/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>

                    <Link to={`/updatedProduct/${_id}`}>
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