import { Link } from 'react-router-dom';
import './ProductsDataComp.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

const  ProdcutsDataComp = (props)=>{  //passing props from parent to child
    const {pData,active} =props; 
    // console.log(active)
   return  <div className="productContainerComp"> 
  { pData?.map((product)=>{ // return the HTML from child component
        return <div className={active ? "productContainer": "productContInActive" }>
 
    
                 <img src={product.image} alt={product.title} id='productImg'/>

                 <div id='productDetails'>

                <p>productId : {product.id}</p> 
                   <p>Description : {product.description}</p>   
                   <p> price : {product.price}</p>  
                   <p>Title : {product.title}</p>  
                  <Button 
                  variant="contained"
                   color='success'
                   style={{position:"static"}}
                   id='getMoreDetails'
                   startIcon={<AddShoppingCartIcon/>}
                   >
                   
                  <Link to={`/productdetails/${product.id}`}>Get More Detials</Link> 
                  </Button> 
     </div>
                
            </div>
            
    })}
</div>
    
}

export default ProdcutsDataComp // exporting the component
// // This is a functional component and stateless component, pure component.
// Stateful Components: Use them when you need to manage state, 
// lifecycle methods, or when dealing with complex UI logic that
//  requires the component to keep track of changes over time.

// Stateless Components: Ideal for presentational 
// components that focus solely on the UI and do not 
// require any state management. They are more readable and easier to test.



//this syntax

// style={{border:"2px solid black"}}

//Normal CSS
// border: 2px solid black;
// background-color: blueviolet;
// text-align: justify;
// color: white;


// Inline CSS in React
// border: 2px solid black;
// backgroundColor: blueviolet;
// textAlign: justify;
// color: white;

