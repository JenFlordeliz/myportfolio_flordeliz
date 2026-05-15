
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { projectsData } from "./Projects";
import type { ProjectData } from "./Projects";


const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();


 
  const project = (location.state?.project as ProjectData) || projectsData.find((p) => p.id.toString() === id);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  const colors = { primary: "#0e633b", slate: "#0f0f0f", muted: "#050505" };


  const containerCard: React.CSSProperties = {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "3rem 2rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
  };


  if (!project) {
    return (
      <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
        <NavBar />
        <div className="container py-5 text-center">
          <div className="alert alert-warning max-width-600 mx-auto py-4 border-0 shadow-sm rounded">
            <h3 className="fw-bold text-dark">Project Workspace Not Found</h3>
            <p className="text-muted small mt-2">Could not find a valid grading data snapshot map context.</p>
            <Link to="/projects" className="btn btn-dark mt-2 btn-sm px-4 fw-bold">Return to Gallery</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }


  return (
    //Color blue is the backgound color of Proje
    <div style={{ backgroundColor: "#d2df8d", minHeight: "100vh" }}>
      <NavBar />
      <div className="container my-5">
        <button
          className="btn btn-sm btn-outline-dark mb-4 fw-semibold px-3 bg-white shadow-sm"
          onClick={() => navigate("/projects")}
          style={{ borderRadius: "8px" }}
        >
          ← Back to Projects
        </button>


        {/* HERO HEADER TITLE MODULE CARD */}
        <div style={containerCard} className="text-center mb-5">
          <div style={{ fontSize: "3.5rem" }}>{project.icon}</div>
          <h1 style={{ fontWeight: 800, color: colors.slate, fontSize: "2.5rem" }} className="mt-2">{project.title}</h1>
          <span className="badge bg-primary text-uppercase px-3 py-2 my-2">{project.desc}</span>
          <p style={{ color: colors.muted, maxWidth: "750px", margin: "1rem auto 0", fontSize: "1.1rem", lineHeight: "1.6" }}>{project.fullDesc}</p>
        </div>


        {/* COMPLETED LABORATORIES EXHIBIT TRACK */}
        <div className="d-flex flex-column gap-4">
          {project.labs.map((lab, index) => (
            <div style={containerCard} key={index}>
              <div className="row align-items-center g-4">
                {/* Text Metadata Parameters */}
                <div className="col-lg-6">
                  <span className="badge bg-dark mb-2 text-uppercase font-monospace" style={{ color: colors.primary, backgroundColor: "#f1f5f9", border: "1px solid #e2e8f0" }}>Lab Assignment</span>
                  <h2 style={{ fontWeight: 700, color: colors.slate }} className="h3">{lab.name}</h2>
                  <p style={{ color: colors.muted, fontSize: "0.95rem", lineHeight: "1.6" }} className="my-3">{lab.description}</p>
                 
                  {/* ✅ WORKING LIVE URL ACTION BUTTON */}
                  <a
                    href={lab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-4 py-2.5 fw-bold shadow-sm mt-2 text-white"
                    style={{ backgroundColor: colors.primary, border: "none", borderRadius: "8px", textDecoration: "none", display: "inline-block" }}
                  >
                    Visit Live Project →
                  </a>
                </div>


                <div className="col-lg-6">
                  <div className="row g-2">
                    {lab.images && lab.images.map((imgSrc, i) => (
                      <div className={lab.images.length > 1 ? "col-6" : "col-12"} key={i}>
                        <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", background: "#f8fafc", padding: "4px" }} className="shadow-sm">
                          <img
                            src={imgSrc} // Resolves successfully via processed bundled asset references
                            alt={`${lab.name} Workspace Snapshot Frame ${i}`}                            className="img-fluid w-100 rounded object-fit-cover"
                            style={{ maxHeight: "250px", minHeight: "150px", display: "block" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default ProjectDetails;
