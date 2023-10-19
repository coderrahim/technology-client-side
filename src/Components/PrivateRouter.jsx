import { useContext } from "react";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-ring loading-lg mx-auto flex items-center justify-center h-screen"></span>
    }

    if(user){
        return children
    }
    
    return (
        <Navigate state={location.pathname} to='/login'>
            
        </Navigate>
    );
};
PrivateRouter.propTypes = {
    children:PropTypes.object
}

export default PrivateRouter;