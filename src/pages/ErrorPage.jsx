import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="bg-white dark:bg-gray-900 h-full flex-col items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-orange-500 dark:text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we cant find that page. Youll find lots to explore on the home page. </p>
                    <Link to='/'>
                        <p className="btn btn-primary my-4">Back to Homepage</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;