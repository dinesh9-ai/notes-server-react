// import $ from 'jquery';

// $(function(){
//     var stri = '#len'; //increment by 1 up to 1-nelemnts
//     $(document).ready(function(){
//       var i, stop;
//       i = 1;
//       stop = 4; //num elements
//       setInterval(function(){
//         if (i > stop){
//           return;
//         }
//         $('#len'+(i++)).toggleClass('bounce');
//       }, 500)
//     });
//   });

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    cName: "nav-text",
    sems:[]
  },
  {
    title: "1st Year",
    path: "/1st-year",
    cName: "nav-text",
    sems:["1-1","1-2"],
    func:"showFb()",
    state:"fb"
  },
  {
    title: "CSE",
    path: "/CSE",
    cName: "nav-text",
    sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
    func:"showCb()",
    state:"cb"
  },
  {
    title: "ECE",
    path: "/team",
    cName: "nav-text",
    sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
    func:"showEb()",
    state:"eb"
  },
  {
    title: "MECH",
    path: "/Mech",
    cName: "nav-text",
    sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
    func:"showMb()",
    state:"mb"
  },
  {
    title: "CIVIL",
    path: "/civil",
    cName: "nav-text",
    sems:["2-1","2-2","3-1","3-2","4-1","4-2"],
    func:"showCeb()",
    state:"ceb"
  },
  {
    title:"Developed",
    path:"/developed-by",
    cName: "nav-text",
    sems:[]
  }
];