import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-brand">EZWebsites</span>
        <span className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  )
}
