import { useState, useEffect } from 'react'

function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide the loader after 0.5 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 500 milliseconds = 0.5 seconds

        // Cleanup the timeout if the component is unmounted
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {loading && (
                <div className="loader-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-70 z-50">
                   {/* <span className="loading loading-infinity loading-lg text-secondary"></span> */}
                   <span className="loading loading-dots loading-lg"></span>
                </div>
            )}
        </>
    )
}

export default Loader