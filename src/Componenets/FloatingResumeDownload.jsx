import React from 'react'
import resume from '../../src/assets/Pdf/PradumnaDasResume.pdf'

function FloatingResumeDownload() {
    return (
        <>
            <div className="md:container md:mx-auto">
                <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-2 right-2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-focus transition duration-300 z-40 flex items-center space-x-2" // Added space-x-2 for horizontal spacing
                >
                    <span className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current text-white"
                        >
                            <path d="M5 20h14v-2H5v2zM12 4v12h4l-5 5-5-5h4V4z" />
                        </svg>
                        <span>Download Resume</span>
                    </span>
                </a>
            </div>



        </>
    )
}

export default FloatingResumeDownload