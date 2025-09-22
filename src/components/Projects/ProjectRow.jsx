export const ProjectRow = ({ project }) => {
  return (
    <div className="row justify-content-center align-items-center w-100 my-4">

      <div className="col-10 col-lg-8">

        {/* Project Title and Date */}
        <div className="d-flex flex-nowrap align-items-md-center align-items-start justify-content-md-between justify-content-evenly flex-md-row flex-column ">
          <p className="fw-bold fs-5 my-1">{project.name}</p>
          <p className="text-muted my-1">{project.date}</p>
        </div>
        
        {/* Description */}
        <ul className="my-3">
          {project.description.map((point, i) => (
            <li key={i} className="light-dim-color-text">{point}</li>
          ))}
        </ul>

        {/* Links */}
        <div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark rounded-pill theme-color-1-text"
            >
              GitHub
            </a>
          )}

          {project.github && project.link && (
            <span className="mx-1"></span>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark rounded-pill theme-color-1-text"
            >
              Live Demo
            </a>
          )}
          
        </div>

      </div>

    </div>
  );
};