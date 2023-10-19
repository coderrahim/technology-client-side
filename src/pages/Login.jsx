import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Sign in firebase
        loginUser(email, password)
            .then((e) => {
                console.log(e.user)
                Swal.fire(
                    'Good Job!',
                    `Login Successul`,
                    'success'
                )
            })
            .catch(error => {
                Swal.fire(
                    'Oopsh!',
                    `${error.message}`,
                    'error'
                )
            })

    }

    // Google login
    const handleGoogleLogin = () => {

        googleLogin()
            .then(() => {
                Swal.fire(
                    'Good Job!',
                    `Login Successul`,
                    'success'
                )  
                navigate(location?.state ? location.state : '/')                   
            })
            .catch((error) => {
                Swal.fire(
                    'Oopsh!',
                    `${error.message}`,
                    'error'
                )
            })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h2 className="text-5xl text-center font-bold text-violet-700 py-12 uppercase">Login <span className="text-5xl text-center font-bold text-orange-600">Now</span></h2>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignIn} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn text-white bg-orange-600 hover:text-orange-600 hover:font-bold hover:border-orange-600 hover:bg-transparent" type="submit" value="Sign In " />
                        </div>

                    </form>

                    <div className="text-center">
                        <span>New here ?</span><Link to='/registration'><button className="btn btn-link">Sign UP</button></Link>
                    </div>

                    <button onClick={handleGoogleLogin} className="btn">Google Login</button>

                </div>
            </div>
        </div>
    );
};

export default Login;