import { useParams } from "react-router-dom"
import useFetchData from "../FetchData";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Card } from '@mui/material';
const ProdctDetails = () => {
    const params = useParams()
    const prdId = params.pid
    console.log(prdId);

    const { data: product, error, isLoading } 
    = useFetchData(`https://fakestoreapi.com/products/${prdId}`, {})
    console.log(product)

    return <Card>
        {
            error.length > 0 && <p>
                Unable to load Data {error}
            </p>
        }
        {
            isLoading && <p>Loading.....</p>
        }
        <img src={product.image} alt={product.title} id='productImg' />
        <div id='productDetails'>
            <p>productId : {product.id}</p>
            <p>Description : {product.description}</p>
            <p> price : {product.price}<MonetizationOnIcon/></p>
            <p>Title : {product.title}</p>
           
        </div>
    </Card>
}


export default ProdctDetails