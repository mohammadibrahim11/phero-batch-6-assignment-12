import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller,setIsSeller] = useState(false);
    console.log(isSeller);
    const [isSellerLoading, setIsSellerLoading] = useState(false);

useEffect( ()=> {

if(email){
    fetch(`http://localhost:5000/allusers/seller/${email}`)
    .then(res => res.json())
    .then(data => {
        setIsSeller(data.isSeller);
        setIsSellerLoading(false);
        console.log(data)})
   
    }
},[email])
return [isSeller,isSellerLoading];

}

export default useSeller;