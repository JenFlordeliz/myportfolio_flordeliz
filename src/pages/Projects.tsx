import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { projectsData } from "../data/projectsData";
import type { ProjectData } from "../data/projectsData";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (proj: ProjectData) => {
    navigate(`/projects/${proj.id}`, { state: { project: proj } });
  };

  return (
    <>
      <NavBar />

      <div style={{ backgroundColor: "#dfe0c8", minHeight: "120vh" }}>
        <div className="container mt-5 bg-white p-5 rounded shadow-sm">

          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">
              MY PROJECT GALLERY
            </h1>
          </div>

          <div className="row">
            {projectsData.map((proj) => (
              <div key={proj.id} className="col-md-4 mb-4">
                <div
                  className="card text-center p-4 shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleProjectClick(proj)}
                >
                  <h1>{proj.icon}</h1>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>

                  <ul>
                    {proj.labs.map((lab, i) => (
                      <li key={i}>📌 {lab.name}</li>
                    ))}
                  </ul>

                  <button className="btn btn-success mt-3">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;