import React, {useState} from 'react';
import './index.scss';

const App = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(prev => prev + 1)
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default App;
