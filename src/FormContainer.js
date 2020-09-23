import React, { Component } from "react"
import FormComponent from "./FormComponent.js"

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(event) {
    //   const { name, value, type, checked } = event.target

    //   if (type === "checkbox") {
    //     this.setState({
    //       dietaryRestrictions: {
    //         [name]: checked
    //       }
    //     })
    //   } else {
    //     this.setState({
    //       [name]: value
    //     })
    //   }
    // }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                dietaryRestrictions: {
                    [name]: checked
                }
            })
            :
            this.setState({
                [name]: value
            })
    }
    // handleChange(event) {
    //   const { name, value, type, checked } = event.target
    //   type === "checkbox" ?
    //     //prevState takes old version of dietaryRestrictions
    //     this.setState(prevState => {
    //       return {
    //         //creates a new dietaryRestrictions by copying the old version and updating it
    //         dietaryRestrictions: {
    //           ...prevState.dietaryRestrictions,
    //           [name]: checked
    //         }
    //       }
    //     })
    //     :
    //     this.setState({
    //       [name]: value
    //     })
    // }


    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )

    }
}

export default FormContainer