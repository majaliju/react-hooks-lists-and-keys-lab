import React from "react";

// // imported via an example from Robin Pokorny's MEDIUM page on key gens
// import { nanoid } from 'nanoid';
// const createNewTodo = (text) => ({
//   completed: false,
//   id: nanoid(),
//   text
// }

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((item) => {
          return <span key={item}>{item}</span>
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
