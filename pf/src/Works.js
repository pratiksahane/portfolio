import React from "react";
import './index.css';
import Web from './web.png';
import Software from './software.png';
import Blog from './blog.png';
import Python from './python.png';
import Java from './java.png';
import CMS from './cms.png';

const Works=()=>{

    return(<>
    <div className="works" id="work">
        <h1>Works</h1>
        <table>
            <tr>
               <td>
                <div className="container2">
                        <img src={Web} alt="web"/>
                        <b><a href="https://ghar2ghar.onrender.com/">Web Development</a></b><br/>
                </div>
                </td>
                <td>
                <div className="container2">
                        <img src={Software} alt="software"/>
                        <b><a href="https://drive.google.com/file/d/1EZ4YVPKDEysBvmTAOKQYQiJ0X-SRlX0I/view?usp=drive_link">Software Development</a></b><br/>
                </div>
                </td>
                <td>
                <div className="container2">
                        <img src={Blog} alt="blog"/>
                        <b><a href="https://lead-generation-blog.vercel.app/">Blogs Writing</a></b><br/>
                </div>
                </td>
                <td>
                <div className="container2">
                        <img src={Python} alt="python"/>
                        <b>Python <br/>Development</b><br/>
                </div>
                </td>
                <td>
                <div className="container2">
                        <img src={Java} alt="java"/>
                        <b>Java Development</b><br/>
                </div>
                </td>
                <td>
                <div className="container2">
                        <img src={Java} alt="java"/>
                        <b>Java Swing Development</b><br/>
                </div>
                </td>
                <td>
                <div className="container2">
                        <img src={CMS} alt="java"/>
                        <b><a href="https://pratiksahane351.wixsite.com/my-site-1">Content Management System</a></b><br/>
                </div>
                </td>
            </tr>
        </table>  
    </div>
    </>);
}

export default Works;