
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brands = ({brand}) => {

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-white shadow-xl rounded-xl bg-clip-border">
            <div className=" h-60 w-60 m-6 flex items-center top-0 rounded-full border p-8 shadow-md">
                <img className="w-full bg-white p-2 rounded-full" src={brand?.image} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-3xl md:text-4xl lg:text-5xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {brand?.name}
                </h4>
            </div>
            <Link to={`/brandproducts/${brand.brand}`}>
                <button  className="btn btn-primary mb-10 shadow-lg" >See Products</button>
            </Link>
        </div>
    );
};
Brands.propTypes  = {
    brand: PropTypes.object
}

export default Brands;