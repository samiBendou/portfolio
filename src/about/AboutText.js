import React from "react";
import AboutList from "./AboutList";
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import SkillsList from "../skills/SkillsList";
import BirthdayText from "../common/BirthdayText";
import AddressText from "../common/AddressText";

const AboutText = (props) =>
    (
        <div className="about-text">
            <h1 className="about-head">
                {`${props.firstName} ${props.lastName}`}<br/>
                <small>{props.quote}</small>
            </h1>

            <BirthdayText birthday={props.birthday}/>
            <AddressText location={props.location} county={true}/>

            <div className="about-list">
                <AboutList items={props.items.about}/>
            </div>
            <div className="about-skills">
                <SkillsList items={props.items.skills.filter(item => item.category === 1)} count={3}/>
            </div>
            <h3 className="about-icons">
                <a href={props.urls.linkedin}><FaLinkedin/></a>&nbsp;
                <a href={props.urls.github}><FaGithub/></a>&nbsp;
                <a href={props.urls.contact}><FaEnvelope/></a>&nbsp;
            </h3>
        </div>
    );

export default AboutText;