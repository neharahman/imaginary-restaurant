import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';
class Tesimonial extends Component {
    render() {
        return (
            <>
            <div className="container-fluid bg-success">
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6">
                        <Carousel>
                            <Carousel.Item  interval={1000}>
                                <TestimonialCard className="m-5"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <TestimonialCard/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <TestimonialCard/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-sm-3">

                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Tesimonial;