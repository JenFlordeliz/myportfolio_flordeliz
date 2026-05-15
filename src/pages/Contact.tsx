import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });


  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });


    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      };


      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log("Email sent:", response);


      setStatus({
        type: "success",
        message: "✅ Message sent successfully! I'll get back to you soon.",
      });


      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      setStatus({
        type: "error",
        message: "❌ Failed to send message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };


  return (
    <>
      <NavBar />
      {/* ✅ White background applied to full page */}
      <div style={{ backgroundColor: "#dfe0c8", minHeight: "100vh" }}>
        <div className="container my-5 py-5">
          <style>
            {`
            .bg-khaki {
              background-color: #edf2f7;
            }
            .form-control {
              background-color: #f8f9fa;
              border: 1px solid #ced4da;
              box-shadow: none;
            }
            .form-control:focus {
              border-color: #007bff;
              box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.15);
            }
            `}
          </style>
          <div className="text-center mb-5">
            <h1 className="fw-bold display-5 text-dark">
              Get In <span className="text-primary text-decoration-underline">Touch</span>
            </h1>
            {/* ✅ Fixed broken color:white inline style */}
            <p style={{ color: "#0f0f0f" }}>
              Have an opportunity, question, or want to build a cool interface together? Let's connect.
            </p>
          </div>


          <div className="row g-5">
            <div className="col-lg-7">
              <div className="bg-khaki p-4 p-md-5 rounded shadow-sm border h-100">
                <h2 className="h4 fw-bold text-dark mb-4">Send a Message</h2>


                {status.message && (
                  <div
                    className={`alert alert-${
                      status.type === "success" ? "success" : "danger"
                    }`}
                    role="alert"
                  >
                    <small className="fw-medium">{status.message}</small>
                  </div>
                )}


                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-light border-0 shadow-none text-dark"
                      id="floatingName"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="floatingName" className="text-muted fw-semibold small">
                      Your Name
                    </label>
                  </div>


                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light border-0 shadow-none text-dark"
                      id="floatingEmail"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="floatingEmail" className="text-muted fw-semibold small">
                      Your Email
                    </label>
                  </div>


                  <div className="form-floating mb-4">
                    <textarea
                      name="message"
                      className="form-control bg-light border-0 shadow-none text-dark"
                      id="floatingMessage"
                      placeholder="Type your brief message description..."
                      style={{ height: "150px" }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="floatingMessage" className="text-muted fw-semibold small">
                      Message
                    </label>
                  </div>


                  <button
                    type="submit"
                    className="btn btn-dark w-100 py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                    disabled={isSending}
                  >
                    {isSending && (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    )}
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>


            {/* Right Column: Direct Informational Direct Metadata Grid Area */}
            <div className="col-lg-5 d-flex flex-column gap-3">
              <div className="bg-white p-4 p-md-5 rounded shadow-sm border flex-grow-1 d-flex flex-column justify-content-center">
                <h2 className="h4 fw-bold text-dark mb-4">Direct Communication Links</h2>


                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="bg-light rounded p-3 text-center text-primary fs-5 d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    📧
                  </div>
                  <div>
                    <h6 className="fw-bold text-muted small m-0 text-uppercase tracking-wider">Email Inbox</h6>
                    <a href="mailto:jennelyn.flordeliz@example.com" className="text-decoration-none text-dark fw-semibold">
                      jennelyn.flordeliz@example.com
                    </a>
                  </div>
                </div>


                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="bg-light rounded p-3 text-center text-primary fs-5 d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    📱
                  </div>
                  <div>
                    <h6 className="fw-bold text-muted small m-0 text-uppercase tracking-wider">Mobile Number</h6>
                    <a href="tel:+639123456789" className="text-decoration-none text-dark fw-semibold">
                      +63 912 345 6789
                    </a>
                  </div>
                </div>


                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="bg-light rounded p-3 text-center text-primary fs-5 d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    🐙
                  </div>
                  <div>
                    <h6 className="fw-bold text-muted small m-0 text-uppercase tracking-wider">GitHub Hub</h6>
                    <a
                      href="https://github.com/JennelynFlordeliz"
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none text-dark fw-semibold"
                    >
                      github.com/JennelynFlordeliz
                    </a>
                  </div>
                </div>


                <div className="d-flex align-items-start gap-3">
                  <div
                    className="bg-light rounded p-3 text-center text-primary fs-5 d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    💼
                  </div>
                  <div>
                    <h6 className="fw-bold text-muted small m-0 text-uppercase tracking-wider">LinkedIn Space</h6>
                    <a
                      href="https://linkedin.com/in/JennelynFlordeliz"
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none text-dark fw-semibold"
                    >
                      linkedin.com/in/JennelynFlordeliz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Contact;