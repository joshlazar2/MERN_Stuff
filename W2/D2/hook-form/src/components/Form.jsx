import React, {useState}  from 'react';

const Form = (props) => {
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (event) => {
        setPerson({...person, [event.target.name]:event.target.value})
    }


    return (
        <div>
            <form>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name='firstName' id='firstName' onChange={changeHandler}/>

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name='lastName' id='lastName' onChange={changeHandler}/>

                <label htmlFor="email">Email:</label>
                <input type="text" name='email' id='email' onChange={changeHandler}/>

                <label htmlFor="password">Password:</label>
                <input type="text" name='password' id='password' onChange={changeHandler}/>

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="text" name='confirmPassword' id='confirmPassword' onChange={changeHandler}/>

                <p>First Name: {person.firstName}</p>
                <p>Last Name: {person.lastName}</p>
                <p>Email: {person.email}</p>
                <p>Password: {person.password}</p>
                <p>Confirm Password: {person.confirmPassword}</p>
            </form>
        </div>
    );
}

export default Form;
