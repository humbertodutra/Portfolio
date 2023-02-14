import self from "../img/self.png"
import mock1 from "../img/tfproject.png"
import mock2 from "../img/trybetunes.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import planet from "../img/planets-project.png";
import wallet from '../img/trybe-wallet-project.png';
import triviaImg from '../img/trivia-game-2.png'
import tryunfoImg from '../img/tryufo-project.png'
import trybeTunes from '../img/trybe-tunes.png';
import trybeOnlineStore from '../img/trybe-online-store.png';
import recipeApp from '../img/recipeApp.png';
import pixelArt from '../img/pixel-art-project.png';

import {html, css, js, react, redux, docker, mysql,
    nodejs, sequelize, JWT, heroku, typescript, jest, mocha, api, python, mongoDb} from '../img/icons/index'
import { Api, Javascript } from "@mui/icons-material"


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
    position: "a Full Stack Developer",
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
            text: "Full Stack Developer"
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
  
    bio: "Hello! I'm Humberto. I'm a full stack developer. I was a lawyer but my passion for technology brought me here, and I believe artificial intelligence will inevitably rule us all one day.",
    skills:
        {
            proficientWith: ['Git', 'Linux', 'React', 'Javascript', 'NodeJs', 'Docker', 'Sequelize', 'MySql', 'JWT', 'TypeScript', 'Html', 'Css', 'Python', 'Heroku', 'MongoDb', ],
            exposedTo: ['React-native', 'Aws']
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
            title: "Planets Project",
            live: "https://humbertodutra.github.io/planets-project/",
            source: "https://github.com/humbertodutra/planets-project",
            stack: [react, css, api],
            image: planet
        },
        
        {
            title: "Trybe Wallet",
            live: "https://humbertodutra.github.io/trybe-project-wallet/",
            source: "https://github.com/humbertodutra/trybe-project-wallet",
            image: wallet,
            stack: [react, redux, css, api],
        },
        {
            title: "Trivia Game",
            live: "https://humbertodutra.github.io/trybe-project-trivia/#/",
            source: "https://github.com/humbertodutra/trybe-project-trivia/",
            image: triviaImg,
            stack: [react, css, api, redux],
        },
        {
            title: "Project Tryunfo",
            live: "https://humbertodutra.github.io/trybe-project-tryunfo/",
            source: "https://github.com/humbertodutra/trybe-project-tryunfo",
            image: tryunfoImg,
            stack: [react, css ],
        },
       
        {
            title: "Trybe Tunes",
            live: "https://humbertodutra.github.io/trybe-tunes",
            source: "https://github.com/humbertodutra/trybe-tunes",
            image: trybeTunes,
            stack: [react, css, api],
        },
        {
            title: "Trybe Online Store",
            live: "https://humbertodutra.github.io/trybe-online-store-17/#/",
            source: "https://github.com/humbertodutra/trybe-online-store-17/",
            image: trybeOnlineStore,
            stack: [react, css, api],
        },
        {
            title: "Food Station App",
            live: "https://humbertodutra.github.io/trybe-project-recipes-app/#/",
            source: "https://github.com/humbertodutra/trybe-project-recipes-app",
            image:  recipeApp,
            stack: [react, css, api],
        },
        {
            title: "Pixel Art",
            live: "https://humbertodutra.github.io/trybe-pixel-art/",
            source: "https://github.com/humbertodutra/trybe-pixel-art/",
            image: pixelArt,
            stack: [html, css, js],
        }
    ],
    portfolioBackend: [
        {
            title: "Delivery App",
            live: "",
            source: "https://github.com/humbertodutra/project-delivery-app",
            image:  '',
            stack: [react, mongoDb, js, typescript, sequelize, nodejs, JWT, api],
        },
        {
            title: "Trybe Football Club",
            live: "",
            source: "https://github.com/humbertodutra/Trybe-Project-Football-club",
            image: "",
            stack: [react, docker, typescript, nodejs, mysql, JWT, sequelize, jest, mocha],
        },
        {
            title: "Store Manager",
            live: "",
            source: "https://github.com/humbertodutra/Trybe-project-storeManager",
            stack: [docker, nodejs, mysql],
            image: ""
        },
        
        {
            title: "Blogs Api",
            live: "",
            source: "https://github.com/humbertodutra/Trybe-project-blogsApi",
            image: "",
            stack: [docker, nodejs, mysql, sequelize, JWT],
        },
        {
            title: "Stranger Things",
            live: "",
            source: "https://github.com/humbertodutra/Trybe-project-strangerThings-backend",
            image: "",
            stack: [heroku, docker, nodejs, mysql]
        },
        {
            title: "Project TrybeSmith",
            live: "",
            source: "https://github.com/humbertodutra/Trybe-project-trybeSmith",
            image: "",
            stack: [docker, typescript, nodejs, mysql, JWT],
        },
        {
            title: "Car-Shop",
            live: "",
            source: "https://github.com/humbertodutra/Project-carShop",
            image:  '',
            stack: [mongoDb, typescript, nodejs],
        },
     
        {
            title: "Trybers and Dragons",
            live: "",
            source: "https://github.com/humbertodutra/Trybe-project-trybersAndDragons",
            image:  '',
            stack: [nodejs, docker, typescript],
        },
        {
            title: "Trybe Inventory Report",
            live: "",
            source: "https://github.com/humbertodutra/trybe-invetory-report",
            image: '',
            stack: [python],
        },
        {
            title: "Project Algorithms",
            live: "",
            source: "https://github.com/humbertodutra/project-alorithms",
            image:  '',
            stack: [python],
        },
        {
            title: "Project Jobs Insights",
            live: "",
            source: "https://github.com/humbertodutra/project-job-insights",
            image:  '',
            stack: [python],
        },
        {
            title: "Project Ting",
            live: "",
            source: "https://github.com/humbertodutra/project-ting",
            image:  '',
            stack: [python],
        },
        {
            title: "Project Restaurant Order",
            live: "",
            source: "https://github.com/humbertodutra/project-restaurant-order",
            image:  '',
            stack: [python],
        },
        {
            title: "Project Tech News",
            live: "",
            source: "https://github.com/humbertodutra/project-tech-news",
            image:  '',
            stack: [python],
        },
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
