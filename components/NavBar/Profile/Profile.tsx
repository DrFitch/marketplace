import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import images from "../../../styles/assets/images";
import Style from "./Profile.module.scss";


const Profile = () => {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const settings = [{
        name: 'Profile',
        icon: <FaUserAlt />,
        link: '/profile'
    }, {
        name: 'Account',
        icon: <FaUserAlt />,
        link: '/account'
    },
    {
        name: 'Help',
        icon: <FaUserAlt />,
        link: '/help'
    },
    {
        name: 'Disconnect',
        icon: <FaUserAlt />,
        link: '/disconnect'
    }];

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={images.user.src} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                <div className={Style.profile_account_info}>
                    <p>f1tch</p>
                    <small>0x2cb3032faace320</small>
                </div>
                {settings.map((setting) => (
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                        <Link href={{ pathname: setting.link }}>
                            <Typography textAlign="center">{setting.name}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default Profile;
