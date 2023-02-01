import "./Navbar.css";

export const NavBar = () => {
  return (
    <nav>
      <a href="/" className="siteTitle">
        Home
      </a>
      <ul>
        <li className="active">
          <a href="/">Prueba1</a>
        </li>
        <li>
          <a href="/" className="/">
            Prueba2
          </a>
        </li>
      </ul>
    </nav>
  );
};
