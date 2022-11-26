import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin , setIsAdmin] = useState(false);
    console.log(isAdmin);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

useEffect( ()=> {

if(email){
    fetch(`http://localhost:5000/users/admin/${email}`)
    .then(res => res.json())
    .then(data => {
        setIsAdmin(data.isAdmin);
        setIsAdminLoading(false);
        console.log(data)})
   
    }
},[email])
return [isAdmin,isAdminLoading];

}

export default useAdmin;