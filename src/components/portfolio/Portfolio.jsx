import "./portfolio.scss";
import { motion,useScroll,useSpring, useTransform} from "framer-motion";
import { useRef} from "react";

const items = [
    {
        id: 1,
        title: "WanderLustHeaven",
        img: "/wanderLust.jpg",
        desc: "WanderLustHeaven is a travel booking website developed using HTML, JavaScript, and CSS for a sleek, responsive design. The platform integrates the Stripe payment gateway for secure and smooth transactions, allowing users to book trips and services easily. For hosting, Render is used, ensuring high performance and scalability. The app provides users with a seamless experience to explore travel destinations, check availability, and make bookings, all while offering intuitive navigation.",
        link: "https://wander-llr4.onrender.com/listings"
    },
    {
        id: 2,
        title: "EliteMart",
        img: "/ecommerce.jpg",
        desc: "EliteMart is an e-commerce platform built with ReactJS, MongoDB, NodeJS, TailwindCSS, and Stripe. The app offers a seamless shopping experience, with products displayed dynamically by fetching data from the MongoDB database via a NodeJS backend. Stripe integration enables secure payment processing. TailwindCSS is used for a responsive and modern design. ReactJS ensures a smooth, interactive user interface, providing customers with easy navigation, product management, and checkout functionality.",
        link: "https://elitemart.com"
    },
    {
        id: 3,
        title: "My-Portfolio",
        img: "/portfolio.jpg",
        desc: "My-Portfolio app built with ReactJS showcases my personal projects, skills, and experiences in a sleek, interactive layout. The app integrates smooth animations using libraries like Framer Motion or React Spring to enhance user interaction, making the browsing experience more dynamic.EmailJS for the message. Click the phone icon then get form you can contact with that. Features include a responsive design, project galleries, and contact forms, all presented with eye-catching transitions, hover effects, and scrolling animations, giving the portfolio a modern, professional touch.",
        link: "https://my-portfolio.com"
    },
    {
        id: 4,
        title: "Weather-App",
        img: "/weatherApp.jpg",
        desc: "A weather app built with ReactJS allows users to check real-time weather conditions by fetching data from a weather API. It displays current temperature, humidity, wind speed, and weather forecasts for any location. The app provides an intuitive UI and can handle different user queries efficiently.",
        link: "https://alokshukl12.github.io/Weather1/"
    },
];

const Single = ({item}) => {
    const ref = useRef();

    const { scrollYProgress} = useScroll({target:ref,
        // offset:["start start","end start"]

    });

    const y = useTransform(scrollYProgress,[0,1],[-300,300]);

    return(<section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt=""/>
                </div>
           
            <motion.div className="textContainer"style={{y}} >
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button > <a href={item.link} target="_blank" rel="noopener noreferrer">See Demo</a></button>
            </motion.div>
            </div>
        </div>
         </section>
    );
};

const Portfolio = () =>{
    const ref = useRef();

    const { scrollYProgress} = useScroll({target:ref,offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,

    });
    return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>My Projects</h1>
            <motion.div style={{scaleX}
        } className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
       </div>
    );
};
export default Portfolio;