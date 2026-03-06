import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function LinksFooter () {
  const [copied, setCopied] = useState(false)
  const email = 'atessmannyunes@gmail.com';
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true)
  }

  return (
    <footer className="links-footer">
      <nav>
        <ul className="links-footer-list">
          <li>
            <a
              href="https://www.linkedin.com/in/augusto-tessmann-yunes-b0097a96/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            ><FaLinkedin size={40} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tessmannaugusto"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            ><FaGithub size={40} />
            </a>
          </li>
          <li>
            <button onClick={handleCopyEmail}>
              {copied ? "copiado!": <FaEnvelope size={40} />}
            </button>
          </li>
        </ul>
      </nav>
    </footer>

  )
}