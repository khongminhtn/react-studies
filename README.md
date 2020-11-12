# Table of Content  
The following are sections re where you can see all my study notes on specific technology.
- [ReactJS](https://github.com/khongminhtn/technology-studies#react-quickly--azat-mardan)


# React Quickly – Azat Mardan

In this book Azat Mardan had managed to walk me through the core concepts, eco system tools and libraries around React. My understanding of React Stack; Redux, GraphQL, Webpack, React Router, Express.js, Node.js and Jest will be demonstrated in this repository through commenting on projects.

Projects in this book are not arbitrary projects, rather they are a combination of various project in scales. I see these tasks as tools that can be used in many more projects that I will be working on whether it is personally or professionally.

# Projects:  
### Book store with React Router.  
**Incorporating areas of study (roadmap)**
1. Project structure with npm, Babel and Webpack configuration
2. The host HTML file
3. Creating Components
4. Launching the project

**Brief**  
Build a simple e=commerce storefront for a bookstore.

**Objectives**
- Pass data to route and access it
- Access URL parameters
- Create modal windows with changing URLs
- Use layouts by nesting routes
 
**Techniques Illustration**
- *Home (/)* - store front with book list
- *Product page (/product/:id)* - a separate product page
- *Cart (/cart)* - displays quantities and titles
- *Checkout (/checkout)* - A print-ready invoice with list of books.

 
 
# Mini projects:  
### Menu  
Create a menu/application that reacts to user's role. If the user is a manager, then the menu will display only the neccessary links for the manager, else it displays for customers.This layout's header will be displayed across many pages.

### Tooltip Widget  
Created a small pop up widget that essentially serve as a guidance for the users. This tool would be particularly useful for sites that contain a high amount of information.

### Timer component
Created a timer that has a some buttons for the timer to respond to. This is a very small and simple tool, yet I can see this tool being used in many many applications.  
 
# React Fundamentals  
### What is React
- UI Components library
- React creates composable UI, not from templates
- Self-contained and block of functionality specific
- Solve exactly the problem of complex website where View changes in reponse to data change.

### JSX  
JSX Code -> Transiler -> JS -> Browser  
 
JSX is a replacement for React.createElement(name, keys:values, children), meaning that it allows for improvement in readability.  
 
**Important Reminder**  
- Use *className* and *htmlFor* instead of the standard HTML 
- *style* attribute takes JavaScript object, not a string like HTML.
- Ternary operators and IIFE are best for if/else statements
- JSX requires the compiler Babel.
 
### States and Properties
**Important Reminder**
- States are mutable, properties are immutable
- *getInitialState* allows components to have an initial *state* object
- *this.setState* updates only the passed properties.
- {} is used to render variables and execute JavaScript expressions in JSX
- this.state.NAME is a way to access state variables.
- Stateless components are prefered way of working with React.
 
### Life Cycles  
Categories of events:
- Mounting (Events executed once)
    - componentWillMount()
        - Happens before mounting to DOM
    - componentDidMount()
        - Happens after mounting and rendering
- Updating (Events executed multiple times)
    - *componentWillReceiveProps(nextProps)*
        - Happens when component about to receive props
    - *shouldComponentUpdate(nextProps, nextState)*
        - bool allows optimizing component's render by determining when to update
    - *componentWillUpdate(nextProps, nextState)*
        - Happens right before the component is updated
    - *componentDidUpdate(prevProps, prevState)*
        - Happens right after the component is updated
- Unmounting (Events executed once)
    - componentWillUnmount function()
        - Unbinds and detach any event listeners and do other clean ups before component is unmounted.
 
![react-express](https://github.com/khongminhtn/technology-studies/tree/main/ReactJS/images/lifecycletable.png)  
Mounting -> Updating -> Unmouting
**Important Reminder**
- componentWillMount() will be rendered on the server and client
- componentDidMount() invoked only client side
- Mounting events are typically used to integrate React with other libraries and to get data from servers or store (redux)
- shouldComponentUpdate() optimize rendering
- Unmounting typically used for clean ups avoid any data leaks.
- Updating is place for logic that relies on new properties and states.
 
### Event Handlers  
**Important Reminder**
- onClick captures mouse and trackpad click
- JSX syntax for handlers ```<a onNAME={this.METHOD}>```
- Bind event using bind() in constructor() or JSX using *this*
- use Ternary for auto binding
- componentDidMount() triggered only on the browser
- componentDidMount() abd componentWillUnmount() can be used to integrate React with other frameworks and events.
 
### Scaling React Component
**Important Reminder**
- define default value by setting component's *defaultProps*
- check type property using *isRequired* for form validation
- Uplifting allows for reuse of common properties and methods and events
- Higher-Order components are defined as a function that take another component as an argument
 
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
 
 
**Universal JavaScript Implementation**
1. Generate HTML from react components.
2. Render HTML code, generated from React components in Express servers.
3. Implement and serve React browser files via Express.

**Uniqueness of Express.js**
1. Possibly "the most popular" Node.js framework; simple yet highly configurable
2. Takes place of an HTTP(S) servers, replacing:
    - Microsoft IIS
    - Apache httpd
    - Nginx
    - Apache Tomcat
3. Allows the building of high scaleable performant systems; non-blocking I/O
4. Vast ecosystems of middleware, stable code base.
 
**Simplified procedure of Universal JavaScript**
1. Set up the server so that it provides data to the template and renders HTML(components and properties), such as index.js
2. Create a template that output data unescaped, such as views/index.hbs
3. Include the browser React file (ReactDOM.Render) in the template for interactivity, such as client/app.jsx.
4. Create the Header,Footer and MessageBoard components.
5. Set up build processes with Webpack, such as webpack.config.js
 
![react-express](https://github.com/khongminhtn/technology-studies/tree/main/ReactJS/images/react-express.png)  
 
> You should consider *every* user to be potentially either a malicious attacker or a negligent person who never reads your instrutions and always sends weird data. - Azat Mardan.

