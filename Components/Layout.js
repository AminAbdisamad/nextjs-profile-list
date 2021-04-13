import Navbar from './Navbar.js';
import Footer from './Footer.js';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
