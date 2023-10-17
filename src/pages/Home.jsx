import AboutUs from "../Components/AboutUs";



const Home = () => {
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

            {/* About Section */}
            <AboutUs></AboutUs>

            {/* FAQ SEction */}
        </div>
    );
};

export default Home;