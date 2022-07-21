// import React from "react";
// import Section from "./Section";

// function Landing(props) {
//   function landingEl() {
//     let arr = [
//       { name: "header", type: "header" },

//       { name: "Deploy", type: "button" },

//       { name: "Github", type: "button" },
//     ];
//     return arr.map((el) =>
//       projects
//         .filter((item) => item.id == props.projId)
//         .map((filteredProject) => {
//           return (
//           el.type === "header" ? (
//             <>
//               <h3>{filteredProject.title}</h3>
//               <span>{filteredProject.shortDes}</span>
//             </>
//           ) : el.type === "button" ? 
//               el.name === "Deploy" ?
              
//           (
//             <a href={filteredProject.link} className="btn-anchor">
//               <button className="btn">
//                 <p className="btn-text">{el.name}</p>
//               </button>
//             </a>
//           ) 
//           : 
//           (
//             <a href={filteredProject.github} className="btn-anchor">
//               <button className="btn">
//                 <p className="btn-text">{el.name}</p>
//               </button>
//             </a>
//           ) : 
          
//           null)
//         })
//     );
//   }

//   return (
//     <Section
//       sectionId="Landing"
//       title="Project information"
//       headerClassVal="projects"
//       >

//         <div className="about-margin">{landingEl()}</div>

//     </Section>

//   );
// }

// export default Landing;
