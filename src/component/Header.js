import React from 'react';
import About from './About'
import './header.css'
import {Button} from '@mui/material';
const Header = (props) =>{
    return (
        <>
           <div className="container-fluid abc">
               <div className="row" style={{height:'70vh',backgroundImage:`url('/1.jpg')`,backgroundPosition:'center',backgroundSize:'cover'}}>
                   <div className="col-sm-6 text-left pt-5" >
                       <h1 className="display-4">Welcome to our page</h1>
                       <h2>The Key to Fine Dining</h2 >
                       <p className="text-pink h6" >Food for us comes from our relatives, whether they have wings or fins or roots.That is how we consider food.Food has a culture. It has a history. It has a story. It has relationships.</p>
                       <Button className="abc_button">Book table</Button>
                       <Button className="abc_button m-2">Order</Button>
                   </div>
               </div>
           </div>
           <About/>
        </>
    );
}

export default Header;