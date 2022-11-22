import { useState } from "react";
// import { Button } from '../index.js';
import Image from "next/image";
import {
    Profile,
    SearchBar,
    Notification
} from "./index.js";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// icons
import images from "../../styles/assets/images";

// internal import

const pages = ["Explore", "Stats"];

const NavBar = () => {
    // states
    const [discover, setDiscover] = useState(false);
    const [helpCenter, setHelpCenter] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    // menu
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const openNotification = () => {
        closeAllComponent();

        if (!notification) {
            setNotification(true);
        }
    };

    const openProfile = () => {
        closeAllComponent();

        if (!profile) {
            setProfile(true);
        }
    };

    const openSideBar = () => {
        closeAllComponent();

        if (!sideBar) {
            setSideBar(true);
        }
    };

    function closeAllComponent() {
        setDiscover(false);
        setHelpCenter(false);
        setNotification(false);
        setProfile(false);
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}>
                            <Image
                                src={images.logo}
                                alt="NFT Marketplace"
                                width={100}
                                height={100} />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                keepMounted
                                transformOrigin={{ vertical: "top", horizontal: "left" }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: "block", md: "none" } }}>
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}>
                            <Image
                                src={images.logo}
                                alt="NFT Marketplace"
                                width={100}
                                height={100} />
                        </Typography>

                        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Typography variant="h5"
                            noWrap
                            component="a">
                            <Notification />
                        </Typography>

                        <Box sx={{ flexGrow: 0 }}>
                            <SearchBar />
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Profile />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>

        // <div className={Style.navbar}>
        //     <div className={Style.navbar_container}>
        //         {/* left section */}
        //         <div className={Style.navbar_container_left}>
        //             <div className={Style.logo}>
        //                 <Image
        //                     src={images.logo}
        //                     alt="NFT Marketplace"
        //                     width={100}
        //                     height={100}
        //                 ></Image>
        //             </div>
        //             <div className={Style.navbar_container_left_box_input}>
        //                 <div className={Style.navbar_container_left_box_input_box}>
        //                     <input type="text" placeholder="Search" />
        //                     <BsSearch onClick={() => { }} className={Style.search_icon} />
        //                 </div>
        //             </div>
        //         </div>

        //         {/* right section */}
        //         <div className={Style.navbar_container_right}>
        //             <div className={Style.navbar_container_right_discover}>

        //                 {/* discover menu */}
        //                 <p onClick={(e) => openMenu(e)}>Discover</p>
        //                 {discover && (
        //                     <div className={Style.navbar_container_right_discover_box}>
        //                         <Discover />
        //                     </div>
        //                 )}

        //                 {/* help center menu */}
        //                 <div className={Style.navbar_container_right_help}>
        //                     <p onClick={(e) => openMenu(e)}>Help Center</p>
        //                     {helpCenter && (
        //                         <div className={Style.navbar_container_right_help_box}>
        //                             <HelpCenter />
        //                         </div>
        //                     )}
        //                 </div>

        //                 {/* notification */}
        //                 <div className={Style.navbar_container_right_notification}>
        //                     <MdNotifications
        //                         className={Style.notification}
        //                         onClick={(e) => openNotification()}
        //                     />
        //                     {notification && <Notification />}
        //                 </div>

        //                 {/* button section */}
        //                 <div className={Style.navbar_container_right_button}>
        //                     <Button btnText="Create" />
        //                 </div>

        //                 {/* user profile */}
        //                 <div className={Style.navbar_container_right_profile_box}>
        //                     <div className={Style.navbar_container_right_profile}>
        //                         <Image
        //                             src={images.user}
        //                             alt="Profile1"
        //                             width={40}
        //                             height={40}
        //                             onClick={() => openProfile()}
        //                             className={Style.navbar_container_right_profile}
        //                         />

        //                         {profile && <Profile />}
        //                     </div>
        //                 </div>

        //                 {/* menu button */}
        //                 <div className={Style.navbar_container_right_menuButton}>
        //                     <CgMenuRight
        //                         className={Style.menuIcon}
        //                         onClick={() => openSideBar()}
        //                     />
        //                 </div>

        //                 {/* sidebar component */}
        //                 {sideBar && (
        //                     <div className={Style.SideBar}>
        //                         <SideBar setOpenSideMenu={setSideBar} />
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default NavBar;
