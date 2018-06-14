import React, { Component } from 'react';
import Header from '../components/header/header';
import Tile from '../components/tile/tile';

class LandingPage extends Component{
    constructor() {
        super();
        this.skillInformation = [
            {
                name: 'HTML5',
                description: 'I will write semantic markup in  which is the latest standard of core technology of web.',
                imgURL: '/images/download.png'
            },
            {
                name: 'CSS3',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, modern websites.',
                imgURL: '/images/css.png'
            },
            {
                name: 'Responsive Web Design',
                description: 'I will build website that look awesome not only on desktops, but also on mobile phone and website.',
                imgURL: '/images/res.jpg'
            },
            {
                name: 'UI & UX Design',
                description: 'I will learn basics of UI & UX Design and use these concepts in build apps that are both functional and usable.',
                imgURL: '/images/images.png'
            },
            {
                name: 'JavaScript',
                description: 'I will define the behaviour of web pages using JavaScript. I will dive deeper into amazing parts of JavaScript',
                imgURL: '/images/javascript.png'
            },
            {
                name: 'jQuery',
                description: 'I will enhance the behaviour of web pages leveraging on JQuery and JQuery plug-in',
                imgURL: '/images/jquery.png'
            },
            {
                name: 'TypeScript',
                description: 'I will start writing object oriented programs using TypeScript. I will build games using TypeScript',
                imgURL: '/images/typescript.png'
            },
            {
                name: 'RxJS',
                description: 'I will build event-driven, resilient and responsive apps using Reactive Architectures.',
                imgURL: '/images/rxjs.jpg'
            },
            {
                name: 'Unix',
                description: 'I will become a ninija hacker who prefer command line to Graphics User Interface.',
                imgURL: '/images/unix.jpg'
            },
            {
                name: 'Git & Heroku',
                description: 'I will  start following git workflow using github. I will also deploy lt application with Heroku.',
                imgURL: '/images/git.png'
            },
            {
                name: 'npm',
                description: 'I will use npm, the default package manager for Node.js, to reuse some of the best utilities written already ',
                imgURL: '/images/npm.png'
            },
            {
                name: 'Docker',
                description: 'I will use Docker to simply configuration, increase lr productivity, isolated lr apps and automate deployments',
                imgURL: '/images/docker.png'
            },
            {
                name: 'MongoDB',
                description: 'I will use MangoDB to store lr apps data in a JSON- like document format that can be quicky accessed via fast queries',
                imgURL: '/images/mangodb.png'
            },
            {
                name: 'Express',
                description: 'I will ues Express.js to oraganize lr web application into an MVC architecture in the server side.',
                imgURL: '/images/express.png'
            },
            {
                name: 'Angular 2',
                description: 'I will build single page apllication using Angular2. I will build full-fledge web apps that can be used in real life.',
                imgURL: '/images/angular.png'
            },
            {
                name: 'Node.js',
                description: 'I will use Node.js to automate lr development process. I will also build back-end foe web and mobile apps.',
                imgURL: '/images/node.jpg'
            },
            {
                name: 'Ionic 2',
                description: 'I will build hybrid mobile applications using Ionic2 Framework. I have reached eternity! I are now Yoda!',
                imgURL: '/images/ionic.png'
            },
            {
                name: 'API',
                description: 'I will build API that can be used by mobile applications and outside world. I will also consume others API',
                imgURL: '/images/api.png'
            },
            {
                name: 'Firebase',
                description: 'I will use Firebase as a backend as a service to build realtime applicatios without any back-end coding',
                imgURL: '/images/firebase.png'
            },
            {
                name: 'Software Testing',
                description: 'While observing Test Driven Development. I will automate unit, functional and integration testing.',
                imgURL: '/images/software.jpg'
            },
            {
                name: 'Algorithms',
                description: 'Knowledge of Algorithm is a key factor in cracking coding interviews. I will use them to solve the problem.',
                imgURL: '/images/algorithm.jpg'
            },
            {
                name: 'Data Structures',
                description: 'I will understand famous data structure and use the right data structure to optimize the performance or lr app.',
                imgURL: '/images/data.png'
            }
           
        ]
    }
    render() {
        return (
            <div>
                <Header text="We are learning" />
                <div className="container">
                    {this.skillInformation.map(skill => {
                        return (
                            <Tile skillName={skill.name}
                                  skillDescription={skill.description}
                                  skillImg={skill.imgURL} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default LandingPage