import { Link } from "react-router-dom";

const ConnectMe = () => {
  return (
     <div className="mt-5">
                  <h2 className="fw-bold">Connect With Me</h2>
                  <p className="text-muted">
                    Feel free to reach out via social media or email!
                  </p>
    
                  {/* Social Media Links */}
                  <div className="d-flex justify-content gap-4 mt-3">
                    <a
                      href="https://www.linkedin.com/in/sharath-elumle-b60272129/"
                      className="text-primary fs-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/SharathElumle23/SharathElumle23"
                      className="text-dark fs-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="mailto:sharathelumle23@gmail.com?subject=Hello%20Sharath&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
                      className="text-danger fs-3"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a
                      href="https://x.com/sharath_elumle"
                      className="text-info fs-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
    
                  {/* Contact Button */}
                  <Link to="/contact" className="btn btn-primary mt-4">
                    <i className="fas fa-paper-plane"></i> Contact Me
                  </Link>
                </div>
           
  )
}

export default ConnectMe