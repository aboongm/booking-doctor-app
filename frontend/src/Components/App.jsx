import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container py-4 px-3 mx-auto">
      <h1 className="container text-primary">Hello World</h1>
      <h1>React</h1>
    </div>
  );
}

export default App;
