import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            switch: true,
            name: "",
            department: "",
            rating: "",
            employees: [],
        }
    }
    clickHandler = (event) => {
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); //checking geeting all data this point properly / not
        const tempObj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating,
        };
        const teampArr = this.state.employees;
        teampArr.push(tempObj);
        this.setState({ employees: teampArr });

        this.setState({ switch: false });
        // console.log(this.state.switch);
    }
    handleBack=() => {
        this.setState({ switch: true });
    }
    render() {
        if (this.state.switch) {
            return (
                <div>
                    <h1 className="hedaer">EMPLOYEE FEEDBACK FORM</h1>
                    <form className="form">
                        <div className="new_controls">
                            <div className="new_control">
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" onChange={this.clickHandler} value={this.state.name} required></input>
                            </div>
                            <div className="new_control">
                                <label for="department">Department:</label>
                                <input type="text" id="department" name="department" onChange={this.clickHandler} value={this.state.department} required></input>
                            </div>
                            <div className="new_control">
                                <label for="rating">Rating: </label>
                                <input type="number" id="rating" name="rating" min="1" max="5" onChange={this.clickHandler} value={this.state.rating} required></input>
                            </div>
                        </div>
                        <div className="new_actions">
                            <button onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return (
                <>
                    <h1 className="hedaer">EMPLOYEE FEEDBACK DATA</h1>
                    <div className="Main_box">{this.state.employees.map((value, index) => {
                        return (

                            <div className="inside-main_box">
                                {index + 1}. Name :<span>{value.name}</span> | Department :<span>{value.department}</span> | Rating : <span>{value.rating}</span>
                            </div>
                        )
                    })}
                    </div>
                    <div className="new_actions2">
                            <button onClick={this.handleBack}>Go Back</button>
                    </div>
                </>
            )
        }
    }
}
export default Form;