import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer on component unmount
    }, []);

    const formatTime = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        const formattedTime = date.toLocaleTimeString();
        return { formattedDate, formattedTime };
    };

    const { formattedDate, formattedTime } = formatTime(currentTime);

    return (
        <>
            {/* <div className="flex flex-row items-center p-0 bg-neutral rounded-box text-neutral-content"> */}
            <div className="flex flex-row items-center">
                <span className="text-sm text-[5px] font-semibold y-10">{formattedDate}</span>&nbsp;&nbsp;
                <span className="text-lg font-mono underline">{formattedTime}</span>
            </div>
        </>


    );
};

export default RealTimeClock;
