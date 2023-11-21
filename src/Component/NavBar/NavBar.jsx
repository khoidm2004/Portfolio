import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <div className="NavBar_container">
        <nav>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </nav>
      </div>
    </>
  );
}
