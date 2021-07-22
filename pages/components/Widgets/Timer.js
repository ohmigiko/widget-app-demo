import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive && !isPause) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPause]);

    const handleStart = () => {
        setIsActive(true);
        setIsPause(false);
    };

    const handlePauseResume = () => {
        setIsPause(!isPause);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div className="text-center">
            <div className="flex items-center justify-center mt-4 mb-6">
                <div className="text-6xl mx-7">
                    <span>
                        {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
                    </span>
                    <span>
                        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
                    </span>
                    <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
                </div>
            </div>
            <div className="flex justify-center space-x-1">
                {isActive && isPause ? (
                    <button
                        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                        onClick={handlePauseResume}
                    >
                        Resume
                    </button>
                ) : isActive && !isPause ? (
                    <button
                        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                        onClick={handlePauseResume}
                    >
                        Pause
                    </button>
                ) : (
                    <button
                        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                        onClick={handleStart}
                    >
                        Start
                    </button>
                )}
                <button
                    className={isActive ? "text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600" : "text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300" }
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;
