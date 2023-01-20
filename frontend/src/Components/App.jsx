import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SignIn from "./SignIn";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container py-4 px-3 mx-auto">
            <h1 className="container text-primary">Hello World</h1>
            <h1>React</h1>
            <SignIn />
        </div>
    );
}

export default App;
