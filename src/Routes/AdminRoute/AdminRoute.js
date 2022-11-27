import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const [isSeller, isSellerLoading]=useSeller(user?.email);
    const [isBuyer,isBuyerLoading] = useBuyer(user?.email);
    console.log(user);

    const navigate = useNavigate();

    if (loading || isAdminLoading) {
        return loading;
    }

    if(loading || isSellerLoading){
        return loading
    }

    if(loading || isBuyerLoading){
        return loading
    }

    if(user && isBuyer){
        return children;
    }

    if (user && isAdmin) {
        return children;
    }
    if(user && isSeller){
        return children
    }

    return navigate('/login');
};

export default AdminRoute;