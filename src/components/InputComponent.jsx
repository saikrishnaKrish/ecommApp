


const InputComponent =(props)=>{ //Component Name
    const {style,handleInputChange,id,name,value,placeholder}=props;

    return <div> 
           <input type="text" placeholder={placeholder} onChange={handleInputChange} style={style} id={id} name={name} value={value}/>
        </div>
}



{/* <input type="text" placeholder="" onChange={} style={} id="" name="" value=""/> */}

// function InputComponent(){
//     const name="react component" 


//     return <h1> 
//                  Hi Am from Input component {name}
//             </h1>
// }
export default InputComponent; //exporting the component
