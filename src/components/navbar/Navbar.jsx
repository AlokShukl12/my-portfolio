import Sidebar from "../sidebar/Sidebar";
import  "./Navbar.scss";
import {motion} from "framer-motion";
const Navbar = () => {
    return(
        <div className="navbar">
            {/*Sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}}
                transition={{duration:0.5}}>
                    Alok Shukla
                </motion.span>
                <div className="social">
                    <a href=""><img src="/resumeIcon.png" alt="" /></a>
                   <a href="https://www.linkedin.com/in/alokshukla895776/"><img src="/linkedin.png" alt=""/></a>
                    <a href="https://www.geeksforgeeks.org/user/alokshuksuwd/"><img src="/gfg.png" alt=""/></a>
                    <a href="https://leetcode.com/u/alokshukla/"><img src="/leetcode.png" alt=""/></a>
                     <a href="https://www.instagram.com/1905alok?igsh=MTE1b2FrMHdwcmhjbQ=="><img src="/instagram.png" alt=""/></a>

                </div>
            </div>
        </div>
    )
}
export default Navbar;