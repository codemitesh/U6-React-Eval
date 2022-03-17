import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },

  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div className="navbarDiv">
      {links.map((e, i) => {
        return (
          <Link className="Link" key={i} id={e.id} to={e.link}>
            {e.title}
          </Link>
        );
      })}
    </div>
  );
};
