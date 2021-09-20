import { Link } from "react-router-dom";

const NavBar = props => {
  const profile = props.profile;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div style={{ marginLeft: 40 }}>
        {profile.token ? (
          <div style={{ display: "flex" }}>
            <button onClick={() => props.setToken({ token: null })}>
              Logout
            </button>
            <div>
              Welcome - {profile.name} - {profile.email}
            </div>
          </div>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
