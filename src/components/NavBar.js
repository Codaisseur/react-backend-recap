import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div style={{ marginLeft: 40 }}>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
