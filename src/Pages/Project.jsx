import React, { useEffect, useState } from "react";
import hj1 from "../assets/Huntsjob/HJ1.png";
import hj2 from "../assets/Huntsjob/HJ2.png";
import hj3 from "../assets/Huntsjob/HJ3.png";
import hj4 from "../assets/Huntsjob/HJ4.png";
import hj5 from "../assets/Huntsjob/HJ5.png";
import hj6 from "../assets/Huntsjob/HJ6.png";
import pdot1 from "../assets/PDOT/PDOT1.png";
import pdot2 from "../assets/PDOT/PDOT2.png";
import pdot3 from "../assets/PDOT/PDOT3.png";
import ms1 from "../assets/MailSender/Mailsender1.png";
import ms2 from "../assets/MailSender/Mailsender2.png";
import ms3 from "../assets/MailSender/Mailsender3.png";

const projects = [
  {
    id: 1,
    title: "Huntsjob",
    description: "Huntsjob is a job portal connecting job seekers with employers, offering a platform to find and apply for various opportunities. It focuses on simplifying recruitment with user-friendly tools and features.",
    link: "https://huntsjob.com/",
    images: [hj1, hj2, hj3, hj4, hj5, hj6],
    badges: ["Fashion", "Products"],
  },
  {
    id: 2,
    title: "Mail Sender",
    description: "A Personal Mail Sender enables users to send emails directly from an application by specifying recipient details, subject, and message content.",
    link: "#",
    images: [ms1, ms2, ms3],
    badges: ["Fashion", "Products"],
  },
  {
    id: 3,
    title: "PDOT",
    description: "Pre Departure Orientation Training Online Registration Module",
    link: "http://pdot.mea.gov.in/",
    images: [pdot1, pdot2, pdot3],
    badges: ["Fashion", "Products"],
  },
];

function Project() {
  const [currentSlide, setCurrentSlide] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const updatedSlide = { ...prevSlide };
        projects.forEach((project) => {
          updatedSlide[project.id] =
            (prevSlide[project.id] + 1 || 0) % project.images.length;
        });
        return updatedSlide;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="md:container md:mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold my-10">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="card bg-base-100 w-full shadow-xl mb-5">
            <figure>
              <div className="carousel w-full">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item relative w-full ${(currentSlide[project.id] || 0) === index ? "block" : "hidden"
                      }`}
                  >
                    <img
                      style={{ objectFit: "contain", width: "450px", aspectRatio: "3/2", animation: "running" }}
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full"
                    />
                  </div>
                ))}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button
                    className="btn btn-circle"
                    onClick={() =>
                      setCurrentSlide((prevSlide) => ({
                        ...prevSlide,
                        [project.id]:
                          ((prevSlide[project.id] || 0) - 1 + project.images.length) %
                          project.images.length,
                      }))
                    }
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle"
                    onClick={() =>
                      setCurrentSlide((prevSlide) => ({
                        ...prevSlide,
                        [project.id]:
                          ((prevSlide[project.id] || 0) + 1) % project.images.length,
                      }))
                    }
                  >
                    ❯
                  </button>
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {project.title}
                <div className="badge badge-secondary">

                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </div>
              </h2>
              <p>{project.description}</p>
              {/* <div className="card-actions justify-end">
                {project.badges.map((badge, index) => (
                  <div key={index} className="badge badge-outline">
                    {badge}
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
