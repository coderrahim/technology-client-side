

import { Link, useLoaderData } from "react-router-dom";
import SingleBrandProduct from "../Components/SingleBrandProduct";



const BrandProducts = () => {
    const brandProducts = useLoaderData()

    return (
        <div className="max-w-7xl mx-auto m-5">
            {
                brandProducts.length == 0 ?
                    <div className="h-screen flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-bold">Oops!</h1>
                        <p className="text-xl my-6">No product available in this Brand, <br />
                            Please come back again leter.
                        </p>

                        <div className="flex gap-5">
                            <Link to={-1}><button className="btn  btn-primary">Go Back</button></Link>

                            <Link to='/'><button className="btn  btn-secondary">Go Home</button></Link>
                        </div>
                    </div>

                    :

                    <div>
                        <div>
                            <div className="carousel w-full rounded-lg my-12 m-5">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <img src='https://i.ibb.co/nbsxrzQ/ADS-2.jpg' className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <img src='https://i.ibb.co/KVXDq8C/ADS-3.jpg' className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn btn-circle">❮</a>
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <img src='https://i.ibb.co/rmfQmWh/ADS-1.jpg' className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle">❮</a>
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide4" className="carousel-item relative w-full">
                                    <img src='https://i.ibb.co/300hNmR/SHOP.jpg' className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" className="btn btn-circle">❮</a>
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <h2 className="text-5xl text-center font-bold text-violet-700 py-12 uppercase">Latest <span className="text-5xl text-center font-bold text-orange-600"> Products</span></h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
                            {
                                brandProducts.map(product => <SingleBrandProduct key={product._id} singleProduct={product}>

                                </SingleBrandProduct>)
                            }
                        </div>
                    </div>
            }
        </div>

    );
};

export default BrandProducts;