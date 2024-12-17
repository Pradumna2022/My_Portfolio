import React from 'react'
// import profileimage from '../assets/images/MyImage.jpg'
import profileimage from '../assets/images/MyImage.jpeg'


function Info() {
    const calculateExperience = () => {
        const joiningDate = "2022-04-01"
        const joinDate = new Date(joiningDate);
        const currentDate = new Date();
        let years = currentDate.getFullYear() - joinDate.getFullYear();
        let months = currentDate.getMonth() - joinDate.getMonth();
        if (months < 0) {
            years -= 1;
            months += 12;
        }
        const experienceString =
            (years > 0 ? `${years} year${years > 1 ? "s" : ""} ` : "") +
            (months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "");

        return experienceString.trim() || "Less than a month";
    };
    return (
        <>
            <div className="hero bg-base-300 min-h-80 py-8">
                <div className="md:container md:mx-auto">
                    <div className="hero-content flex-col lg:flex-row-reverse items-center">
                        {/* Profile image */}
                        <div className="avatar indicator mb-8 lg:mb-0">
                            {/* <span className="indicator-item badge">
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 glow-star" defaultChecked />
                                </div>
                            </span> */}
                             <span className="indicator-item badge badge-primary">Developer</span>
                            <div className="h-64 w-64 lg:h-80 lg:w-80 rounded-lg">
                                <img
                                    src={profileimage}
                                    alt="Profile"
                                    className="max-w-full h-auto rounded-lg shadow-2xl" />
                            </div>
                        </div>
                        {/* Text content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pradumna Das</h1>
                            <p className="text-base md:text-lg py-6 px-4 md:px-0">
                                I’m Pradumna Das, a .NET Core Developer with {calculateExperience()} of experience building scalable web applications.
                                I specialize in back-end development with .NET Core and front-end solutions using React.
                                I focus on creating high-performance, user-friendly applications and enjoy tackling challenging projects that require both technical expertise and a strong attention to user experience.
                                I’m always looking to learn and grow, aiming to deliver impactful, maintainable solutions that drive business success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info
