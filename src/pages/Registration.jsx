import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const Registration = () => {
    const {createUser} = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const user = {name, email, password, photo}
        console.log(user)

        if(password.length < 6){
            Swal.fire(
                'Oopsh!',
                `<b>${name}</b> Password Length atleast Six`,
                'error'
              )
              return
        }
        else if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            Swal.fire(
                'Oopsh!',
                `<b>${name}</b> Password atleast one <br> Uppercase & Lowercase`,
                'error'
              )
              return
        }

        // Create user firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            Swal.fire(
                'Good Job!',
                `Account Create Successul`,
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
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <h2 className="text-5xl text-center font-bold text-violet-700 py-12 uppercase">Create <span className="text-5xl text-center font-bold text-orange-600">Account</span></h2>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSignUp} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="" className="input input-bordered" required />
                            </div>

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

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-orange-600" type="submit" value="Sign UP " />
                            </div>

                        </form>

                        <div className="text-center">
                            <span>Already have Account?</span><Link to='/login'><button className="btn btn-link">Sign In</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;