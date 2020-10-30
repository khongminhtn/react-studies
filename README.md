React Quickly – Azat Mardan

In this book Azat Mardan had managed to walk me through the core concepts, eco system tools and libraries around React. My understanding of React Stack; Redux, GraphQL, Webpack, React Router, Express.js, Node.js and Jest will be demonstrated in this repository through commenting on projects.

Projects in this book are not arbitrary projects, rather they are a combination of various project in scales. I see these tasks as tools that can be used in many more projects that I will be working on whether it is personally or professionally.

# Project Tools:
### Menu
Create a menu/application that reacts to user's role. If the user is a manager, then the menu will display only the neccessary links for the manager, else it displays for customers.This layout's header will be displayed across many pages.

### Tooltip Widget
Created a small pop up widget that essentially serve as a guidance for the users. This tool would be particularly useful for sites that contain a high amount of information.

### Timer component
Created a timer that has a some buttons for the timer to respond to. This is a very small and simple tool, yet I can see this tool being used in many many applications.

# React Libraries:
### Webpack
Webpack is a react module that allows bundling of assets to avoid uneccessary importing to html files, which could become a cluster. Assets such as JavaScript, CSS, Images, Data files can use external loaders to load assets to entry file and then import only that single entry script to the html.  

### React Routing
URL Routing solves some crucial problems with SPA;
- Refreshing exterminates current progress of page.
- Back button can exit the website and exterminate progress.
- Could not share precise content with friends.
- Search Engine could not index site (no distinct URL).
It solves this by configuring URL that does not map to a physical file. Only sematically meaningful to users. Incredibly useful for user experience and SEO.

### Redux  
Redux is library that implements the Flux architecture. React is a view that works with unidirectional data flow, meaning that it is a one-way binding or one-way data flow. Unidirectional data flow has some advantages:
- Code readability due to one source of truth (unidirectional data flow)
- Debuggable code 
- Server side rendering without a headless browser
**Action -> Reducer -> Dispactcher -> Store**  
Where **action** is the description of the action, **reducer** is the actual action, **dispatcher** is what passes the reducer to the store and **store** is the globalized state.  
 
### GraphQL
In the development phrase, for front-end to work efficiently mock data in json format need to be updated quickly and elegantly. This fast working environemnt is from the rise of agile development and lean start up methodology. A brilliant solution to this is GraphQL. Back-end servers will provide a GraphQL api, where it is often used with Relay, redux can also work. GraphQL uses query strings that returns data in JSON format.  

**GraphQL Reverse Control Advantages:**  
- *Client-specific queries* - client get what they need.
- *Structure, arbitrary code* - the uniform API offers server-side flexibility
- *Strong typing* - Robust validation in resposnse, easier data consumption
- *Hierarchical queries* - queries follow data they return
- *Faster prototyping* - query has single end point
- *Fewer API calls* - data structure is dictated by the front-end app
- *Allows hash-less URL and broswer history*
 
### Jest  
Properly tested codes will saves hours and hours of debugging later down the line. In software development, the codes are considered as liability. The software is an asset, because it produces income whereas the code is time consuming.  
 
**Types of Testing**  
*Unit Test* 70% - Test system tests standalone methods and classes.  
*Service (intergration) test* 20%
*UI (acceptance) 10% - Mimics agile user stories, entire system testing.

### Node.js: Universal JavaScript (fullstack javascript):  
**Some issues with SPAs:**
1. *No search engine optimization (SEO)* - ineffcient search crawlers.
2. *Poor performance* - huge bundled files and AJAX calls upon load up.
3. *Poor maintainability* - Duplication of code on browser and server.
 
**Problems elaboration**
1. *Page indexing*
- Most SPAs serve protected resrouces and dont need indexing.
- Searching Engines require indexing
 
2. *Better Performance*
- First page render is incredibily crucial.
    - Bundle with over 1 mb is too large.
- Server side rendering can render first page with speed. Everything else can load later.
- Performance boost comes from the reduced waiting time for AJAX calls.
- Preloading data and caching on server side before AJAX calls also helps.
 
3. *Better code maintainability*
- Code is a liability, the more code, the more effort required to maintain
