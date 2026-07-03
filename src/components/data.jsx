import peopleimg from "../assets/assets_learn_flow/people.png";
import roboticimg from "../assets/assets_learn_flow/Robotics.png";
import cloud from "../assets/assets_learn_flow/cloud.png";
import cyber from "../assets/assets_learn_flow/cyber.png";
import laptop from "../assets/assets_learn_flow/laptop.png";
import statistics from "../assets/assets_learn_flow/statistics.png";
import database from "../assets/assets_learn_flow/database.png";
import blockchain from "../assets/assets_learn_flow/blockchain.png";
import artificial from "../assets/assets_learn_flow/Artificial.png";
import charts from "../assets/assets_learn_flow/charts.png";
 const courses = [
     { 
      title: "UI/UX Design", 
      category: "Coding",
      img:charts,
       courses:45,
        duration:3,
        rating:4.4,
        price: 100 
    },
    {
       title: "People Management",
        category: "PROGRAMMING",
        img:peopleimg,
        courses:50,
        duration:12,
        rating:4.5,
        price: 150
       },
     { 
      title: "Database Management", 
      category: "Coding",
      img:database,
       courses:20,
        duration:8,
        rating:4.4,
        price:300 
    },
    { 
      title: "Advanced Rust", 
      category: "Coding",
      img:statistics,
       courses:30,
        duration:6,
        rating:4.7,
        price: 250
     },
    { 
      title: "Robotics & Machine Learning", 
      category: "Programming",
      img:roboticimg,
       courses:45,
        duration:3,
        rating:4.4,
        price: 100 
    },
     { 
      title: "Web Developement", 
      category: "Coding",
      img:laptop,
       courses:45,
        duration:3,
        rating:4.4,
        price: 100 
    },
     { 
      title: "Cyber Security", 
      category: "Programming",
      img:cyber,
       courses:42,
        duration:6,
        rating:4.2,
        price: 300 
    },
     { 
      title: "Cloud Computing", 
      category: "Programming",
      img:cloud,
       courses:25,
        duration:5,
        rating:4.4,
        price: 300 
    },
     { 
      title: "Artificial Intelligence", 
      category: "Coding",
      img:artificial,
       courses:45,
        duration:3,
        rating:4.4,
        price: 140 
    },
    { 
      title: "Blockchain Technology", 
      category: "Programming",
      img:blockchain,
       courses:40,
        duration:7,
        rating:4.4,
        price: 350 
    },
  ];
export default courses
