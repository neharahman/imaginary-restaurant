import React, { Component } from 'react';
import { Card,TextField,Select,InputLabel ,MenuItem,Button} from '@mui/material';
import { Form} from 'react-bootstrap';

class TableBooking extends Component {
    constructor()
    {
        super()
        this.state={
            name:'',
            email:'',
            date:'',
            time:'',
            person:''
        }
    }
    inputHandler = (event) =>
    {
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })

    }
    handleSubmit = (event) =>{
        console.log(event.target.value);
        alert(`name:${this.state.name} ;
        email:${this.state.email} ; 
        date: ${this.state.date} ; time:${this.state.time};
        person:${this.state.person}......`)
        this.setState({
            name:'',
            email:'',
            date:'',
            time:'',
            person:''
        })
        event.preventDefault();
    }
    render() {
        return (
            <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-sm-8">
                        <Card>
                            <h5 className="text-center text-default pt-3">TableBooking</h5>
                            <Form className="m-4" onSubmit={this.handleSubmit}>
                                <div className="col-sm-12 ">
                                    <TextField 
                                    className="w-100" 
                                    id="outlined-basic" 
                                    label="Enter Name"
                                    variant="outlined"
                                    type="text"
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.inputHandler}
                                    />
                                </div>
                                <div className="col-sm-12 mt-2">
                                    <TextField
                                    className="w-100" 
                                    id="outlined-basic" 
                                    label="Enter Email"
                                    variant="outlined"
                                    type="email"
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.inputHandler}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 mt-2">
                                        <TextField 
                                        className="w-100" 
                                        id="outlined-basic" 
                                        label="dd/mm/yyyy"
                                        variant="outlined"
                                        type="date"
                                        name='date'
                                        value={this.state.date}
                                        onChange={this.inputHandler}
                                        />
                                    </div>
                                    <div className="col-sm-4 mt-2">
                                    <TextField
                                        select
                                        className="w-100"
                                        label="Time"
                                        name='time'
                                        value={this.state.time}
                                        onChange={this.inputHandler}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value='11AM-2PM'>11AM-2PM</MenuItem>
                                            <MenuItem value='3PM-6PM'>3PM-6PM</MenuItem>
                                            <MenuItem value='6AM-9PM'>6AM-9PM</MenuItem>
                                        </TextField>
                                    </div>
                                    <div className="col-sm-4 mt-2">
                                        <TextField
                                        select
                                        className="w-100"
                                        label="Person"
                                        name='person'
                                        value={this.state.person}
                                        onChange={this.inputHandler}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>1 person</MenuItem>
                                            <MenuItem value={2}>2 person</MenuItem>
                                            <MenuItem value={3}>3 person</MenuItem>
                                            <MenuItem value={4}>4 person</MenuItem>
                                        </TextField>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <Button className="w-100 mt-2" type="submit" variant="contained">Click</Button>
                                    </div>
                                </div>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default TableBooking;