import React from 'react';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import All from './components/All';
import Fullstack from './components/Fullstack'
import Datascience from './components/DataScience'
import Cyber from './components/Cyber'
import Uiux from './components/Uiux'
import NoMatch from "./components/NoMatch"
import './App.css';

const App = () => {
  const data = [
    {

      image: "https://th.bing.com/th?id=OIP.v5yOgrGYbWmPJr58hzpEowAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",

      head: "Full Stack Development",

      content: 'Studying full-stack development offers the advantage of a comprehensive skill set, enabling individuals to design, develop, and deploy both front-end and back-end components of applications.',

      date: "28",

      month: "January"

    },

{
  "image": "https://th.bing.com/th/id/OIP.Eh0Dz7XYOXx1N7oyiWzzvwAAAA?pid=ImgDet&w=192&h=128&c=7&dpr=1.5",
      "head": "Data Science",
      "content": "Data science involves extracting insights and knowledge from structured and unstructured data using various scientific methods, processes, algorithms, and systems.",
      "date": "15",
      "month": "March"
    },

{
  "image": "https://th.bing.com/th/id/OIP.oZfwym0jQp1LT-U2_4daBwAAAA?w=243&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "head": "Cybersecurity",
      "content": "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, unauthorized access, and data breaches.",
      "date": "22",
      "month": "May"
    },

{
  "image": "https://th.bing.com/th/id/OIP.h5k9Uo9tPrS5KYuaIF00qAAAAA?w=184&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "head": "UI/UX Design",
      "content": "UI/UX design focuses on creating user interfaces and experiences that are intuitive, visually appealing, and enhance the overall usability of digital products.",
      "date": "10",
      "month": "August"
    },

{

  image: "https://th.bing.com/th?id=OIP.So0t7njQKOeClgInrdCHywHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",


      head: "Full Stack Development",

  content: "Additionally, full-stack developers often enjoy increased autonomy and efficiency in project collaboration, as they can seamlessly bridge the gap between different layers of the technology stack.",

      date: "28",

      month: "January"

    },

{
  "image": "https://th.bing.com/th/id/OIP.Eh0Dz7XYOXx1N7oyiWzzvwAAAA?pid=ImgDet&w=192&h=128&c=7&dpr=1.5",
      "head": "Data Science",
      "content": "Data science involves extracting insights and knowledge from structured and unstructured data using various scientific methods, processes, algorithms, and systems.",
      "date": "15",
      "month": "March"
    },

{
  "image": "https://th.bing.com/th/id/OIP.usrEDi79jfWEiZCzxN-BlgAAAA?w=260&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "head": "Cybersecurity",
      "content": "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, unauthorized access, and data breaches.",
      "date": "22",
      "month": "May"
    },

{
  "image": "https://th.bing.com/th/id/OIP.90EacgZTYs_OQzOUQ0ux_AAAAA?w=228&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "head": "UI/UX Design",
      "content": "UI/UX design focuses on creating user interfaces and experiences that are intuitive, visually appealing, and enhance the overall usability of digital products.",
      "date": "10",
      "month": "August"
    },

{

  image: 'https://th.bing.com/th?id=OIP.uwDe1OuUQynI0D3--OFtFwHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',

      head: "Full Stack Development",

  content: "This proficiency fosters versatility, making graduates attractive to employers seeking well-rounded professionals capable of handling end-to-end development tasks. ",

      date: "28",

      month: "January"

    },

{
  "image": "https://th.bing.com/th/id/OIP.BD35OvzOy0UZavkjGvH7tAAAAA?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "head": "Data Science",
      "content": "Data science involves extracting insights and knowledge from structured and unstructured data using various scientific methods, processes, algorithms, and systems.",
      "date": "15",
      "month": "March"
    },

{
  "image": "https://th.bing.com/th/id/OIP.fziOSxYfPYXDP-iFfYqaAwAAAA?w=286&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "head": "Cybersecurity",
      "content": "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, unauthorized access, and data breaches.",
      "date": "22",
      "month": "May"
    },

{
  "image": "https://th.bing.com/th/id/OIP.S1q_1eGNiZnAf5r-SKOKSAHaGJ?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "head": "UI/UX Design",
      "content": "UI/UX design focuses on creating user interfaces and experiences that are intuitive, visually appealing, and enhance the overall usability of digital products.",
      "date": "10",
      "month": "August"
    }




]

  return (

    <div>

      <h1 className='header'> In This Tech World You should Know These Courses...</h1>
     
      <BrowserRouter>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<All data={data} />} />
          <Route path='/fullstack' element={<Fullstack data={data} />} />
          <Route path='/datascience' element={<Datascience data={data} />} />
          <Route path='/cybersecurity' element={<Cyber data={data} />} />
          <Route path='/UIUXDesign' element={<Uiux data={data} />} />
          <Route path='*' element={<NoMatch/>} />
        </Routes>

      </BrowserRouter>
    
   </div>
    
      
 
  );
};

export default App;