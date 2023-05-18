import React from "react";
import { Link ,useNavigate} from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
    <img className="logo" alt="logo"
    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"/>

    {  auth?
      <ul className="NavItem">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {/* <li>
          {auth ? (
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          ) : (
            <Link to="/signup">Sign Up</Link>
          )}
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li> */}
        
         <li><Link onClick={logout} to="/signup"> Logout {(JSON.parse(auth).name)} </Link></li>
         </ul>
          : 
          <ul className="NavItem nav-right" >
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          </ul>
        
     
      }
    </div>
  );
};

export default Nav;
