import React from 'react'
import profileimage from '../assets/images/MyImage.jpg'
function Info() {
    return (
        <>
            <div className="hero bg-base-300 min-h-80">
                <div className='md:container md:mx-auto'>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="avatar indicator">
                            {/* <span className="indicator-item badge badge-primary z-10">Developer</span> */}
                            <div className="h-80 w-80 rounded-lg">
                                <img
                                    src={profileimage}
                                    className="max-w-sm rounded-lg shadow-2xl" />
                            </div>
                        </div>
                        <div>
                            {/* <div class="chat chat-start">
                                <div class="chat-image avatar">
                                    <div class="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <div class="chat-bubble">
                                    I’m Pradumna Das, a .NET Core Developer with 3 years of experience building scalable web applications. I specialize in back-end development with .NET Core and front-end solutions using React. I focus on creating high-performance, user-friendly applications and enjoy tackling challenging projects that require both technical expertise and a strong attention to user experience. I’m always looking to learn and grow, aiming to deliver impactful, maintainable solutions that drive business success.
                                </div>
                            </div> */}
                            <h1 className="text-5xl font-bold">Pradumna Das</h1>
                            <p className="py-6">
                                I’m Pradumna Das, a .NET Core Developer with 3 years of experience building scalable web applications.
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