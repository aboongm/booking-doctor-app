import { useState } from "react";

const SignIn = () => {
    const [auth, setAuth] = useState(true);

    console.log(auth);

    const onClickHandler = () => {
        setAuth((isAuthenticated) => !isAuthenticated);
    };

    return (
        <div>
            <p>Please Sign In/Create An Account</p>

            <button onClick={onClickHandler}>
                Please Sign In/Create An Account
            </button>
            <button>{auth ? "Sign In" : "Create An Account"}</button>
        </div>
    );
};

export default SignIn;
