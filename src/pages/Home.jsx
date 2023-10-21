import { useLoaderData } from "react-router-dom";
import AboutUs from "../Components/AboutUs";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Brands from "../Components/Brands";


const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            {/* Banner SEction */}
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=740&t=st=1697559337~exp=1697559937~hmac=fde732a63f9510e0fe5a414d8fc1f2434605eef6a75c79f968bf770ffe31aa86)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Tech Zone</h1>
                        <p className="mb-5">Were dedicated to bringing you the latest and greatest in the world of technology. Whether youre a tech enthusiast, a professional seeking top-of-the-line gear, or someone looking for reliable everyday gadgets, youve come to the right place.</p>
                        <button className="btn btn-primary">Our Brand</button>
                    </div>
                </div>
            </div>

            {/* BRAND SECTION */}
            <div className="bg-gray-100 dark:bg-gray-900 py-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-violet-700 py-12 uppercase">Our <span className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-orange-600"> Brand</span></h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-4 my-12 max-w-7xl mx-auto">
                    {
                        brands.map(brand => <Brands key={brand._id} brand={brand}></Brands>)
                    }
                </div>
            </div>

            {/* About Section */}
            <AboutUs></AboutUs>

            {/* FAQ SEction */}
            <FAQ></FAQ>

            {/* Footer Section */}
            <Footer></Footer>
        </div>
    );
};

export default Home;