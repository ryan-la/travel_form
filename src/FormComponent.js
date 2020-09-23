//UI component
import React, { Component } from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input
                    type="text"
                    value={props.data.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    value={props.data.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={props.handleChange}
                />
                <br />
                <input
                    value={props.data.age}
                    name="age"
                    placeholder="Age"
                    onChange={props.handleChange}
                />
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    />Male
          <br />
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    />Female
          <br />
                </label>
                <select
                    name="location"
                    value={props.data.destination}
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="italy">Italy</option>
                    <option value="norway">Norway</option>
                    <option value="france">France</option>
                </select>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={props.data.dietaryRestrictions.isVegan}
                        onChange={props.handleChange}
                    />Vegan?
            <br />
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.dietaryRestrictions.isKosher}
                        onChange={props.handleChange}
                    />Kosher?
            <br />
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={props.data.dietaryRestrictions.isLactoseFree}
                        onChange={props.handleChange}
                    />Lactose Free?
          </label>
                <br />
                <button>Submit</button>
            </form>

            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Vegan: {props.data.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent