import React from 'react';
import Tilt from 'react-parallax-tilt';
import csharp from "../assets/SkillsImages/c-sharp.png";
import webApi from "../assets/SkillsImages/NET core.png";
import CoreMvc from "../assets/SkillsImages/DotNetcoreMvc.png";
import bootstrap from "../assets/SkillsImages/bootstrap.png";
import sqlserver from "../assets/SkillsImages/sql-server.png";
import css from "../assets/SkillsImages/css-3.png";
import Reactjs from "../assets/SkillsImages/React.png";
import Html from "../assets/SkillsImages/html.png";
import jquery from "../assets/SkillsImages/jquery.png";
import ec2 from "../assets/SkillsImages/EC2.png";
import Route53 from "../assets/SkillsImages/Route 53.png";
import Lambda from "../assets/SkillsImages/Lambda.png";
import APIGateway from "../assets/SkillsImages/API Gateway.png";
import s3 from "../assets/SkillsImages/s3.png";
import CloudFront from "../assets/SkillsImages/CloudFront.png";

const skills = [
    { name: "C#", description: "A modern object-oriented programming language, used for building robust applications.", image: csharp },
    { name: "Web API", description: "Used to expose data and services over the web, allowing client applications to interact.", image: webApi },
    { name: "ASP.NET Core MVC", description: "A framework for building dynamic web applications, using Model-View-Controller architecture in .NET.", image: CoreMvc },
    { name: "Microsoft SQL Server", description: "A relational database management system by Microsoft, designed for enterprise-level data management and analytics.", image: sqlserver },
    { name: "CSS", description: "A style sheet language used for describing the presentation of a document written in HTML or XML.", image: css },
    { name: "Bootstrap", description: "A front-end framework for building responsive, mobile-first websites and web apps.", image: bootstrap },
    { name: "Lambda Serverless", description: "AWS service that lets you run code without provisioning or managing servers.", image: Lambda },
    { name: "API Gateway", description: "AWS service for creating, publishing, maintaining, monitoring, and securing APIs.", image: APIGateway },
    { name: "Amazon S3", description: "A scalable object storage service by AWS for storing and retrieving data.", image: s3 },
    { name: "Route 53", description: "A scalable Domain Name System (DNS) web service from AWS, which can route traffic globally to different resources based on routing policies.", image: Route53 },
    { name: "CloudFront", description: "A content delivery network (CDN) service from AWS that distributes content globally, ensuring fast delivery of websites, APIs, and media.", image: CloudFront },
    { name: "EC2", description: "Amazon Elastic Compute Cloud (EC2) is a web service that provides resizable compute capacity in the cloud, allowing you to run virtual machines with customizable configurations.", image: ec2 },
    { name: "HTML", description: "HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.", image: Html },
    { name: "jQuery", description: "A fast, small, and feature-rich JavaScript library. It simplifies things like HTML document traversal, event handling, and animation.", image: jquery },
    { name: "React JS", description: "A JavaScript library for building user interfaces, developed and maintained by Facebook, designed to build single-page applications.", image: Reactjs },
];

const SkillCard = ({ name, description, image }) => {
    return (

        <div className="text-center p-6 rounded-lg bg-base-100 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl group">
            <div className="tooltip" data-tip={description}>
                <Tilt>
                    {/* Image responsiveness and containment */}
                    <img src={image} alt={name} className="h-20 w-20 object-contain mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-base-content">{name}</h3>
                </Tilt>
            </div>
        </div>

    );
};

const Skills = () => {
    return (
        // <div className="min-h-screen max-w-full px-4 sm:px-8 overflow-x-hidden overflow-y-auto">
        <div className="md:container md:mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center my-10">Skills</h1>
            {/* Grid ensuring 5 items per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        name={skill.name}
                        description={skill.description}
                        image={skill.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
