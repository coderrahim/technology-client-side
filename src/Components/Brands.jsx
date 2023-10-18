import { useLoaderData } from "react-router-dom";


const Brands = () => {
    const brands = useLoaderData()

    return (
        <div>
            <div className="grid grid-cols-2 gap-5 m-4">
                {
                    brands.map(brand => <div key={brand._id}>

                        <div className="relative flex flex-col items-center justify-center text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                            <div className="relative h-60 m-6 rounded-xl r border shadow-sm">
                                <img src={brand?.image} alt="profile-picture" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="block mb-2 font-sans text-5xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {brand?.name}
                                </h4>
                            </div>
                            <button className="btn btn-primary mb-5 shadow-lg" >See Products</button>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Brands;