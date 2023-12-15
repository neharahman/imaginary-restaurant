import React from 'react';
import { Card,Rating,CardMedia, CardContent, Button} from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../header.css';
const ProductCard = (props) => {
    return (
        <>
           <div className="container-fluid">
               <div className="row pt-5">
                   <div className="col-sm-4">
                       <Card className="product-card">
                            <CardMedia
                                component="img"
                                height="194"
                                image="./coffee.jpg"
                                borderRadius="100"
                                
                            />
                            <CardContent>
                                <div className="row">
                                    <div className="col-10">
                                        <h6  className="text-left">Coffee</h6>
                                    </div>
                                    <div className="col-2">
                                        <Button variant="contained" color="success" size="small">4.5<StarRateIcon/></Button>
                                    </div>
                                </div>
                                <div className="row" style={{fontSize:'14px'}}>
                                    <div className="col-10">
                                    <p className="text-left text-default">Royal Coffee serve with hot milk</p>
                                    </div>
                                    <div className="col-2">
                                        100/one
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-left">
                                        <Button variant="contained" color="primary" size="small">order now</Button> 
                                    </div>
                                    <div className="col-6 text-right">
                                        <Button variant="outlined" color="primary" size="small"><ShoppingCartIcon/>add to cart</Button> 
                                    </div>
                                </div>
                            </CardContent>
                       </Card>
                   </div>
                   <div className="col-sm-4">
                   <Card className="product-card">
                            <CardMedia
                                component="img"
                                height="194"
                                image="./coffee.jpg"
                                borderRadius="100"
                                
                            />
                            <CardContent>
                                <div className="row">
                                    <div className="col-10">
                                        <h6  className="text-left">Coffee</h6>
                                    </div>
                                    <div className="col-2">
                                        <Button variant="contained" color="success" size="small">4.5<StarRateIcon/></Button>
                                    </div>
                                </div>
                                <div className="row" style={{fontSize:'14px'}}>
                                    <div className="col-10">
                                    <p className="text-left text-default">Royal Coffee serve with hot milk</p>
                                    </div>
                                    <div className="col-2">
                                        100/one
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-left">
                                        <Button variant="contained" color="primary" size="small">order now</Button> 
                                    </div>
                                    <div className="col-6 text-right">
                                        <Button variant="outlined" color="primary" size="small"><ShoppingCartIcon/>add to cart</Button> 
                                    </div>
                                </div>
                            </CardContent>
                       </Card>
                       
                   </div>
                   <div className="col-sm-4">
                   <Card className="product-card">
                            <CardMedia
                                component="img"
                                height="194"
                                image="./coffee.jpg"
                                borderRadius="100"
                                
                            />
                            <CardContent>
                                <div className="row">
                                    <div className="col-10">
                                        <h6  className="text-left">Coffee</h6>
                                    </div>
                                    <div className="col-2">
                                        <Button variant="contained" color="success" size="small">4.5<StarRateIcon/></Button>
                                    </div>
                                </div>
                                <div className="row" style={{fontSize:'14px'}}>
                                    <div className="col-10">
                                    <p className="text-left text-default">Royal Coffee serve with hot milk</p>
                                    </div>
                                    <div className="col-2">
                                        100/one
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-left">
                                        <Button variant="contained" color="primary" size="small">order now</Button> 
                                    </div>
                                    <div className="col-6 text-right">
                                        <Button variant="outlined" color="primary" size="small"><ShoppingCartIcon/>add to cart</Button> 
                                    </div>
                                </div>
                            </CardContent>
                       </Card>  
                   </div>
               </div>
           </div>
        </>
    );
}

export default ProductCard;