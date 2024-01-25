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
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name='firstName' id='firstName' onChange={changeHandler}/>
                </div>
                {
                    person.firstName.length < 2?
                    <p>First Name Must be 2 or more characters</p>:
                    null
                }
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name='lastName' id='lastName' onChange={changeHandler}/>
                </div>
                {
                    person.lastName.length < 2?
                    <p>Last Name Must be 2 or more characters</p>:
                    null
                }
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name='email' id='email' onChange={changeHandler}/>
                </div>
                {
                    person.email.length < 2?
                    <p>Email Must be 2 or more characters</p>:
                    null
                }
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name='password' id='password' onChange={changeHandler}/>
                </div>
                {
                    person.password.length < 8?
                    <p>Password Must be 8 or more characters</p>:
                    null
                }
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="text" name='confirmPassword' id='confirmPassword' onChange={changeHandler}/>
                </div>
                {
                    person.password !== person.confirmPassword?
                    <p>Passwords Must Match</p>:
                    null
                }
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
