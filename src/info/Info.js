import self from "../img/self.png"
import mock1 from "../img/tfproject.png"
import mock2 from "../img/trybetunes.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import {html, css, js, react, redux, docker, mysql,
    nodejs, sequelize, JWT, heroku, typescript, jest, mocha, api} from '../img/icons/index'


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(161,158,158)", "rgb(61,57,57)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Humberto",
    lastName: "Dutra",
    initials: "hd", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Junior Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'coffe and code'
        },
        {
            emoji: '🌎',
            text: 'based in the Brazil'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer Student at Trybe"
        },
        {
            emoji: "📧",
            text: "humberto.dutra@hotmail.com"
        }
    ],

    socials: [
        {
        
            link: "https://linkedin.com",
            icon: "fa fa-download",
            label: 'download cv',
            text: 'My Cv: '        
    },
        {
            link: "https://github.com/humbertodutra",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    
      
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
  
    bio: "Hello! I'm Humberto. I'm a full stack student at Trybe. I was a lawyer but my passion for technology brought me here, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['Git', 'Linux', 'React', 'Javascript', 'NodeJs', 'Docker', 'Sequelize', 'MySql', 'JWT', 'TypeScript', 'Html', 'Css'],
            exposedTo: ['React-native', 'Python', 'Heroku', 'MongoDb']
        }
    ,
    hobbies: [
        {
            label: 'read',
            emoji: '📖'
        },
        {
            label: 'travel',
            emoji: '✈️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cook',
            emoji: '🍳'
        },
        {
            label: 'football/soccer',
            emoji: '⚽'
        },
        {
            label: 'swin',
            emoji: '🏊‍♂️'
        },
        {
            label: 'meditation',
            emoji: '🧘‍♂️'
        }

    ],
    portfolio: [ 
        {
            title: "Trybe Football Club",
            live: "https://tfcfrontend.herokuapp.com/",
            source: "https://github.com/humbertodutra/projectTFC",
            stack: [heroku, react, docker, typescript, sequelize, mysql],
            image: mock1
        },
        {
            title: "TrybeTunes",
            live: "https://humbertodutra.github.io/trybe-tunes",
            source: "https://github.com/humbertodutra/trybe-tunes",
            image: mock2,
            stack: [react, html, css],
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3,
            stack: [heroku, react, docker, typescript, sequelize, mysql],
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4,
            stack: [heroku, react, docker, typescript, sequelize, mysql],
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5,
            stack: [heroku, react, docker, typescript, sequelize, mysql],
        }
    ],

    Languages: [
        {
            label: 'Portuguese',
            emoji: '🇧🇷',
            level: 'Native'
        },
        {
            label: 'English',
            emoji: '🇺🇸',
            level: 'Advanced',
        },
        {
            label: 'Spanish',
            emoji: '🇪🇸',
            level: 'Advanced',
        }
        
    ]

    }
