import React, { useState } from "react";
import EduacationalPage from "./EducationalPage";
import EventsPage from "./EventsPage";
import CCPage from "./CCPage";

const Certifications=()=>{

    const [activeSection, setActiveSection]=useState("");

    const display=(section)=>{
        setActiveSection(section);   
    }

    return(<>
    <div className="certifications" id="certificate">
        <h1>Certifications</h1>
        <button onClick={()=>display("educationalPage")}>Eduacational</button><br/>
        <button onClick={()=>display("eventsPage")}>Events</button><br/>
        <button onClick={()=>display("ccPage")}>Co-curricular</button>

        <div className="sectionn">
        {activeSection==="educationalPage"&& <EduacationalPage />}
        {activeSection==="eventsPage"&& <EventsPage />}
        {activeSection==="ccPage"&& <CCPage />}
        </div>
    </div>
    </>);

}
export default Certifications;