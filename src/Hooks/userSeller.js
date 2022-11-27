import { useEffect, useState } from "react"

const userSeller = email => {
    const [isSeller,setIsSeller] = useState(false);
    console.log(isSeller);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

useEffect( ()=> {

if(email){
    fetch(`http://localhost:5000/users/seller/${email}`)
    .then(res => res.json())
    .then(data => {
        setIsSeller(data.isAdmin);
        setIsAdminLoading(false);
        console.log(data)})
   
    }
},[email])
return [isSeller,isAdminLoading];

}

export default userSeller;