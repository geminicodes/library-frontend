import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            {/* icon logo */}
            <ReviewsIcon color="primary" fontSize="large" />
        </div>
        <div className="header__right">
            {/* logout button */}
            <Button variant="outlined" startIcon={<LogoutIcon />}>
                logout
            </Button>
        </div>
    </div>
  );
}

export default Header;