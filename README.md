# K-pop Comeback Tracker [![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](#) [![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#) [![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#) 
---
The K-pop Comeback Tracker is a website mainly aimed towards helping k-pop fans to follow the upcoming releases of their favorite artists through an easily usable website. Will update here to add the actual website link once it's all mostly setup.

## Installation 
If you would like to fork the repository and run the website modifying it in your own remote environment, here is how to do so. For this project, I am using a Windows 10 machine so I utilized the .msi file in the download page but I had to troubleshoot to get it to work. Regarding specifics, I am on npm v10.9.2 and node v22.13.1. 

- Install [Node.js](https://nodejs.org/en) ensuring the version is at least v18.18 or later using fnm and npm if on Windows
If you would like to check the versions you have in the CLI: 
```
	npm -v
	node -v
```

- Click the Fork button in the top right of the repo, specifying where to fork it
- After forking, you should be in the forked repo now. Click on the green code button and copy the link
- In your editor of choice go to the command line and now type
``` 
	git clone {the copied link}
```

- In the repo on the CLI if you want to start the dev server, type in the CLI:
```	
	npm run dev
``` 
- And ctrl-c in the CLI to stop the server

## Feedback and Contact

If you have any feedback or would like to get in touch, you can submit feedback either 
- on the google form (will add later!)
- or direct email me at vdang@unr.edu

## Data Sources

- https://kprofiles.com/comebacks/ 
- https://kpopofficial.com/category/kpop-comeback-schedule/

## Learning Notes and Misc. 
This stuff is mainly just for personal documentation on questions I wanted answered and googled my way through since this is project is mainly focused on accomplishing its name while also helping me learn React and Typescript. Feel free to read or ignore this section.
<details>

**What is React?**
React is a front-end JS library to help create interactive websites more easily through the use of components. 

**What is a React Component?**
A component is an isolated piece of UI that may contain buttons, images or more that can be combined or nested together to create more complex UIs. They’re written as JS functions and can be combined with markup in JSX that React can render onto the browser. 

**What are React Hooks and the usefulness of custom React Hooks?**
React Hooks are what allow you to access React-specific features from certain components such as needing to remember the state of something or synchronize a component to an external system. 

**How does React managing UI relate to imperative and declarative languages?**
Since declarative languages specify what a program should do and imperative languages specify how a program should do something, it’s relevant to React due to the language being built to solve the problems that arise programming UI imperatively. With React dealing with those problems and React not directly manipulating the UI, it allows you to think declaratively with the UI. 

**In React what is the useEffect hook and how should it be used and what should be kept in mind and its context related to the project?**
The useEffect hook is mainly used to synchronize a component to external systems such as a third party widgets/non-React widgets, browser APIs, the network, or browser DOM to name a few. If you need to transform data or handle user events or chain computations, the hook is best to not be utilized at all. WIthin the project, I didn’t need to synchronize my components to any external systems, I just needed to handle specific user events and transforming data meaning I opted for a custom context and reducer hooks instead. 

**In React what is the useContext hook and how should it be used and what should be kept in mind? Its context related to the project, explain its use and place for the problem it solves?**
The hook allows you to read context from a component and prevents prop drilling when needing to send data from a parent component into deeply nested child components. In the context of the project, writing the custom hook for the filtering allows for a single complex filter state to update depending on the changes in the filter child components. It’s also used for theme switching between dark and light mode on the app since I can pass over the into the entire app, but with next-themes to facilitate it. 

**In React what is the useReducer hook and how should it be used and what should be kept in mind?  Its context related to the project, explain its use and place for the problem it solves?**
The useReducer hook is a hook which uses a reducer function to update the state of something. It’s best used for managing many interrelated states which I used in the project to manage the initialFilters and the filtering overall for the app. Otherwise I would’ve needed to use the useState hook many times which would have made the code much more unreadable and annoying to code and debug. 

</details>