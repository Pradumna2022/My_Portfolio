import React from 'react'

function Experience() {
    return (
        <>
            <div className="md:container md:mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center underline my-10">Work Experience</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2023</time>
                            <div className="text-lg font-black"><strong>Huntsjob</strong>, Mumbai, India</div>
                            Huntsjob is a leading global digital media solution for Staffing/HR companies.
                            We specialize in empowering businesses to discover the perfect candidates who align with their unique needs.
                            As a premier platform, Huntsjob offers a comprehensive suite of services aimed at delivering unparalleled digital staffing solutions and fostering mutually beneficial partnerships.
                            <ul className="mt-4 text-gray-600">
                                <li>- Developed and maintained RESTful APIs to ensure seamless communication across applications.</li>
                                <li>- Implemented JWT Authentication for secure and efficient client and service authentication.</li>
                                <li>- Resolved complex bugs, improving platform stability and team efficiency.</li>
                                <li>- Contributed to front-end development using React JS, enhancing user interface interactivity.</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">2022</time>
                            <div className="text-lg font-black"><strong>ASMACS Group</strong>, Mumbai, India</div>
                            ASMACS Group is a global leader in talent acquisition and HR services.
                            As a software developer at ASMACS, I worked on various projects to enhance digital staffing solutions,
                            focusing on integrating technologies that improve client interaction and streamline recruitment processes.
                            <ul className="mt-4 text-gray-600">
                                <li>- Designed and deployed cloud-based solutions with AWS Lambda and .NET Core to optimize staffing platform performance.</li>
                                <li>- Participated in the development of complex database queries and server-side logic for efficient data management.</li>
                                <li>- Collaborated with multi-functional teams, ensuring seamless integration between back-end systems and front-end interfaces.</li>
                                <li>- Developed the Pre Departure Orientation Training (PDOT) Online Registration system using ASP.NET Core MVC, enabling efficient and automated registration for training programs.</li>
                                <li>- Deployed the PDOT application on IIS (Internet Information Services) for secure and scalable hosting, ensuring smooth access for users.</li>
                                <li>- Integrated notification systems to enhance user experience and streamline the training scheduling process.</li>
                            </ul>
                        </div>

                        <hr />
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Experience