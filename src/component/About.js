import react from 'react'
import './header.css'
import { Button } from '@mui/material'
const About = () => {
    return(
        <div className="container-fluid about">
            <div className="row">
                <h1 className="text-center pt-5 pb-5 display-5">Our Story & History</h1>
               
                <div className="col-sm-6 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
                <br></br>
                <Button className="about_btn">read more</Button>
                </div>
                <div className="col-sm-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
                <br></br>
                <Button className="about_btn">read more</Button>
                </div>
            </div>
        </div>
    )
}
export default About;