import logo from "../Assets/logo.png";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const pages = ["shop", "mens", "womens", "kids"];
  const [menu, setMenu] = useState("");

  return (
    <>
      <div className="flex items-center bg-white">
        <ul className="flex justify-start items-center w-4/5">
          <div>
            <img src={logo} alt="" />
          </div>

          {pages.map((page) => {
            return (
              <li className="">
                <Link to={page == "shop" ? "/" : `/${page}`}>
                  <Button
                    onClick={() => setMenu(page)}
                    variant={menu == page ? "contained" : "outlined"}
                    color="inherit"
                    size="small"
                    sx={{ margin: 2 }}
                  >
                    {page}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center ">
          <Link to="/login">
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              sx={{ marginRight: 2 }}
            >
              Login
            </Button>
          </Link>

          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
