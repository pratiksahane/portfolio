import React, { useState } from "react";
import './index.css';
import Web from './web.png';
import Software from './software.png';
import Blog from './blog.png';
import Python from './python.png';
import Java from './java.png';
import CMS from './cms.png';
import Sectionimp from "./Sectionimp";

const Works=()=>{
        const [section, setSection] = useState("");
        const getSection=(sectionData)=>{
                setSection(sectionData);
        }

    return(<>
    <div className="works" id="work">
        <h1>Works</h1>
        <table>
            <tr>
               <td>
                <div onClick={()=>getSection("Web")} className="container2">
                        <img src={Web} alt="web"/>
                        <b>Web Development</b><br/>
                </div>
                </td>
                <td>
                <div onClick={()=>getSection("Software")} className="container2">
                        <img src={Software} alt="software"/>
                        <b>Software Development</b><br/>
                </div>
                </td>
                <td>
                <div onClick={()=>getSection("Blog")} className="container2">
                        <img src={Blog} alt="blog"/>
                        <b>Blogs Writing</b><br/>
                </div>
                </td>
                <td>
                <div onClick={()=>getSection("Python")} className="container2">
                        <img src={Python} alt="python"/>
                        <b>Python <br/>Development</b><br/>
                </div>
                </td>
                <td>
                <div onClick={()=>getSection("Java")} className="container2">
                        <img src={Java} alt="java"/>
                        <b>Java Development</b><br/>
                </div>
                </td>
                <td>
                <div onClick={()=>getSection("Swing")} className="container2">
                        <img src={Java} alt="java"/>
                        <b>Java Swing Development</b><br/>
                </div>
                </td>
                <td>
                <div onClick={()=>getSection("CMS")} className="container2">
                        <img src={CMS} alt="java"/>
                        <b>Content Management System</b><br/>
                </div>
                </td>
                <td>
                <div onClick={()=>getSection("Flutter")} className="container2">
                        <img src={CMS} alt="java"/>
                        <b>Flutter</b><br/>
                </div>
                </td>
            </tr>
        </table> 
        <div>
        {section==="Web" && <Sectionimp section="Web"/>}
        {section==="Software" && <Sectionimp section="Software"/>}
        {section==="Python" && <Sectionimp section="Python"/>}
        {section==="Blog" && <Sectionimp section="Blog"/>}
        {section==="Java" && <Sectionimp section="Java"/>}
        {section==="Swing" && <Sectionimp section="Swing"/>}
        {section==="CMS" && <Sectionimp section="CMS"/>}
        {section==="Flutter" && <Sectionimp section="Flutter"/>}
        </div> 
    </div>
    </>);
}

export default Works;
