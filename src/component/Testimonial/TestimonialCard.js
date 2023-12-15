import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';
import { Card,Rating} from '@mui/material';
import '../header.css'
class TestimonialCard extends Component {
    render() {
        return (
            <>
            <div className="container-fluid testimonial mt-5">
                <div className="row"><h4 className="text-white pt-3 testimonial-text" style={{letterSpacing:'4px'}}>People About us</h4></div>
            
                <div className="row">
                        <Carousel>
                            <Carousel.Item  interval={1000}>
                                <div className="row">
                                    <div className="col-sm-12 pt-3">
                                    <img
                                    className="d-block testimonial_img"
                                    src="./2.jpg"
                                    alt="Second slide"
                                    />
                                    </div>
                                </div>
                                <div className="row mt-5 pt-5 pb-5" >
                                    <div className="col-sm-12">
                                        <Carousel.Caption>
                                        <h5>Neha Rahman</h5>
                                        <p>The food is very good recommended everyone.</p>
                                        <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                                        </Carousel.Caption>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-sm-12 pt-3">
                                    <img
                                    className="d-block testimonial_img"
                                    src="./2.jpg"
                                    alt="Second slide"
                                    
                                    />
                                    </div>
                                </div>
                                <div className="row mt-5 pt-5 pb-5" >
                                    <div className="col-sm-12">
                                        <Carousel.Caption>
                                        <h5>Nitu</h5>
                                        <p>The food is very good recommended everyone.</p>
                                        <Rating name="half-rating" defaultValue={4} precision={0.5} />
                                        </Carousel.Caption>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-sm-12 pt-3">
                                    <img
                                    className="d-block testimonial_img"
                                    src="./2.jpg"
                                    alt="Second slide"
                                    
                                    />
                                    </div>
                                </div>
                                <div className="row mt-5 pt-5 pb-5" >
                                    <div className="col-sm-12">
                                        <Carousel.Caption>
                                        <h5>Shubhi</h5>
                                        <p>The food is very good recommended everyone.</p>
                                        <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                                        </Carousel.Caption>
                                    </div>
                                </div>
                            </Carousel.Item> 
                        </Carousel>
                </div>
            </div>
            </>
        );
    }
}

export default TestimonialCard;