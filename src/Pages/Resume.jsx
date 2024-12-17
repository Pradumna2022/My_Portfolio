import React from 'react'
import myResume from '/Pradumna_Das_Resume.pdf'


function Resume() {
    return (
        <>

            <div className="md:container md:mx-auto">
                <details className="collapse collapse-arrow base-200 shadow-xl mb-10">
                    <summary className="collapse-title text-xl font-medium">My Resume</summary>
                    <div className="collapse-content">
                        <div className="flex justify-center items-center base-200">
                            <div className="card w-full  rounded-lg">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-bold text-center mb-2">
                                        Resume Preview
                                    </h2>
                                    <iframe
                                        src={myResume}
                                        title="Resume Preview"
                                        className="w-full h-[500px] md:h-[700px]"
                                        type="application/pdf"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            </div >
        </>
    )
}

export default Resume