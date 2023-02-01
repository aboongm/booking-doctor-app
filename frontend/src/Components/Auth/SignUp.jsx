import { useState } from 'react';

function SignUp(props) {
    const [userInput, setUserInput] = useState({
        enteredName: '',
        enteredEmail: '',
        enteredPassword: ''
    });

    const nameChangeHandler = (event) =>{
        setUserInput({
            ...userInput,
            enteredName: event.target.value,
        })
    };

    const emailChangeHandler = (event) =>{
        setUserInput({
            ...userInput,
            enteredEmail: event.target.value,
        })
    };

    const passwordChangeHandler = (event) =>{
        setUserInput({
            ...userInput,
            enteredPassword: event.target.value,
        })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const objectiveData = {
            name: userInput.enteredName,
            email: userInput.enteredEmail,
            password: userInput.enteredPassword
        }
        console.log(objectiveData);
        props.onAddObjective(objectiveData);
        setUserInput({
            enteredName:'',
            enteredEmail:'',
            enteredPassword:''
        })
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input onChange={nameChangeHandler} type="text" value={userInput.enteredName}/>
            <label htmlFor="Email">Email</label>
            <input onChange={emailChangeHandler} type="email" value={userInput.enteredEmail}/>
            <label htmlFor="password">Password</label>
            <input onChange={passwordChangeHandler} type="password" value={userInput.enteredPassword}/>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;