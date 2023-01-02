import * as AiIcons from "react-icons/ai";

// window.onload=function(){

// console.log(1+1);
// window.addEventListener("load", () => {
//     document.body.classList.remove("preload");
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const nav = document.querySelector(".nav");
//     const el=document.querySelector("#btnNav");
   
//         el.addEventListener("click", () => {
//             nav.classList.add("nav--open");
//         });
    
//     const ul=document.querySelector(".nav__overlay");
    
//         ul.addEventListener("click", () => {
//             nav.classList.add("nav__overlay");
//         });
    
// });


// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }


// }

// const jSems=["1-1","1-2"]
// const sSems=["2-1","2-2","3-1","3-2","4-1","4-2"]
const a='unit-1',b='unit-2',c='unit-3',d='unit-4',e='unit-5';


export const sidebarData=[
    {Name:"Home",
    cName: "nav-text",
    number:0,
    path:"/",
    icon: <AiIcons.AiFillHome />},

    {Name:"H&S",
    cName: "nav-text",
    number:2,
    path:"/h-s",
    func:'showH',
    state:"hs",
    sems:["Full Year"],
    count:[2],
    units:[['Applied Physics','Mathematics-2' ]],
    dict:{'Applied Physics':[a,b,c,d,d,d,e,e,e],
         'Mathematics-2':[a,a,b,c,d,d,e]}},

    {Name:"CSE",
    cName: "nav-text",
    number:6,
    path:"/cse",
    func:'showC',
    state:"cs",
    sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
    count:[0,5,5,0,0,0],
    units:[[],['Computer Networks','Formal Language and Automata Theory','Numerical and Statistical Methods','Operating Systems','Softwar Design and Engineering'],
            ['Artifical intelligence','Compiler Design','Design and Analysis of Algorithms','Data Mining and Analytics','Web Technologies'],
            [],[],[]],
    dict:{'Computer Networks':[a,c,d,e],
    'Formal Language and Automata Theory':[a,a,c],
    'Numerical and Statistical Methods':[a,b,c],
    'Operating Systems':[a,b,b,b,d,e],
    'Softwar Design and Engineering':[a,b,c,d],
    'Artifical intelligence':[a,a,b,c,d,e],
    'Compiler Design':[b,d,e],
    'Design and Analysis of Algorithms':[a],
    'Data Mining and Analytics':[a,a,a,b,b,c,c,e],
    'Web Technologies':[a,a,b,b,c,c,d,e,e],
    }},

    {Name:"ECE",
    cName: "nav-text",
    number:6,
    path:"/ece",
    func:'showE',
    state:"es",
    sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
    count:[5,5,5,5,0,0],
    units:[['NMCA','Network and Measurements','PTSP','Analog Electronics','Signals and systems'],
            ['Pulse and Digital Circuits','LDICA','EMTL','DDCO','Control Systems'],
            ['Analog and Digital Circuits','AWP','Digital Signal Processing','MPMC','Internet Of Things'],
            ['Microwave Engineering','VLSI','AI','Digital Image Processing','Java'],
            [],[]],
    dict:{'NMCA':[a,b,c,d,e],
    'Network and Measurements':[a,b,c,d,d,e],
    'PTSP':[a,a,b,d],
    'Analog Electronics':[a,b,c,d,e],
    'Signals and systems':[a,b,c,c,d,e],
    'Pulse and Digital Circuits':[a,b,c,d,e],
    'LDICA':[a,a,b,b,c,c,d,d,d,e],
    'EMTL':[a,b,c,d,e],
    'DDCO':[a,a,b,c,d,e],
    'Control Systems':[a,b,c,e,e],
    'Analog and Digital Circuits':[a,b,c,d,e],
    'AWP':[a,b,c,c,d,e],
    'Digital Signal Processing':[a,b,c,d,e],
    'MPMC':[a,b,c,c,d,e],
    'Internet Of Things':[a,b],
    'Microwave Engineering':[a,b],
    'VLSI':[a,a,b,c],
    'AI':[a,b,c,d,e],
    'Digital Image Processing':['None'],
    'Java':['None']
    }},

    {Name:"MECH",
    cName: "nav-text",
    number:6,
    path:"/mech",
    func:'showM',
    state:"ms",
    sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
    count:[0,0,0,0,0,0],
    units:[[],[],[],[],[],[]],
    dict:{}},

    {Name:"CIVIL",
    cName: "nav-text",
    number:6,
    path:"/civil",
    func:'showCi',
    state:"cis",
    sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
    count:[0,0,0,0,0,0],
    units:[[],[],[],[],[],[]],
    dict:{}},

    {Name:"Contributor",
    cName: "nav-text",
    number:0,
    path:"/contributor",
    icon: <AiIcons.AiFillHome />},
]