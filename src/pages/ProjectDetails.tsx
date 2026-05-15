import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { projectsData } from "../data/projectsData";
import type { ProjectData } from "../data/projectsData";

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const project =
    (location.state?.project as ProjectData) ||
    projectsData.find((p) => p.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <h2 className="text-center mt-5">Project Not Found</h2>;
  }

  return (
    <>
      <NavBar />

      <div className="container my-5">

        <button
          className="btn btn-outline-dark mb-4"
          onClick={() => navigate("/projects")}
        >
          ← Back
        </button>

        <div className="text-center mb-5">
          <h1>{project.icon}</h1>
          <h2>{project.title}</h2>
          <p>{project.fullDesc}</p>
        </div>

        {project.labs.map((lab, index) => (
          <div key={index} className="card mb-4 p-4 shadow-sm">

            <h4>{lab.name}</h4>
            <p>{lab.description}</p>

            <a
              href={lab.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mb-3"
            >
              Visit Live Project →
            </a>

            <div className="row">
              {lab.images.map((img, i) => (
                <div key={i} className="col-md-6">
                  <img
                    src={img}
                    alt={lab.name}
                    className="img-fluid rounded"
                  />
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetails;