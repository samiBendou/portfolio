import React, {Component} from 'react';
import './normalize.css';
import './App.css';
import About from './about/About';
import Contact from './contact/Contact'
import Skills from "./skills/Skills";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: "Dahoux",
            firstName: "Sami",
            birthday: new Date(1995, 6, 9),
            quote: "Engineering student",
            urls: {
                facebook: "https://www.facebook.com/sl.bendahhou",
                github: "https://github.com/samiBendou",
                linkedin: "https://www.linkedin.com/in/sami-dahoux-b20386a9/",
                picture: "/static/sami2.jpg"
            },
            items: {
                about: [
                    {title: "Love", text: "Feel the love"},
                    {title: "Peace", text: "Feel the peace"},
                ],
                skills: [
                    {type: "Management", label: "Communication", level: 80},
                    {type: "Technical", label: "Javascript", level: 50},
                ]
            },
            mail: "sbdh75@gmail.com",
            location: {
                city:"Gardanne",
                zip:"13120"
            }
        }
    }

    render() {
        return (
            <div>
                <About
                    lastName={this.state.lastName}
                    firstName={this.state.firstName}
                    quote={this.state.quote}
                    urls={this.state.urls}
                    items={this.state.items.about}
                />

                <Skills items={this.state.items.skills}/>

                <Contact
                    birthday={this.state.birthday}
                    location={this.state.location}
                    mail={this.state.mail}
                />
            </div>

        );
    }

};