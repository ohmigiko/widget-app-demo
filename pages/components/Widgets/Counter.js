import React, { useState } from 'react';

const Counter = ({initialValue}) => {
    const [count, setCount] = useState(initialValue);

    return (
        <div className="text-center">
            <div className="flex items-center justify-center mt-4 mb-6">
                <button
                    className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>
                <div className="text-6xl mx-7">{count}</div>
                <button
                    className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
            </div>
            <button
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                onClick={() => setCount(0)}
            >
                Set zero
            </button>
        </div>
    );
};

export default Counter;
