import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <Link to="/">Excersice</Link>
      </nav>
    </div>
  );
};
