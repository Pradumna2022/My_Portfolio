import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import '../assets/Css/PortfolioChatbot.css'

const PortfolioChatbot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! I'm your personal assistant. How can I help you today?" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { sender: "user", text: input };
            const botReply = getBotReply(input);

            setMessages((prev) => [...prev, userMessage, botReply]);
            setInput("");
        }
    };

    const getBotReply = (userInput) => {
        const responses = {
            "hi": "Hello there! How can I assist you today? 😊",
            "hello": "Hey there! Hope you’re having a great day! 🌟",
            "hey": "Hey hey! What’s up? 😄",
            "good morning": "Good morning! Wishing you a productive day ahead! ☀️",
            "good evening": "Good evening! How can I help you tonight? 🌙",
            "how are you": "I’m just a chatbot, but I’m here to make your day better! What about you?",
            "what is your name": "I’m Pradumna Bot, here to assist you with anything about Pradumna Das!",
            "who are you": "I’m a chatbot designed to assist you with Pradumna Das’s portfolio and information. 😊",
            "tell me about Pradumna Das": "Pradumna Das is a passionate developer skilled in React JS, .NET Core, AWS, and frontend development.",
            "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs! 😂",
            "what do you do": "I help users navigate Pradumna Das's portfolio and answer their queries.",
            "what are your hobbies": "I don’t have hobbies, but Pradumna loves coding, traveling, and exploring new tech trends!",
            "what is React JS": "React JS is a JavaScript library for building dynamic user interfaces. Pradumna specializes in it!",
            "what is .NET Core": ".NET Core is a framework for building cross-platform applications. Pradumna uses it extensively for backend development.",
            "AWS": "AWS is Amazon Web Services, a cloud platform used by Pradumna for hosting and scaling applications.",
            "portfolio": "Check out Pradumna’s portfolio to see his projects and expertise!",
            "can you help me": "Of course! Let me know what you need help with. 😊",
            "thank you": "You’re welcome! Happy to help. 😊",
            "bye": "Goodbye! Feel free to return anytime. 👋",
            "tell me a quote": "Here’s one: 'The only way to do great work is to love what you do.' – Steve Jobs",
            "skills": "Pradumna is skilled in React JS, .NET Core, AWS, JavaScript, and more!",
            "projects": "Pradumna has worked on various projects, including job portals, chat apps, and resume builders.",
            "contact": "Feel free to email Pradumna at pradumna@example.com or use the contact form.",
            "resume": "Click the 'Resume' button at the top of the page to download it.",
            "location": "Pradumna is based in India but collaborates with clients worldwide.",
            "experience": "Pradumna has years of experience in web and software development.",
            "education": "Pradumna holds a degree in Computer Science and Engineering.",
            "achievements": "Pradumna has successfully built and deployed many impactful web applications.",
            "goals": "Pradumna’s goal is to continuously grow as a developer and contribute to innovative projects.",
            "fun fact": "Here’s a fun fact: Pradumna once built a project in record time while learning a new framework!",
            "recommendations": "You can check testimonials from Pradumna’s clients and colleagues on his portfolio page.",
            "help": "Sure! You can ask about skills, projects, contact info, or anything related to Pradumna Das!",
            "tell me more": "Absolutely! What would you like to know about Pradumna or his work?",
            "hobbies": "Pradumna enjoys solving coding challenges, exploring new tech, and traveling.",
            "personal life": "Pradumna is passionate about tech and loves sharing knowledge with others.",
            "tech stack": "Pradumna works with React JS, .NET Core, Node.js, AWS, and modern frontend frameworks.",
            "languages": "He’s proficient in JavaScript, C#, HTML, CSS, and SQL.",
            "frameworks": "Pradumna works with React, Angular, .NET Core, and Bootstrap.",
            "cloud services": "He uses AWS for deploying and scaling projects.",
            "frontend": "React JS and modern UI frameworks are his forte in frontend development.",
            "backend": "Pradumna is skilled in building APIs and services using .NET Core and Node.js.",
            "database": "He’s experienced in working with SQL Server, MySQL, and MongoDB.",
            "achievements": "Pradumna has successfully deployed multiple scalable applications and mentored budding developers.",
            "certifications": "Pradumna holds certifications in AWS and frontend development.",
            "passion": "Pradumna is passionate about creating impactful software solutions.",
            "interests": "He’s interested in AI, cloud computing, and UI/UX design.",
            "career goals": "Pradumna aims to lead impactful projects and stay ahead in the tech world.",
            "teamwork": "Pradumna believes in collaboration and enjoys working in agile teams.",
            "leadership": "He has led projects and mentored junior developers effectively.",
            "problem-solving": "Pradumna excels in solving complex problems with innovative solutions.",
            "quotes": "Here’s another: 'Code is like humor. When you have to explain it, it’s bad.' – Cory House",
            "coding": "Coding is an art that Pradumna enjoys every day.",
            "mentorship": "He enjoys mentoring junior developers and sharing knowledge.",
            "feedback": "Pradumna values feedback to improve and deliver better solutions.",
            "philosophy": "Pradumna believes in learning by doing and growing through challenges.",
            "team player": "Pradumna thrives in collaborative environments and loves sharing ideas.",
            "curiosity": "Pradumna is always curious to learn about new tools and technologies.",
            "problem-solving": "He loves taking on challenging tasks and delivering solutions that matter.",
            "innovative": "Innovation is at the core of Pradumna’s approach to software development.",
            "collaborative": "Pradumna values teamwork and enjoys working with diverse teams.",
            "dedicated": "He’s dedicated to delivering high-quality software solutions.",
            "resourceful": "Pradumna is quick to find creative solutions to technical challenges.",
            "analytical": "He enjoys analyzing complex problems and finding the best solutions.",
            "reliable": "You can always count on Pradumna to deliver results on time.",
            "hardworking": "Pradumna is committed to continuous learning and development.",
            "detail-oriented": "He pays close attention to details to ensure flawless execution.",
            "results-driven": "Pradumna focuses on delivering tangible results through his work.",
            "efficient": "He prioritizes efficiency in both code and processes.",
            "organized": "Pradumna keeps projects well-organized and on track."
        }
        ;

        const lowerInput = userInput.toLowerCase(); 
        const response =
            responses[lowerInput] ||
            "Sorry, I didn't understand that. Try asking about 'skills', 'projects', or 'contact'.";
        return { sender: "bot", text: response };
    };

    return (
        <div className="chatbot-container bg-base-100" style={{display:"none"}}>
            <div className="chatbot-header badge-primary">Portfolio Chatbot</div>
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender === "user" ? "user" : "bot"}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Ask me something..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSend}>
                    <IoSend  />
                </button>
            </div>
        </div>
    );
};

export default PortfolioChatbot;
