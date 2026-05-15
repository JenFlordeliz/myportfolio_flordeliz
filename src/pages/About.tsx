import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import profileImg from "../Images/Profile.jpeg";
import { Link } from "react-router-dom";


const About = () => {
  const technicalSkills = [
    "React", "TypeScript", "Node.js", "Express", "MongoDB", "Bootstrap", "CSS", "EmailJS", "Git"
  ];


 const colors = {
    primary: "#04692b",
    slate: "#1e293b",
    muted: "#64748b"
  };


 
    const outlineButtonStyle: React.CSSProperties = {
      border: `2px solid ${colors.slate}`,
      color: colors.slate,
      fontWeight: 600,
      padding: "0.75rem 1.7rem",
      borderRadius: "8px",
      textDecoration: "none"
    };


  const cardStyle: React.CSSProperties = {
    background: "#ffffff",
    border: "1px solid #ffffff",
    borderRadius: "16px",
    padding: "4rem 2rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
  };


  const skillBadgeStyle: React.CSSProperties = {
    backgroundColor: "#eff6ff",
    color: colors.primary,
    border: `1px solid #33ac65`,
    borderRadius: "20px",
    padding: "0.5rem 1.2rem",
    fontWeight: 600,
    fontSize: "0.9rem"
  };


  const timelineItemStyle: React.CSSProperties = {
    borderLeft: `3px solid ${colors.primary}`,
    paddingLeft: "1.5rem",
    marginBottom: "1.5rem",
    textAlign: "left"
  };


  return (
    <div style={{ backgroundColor: "#dfe0c8", minHeight: "100vh" }}>
      <NavBar />
      <div className="container my-5">
        <div style={cardStyle} className="text-center">
         
          <div className="d-flex justify-content-center mb-4">
            <div style={{ width: "130px", height: "130px", borderRadius: "50%", overflow: "hidden", border: `3px solid ${colors.primary}`, boxShadow: "0 4px 10px rgba(37, 99, 235, 0.15)" }}>
              <img src={profileImg} alt="Jennelyn Avatar" className="w-100 h-100 object-fit-cover" />
            </div>
          </div>


          <h1 style={{ fontWeight: 800, color: colors.slate }}>
            About <span style={{ color: colors.primary }}>Me</span>
          </h1>
          <p style={{ color: "black", fontSize: "1.2rem", maxWidth: "700px", margin: "1rem auto 2.5rem", lineHeight: "1.7" }}>
            I am an aspiring web developer passionate about building responsive, accessible, and highly interactive applications.
          </p>


          <div style={{ maxWidth: "650px" }} className="mx-auto mt-5">
            <h3 style={{ fontWeight: 700, color: colors.slate, borderBottom: "2px solid #f8f7c6", paddingBottom: "0.5rem" }} className="text-center">
              🏫 Education Timeline
            </h3>
            <div className="mt-4">
              <div style={timelineItemStyle}>
                <span className="badge bg-primary mb-1">College</span>
                <h5 style={{ fontWeight: 700, color: colors.slate, margin: 0 }}>University of Baguio (UB)</h5>
                <p style={{ color: colors.muted, fontSize: "0.95rem", margin: 0 }}>Pursuing Higher Education Degree in Tech</p>
              </div>
              <div style={timelineItemStyle}>
                <span className="badge bg-secondary mb-1">Senior High School</span>
                <h5 style={{ fontWeight: 700, color: colors.slate, margin: 0 }}>University of Baguio (UB)</h5>
                <p style={{ color: colors.muted, fontSize: "0.95rem", margin: 0 }}>Foundational academic and technical tracking preparation.</p>
              </div>
            </div>
          </div>


          <div style={{ maxWidth: "650px" }} className="mx-auto mt-5">
            <h3 style={{ fontWeight: 700, color: colors.slate, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>
              💻 Technical Toolbox
            </h3>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              {technicalSkills.map((skill, index) => (
                <span key={index} style={skillBadgeStyle} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>


          <div style={{ maxWidth: "650px" }} className="mx-auto mt-5 text-center">
            <h3 style={{ fontWeight: 700, color: colors.slate, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>
              🎯 Career Focus
            </h3>
            <p style={{ color: "black", lineHeight: "1.7", marginTop: "1rem" }}>
              My ultimate goal is to become a professional Frontend Developer, building clean, elegant user interfaces and creating intuitive web environments.
              I am dedicated to expanding my mastery of frontend styling systems, structural logic frameworks, and interactive client-side interfaces.
            </p>
            <div className="mt-4 d-flex justify-content-center gap-3" >
            <Link to="/projects" style={outlineButtonStyle} className="btn">
              View My Projects
            </Link>
          </div>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;