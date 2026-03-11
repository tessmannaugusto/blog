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
      <nav aria-label="Social links">
        <ul className="links-footer-list">
          <li>
            <a
              href="https://www.linkedin.com/in/augusto-tessmann-yunes-b0097a96/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
              aria-label="LinkedIn profile (opens in new tab)"
            ><FaLinkedin size={40} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tessmannaugusto"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
              aria-label="GitHub profile (opens in new tab)"
            ><FaGithub size={40} aria-hidden="true" />
            </a>
          </li>
          <li>
            <button onClick={handleCopyEmail} aria-label={copied ? "Email copied!" : "Copy email address"}>
              {copied ? "email copied!" : <FaEnvelope size={40} aria-hidden="true" />}
            </button>
          </li>
        </ul>
      </nav>
    </footer>

  )
}