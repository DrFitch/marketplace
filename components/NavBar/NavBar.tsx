import { useState } from 'react';
import { Button } from '../index.js';
import { Discover, HelpCenter, Notification, Profile } from './index.js';
import Image from 'next/image';

// icons
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';
import images from '../../styles/assets/images';

// internal import
import Style from './NavBar.module.scss';

const NavBar = () => {
    // states
    const [discover, setDiscover] = useState(false);
    const [helpCenter, setHelpCenter] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    const openMenu = (e: any) => {
        const btnText = e.target.innerText;

        closeAllComponent();

        console.log(btnText);


        if (btnText === 'Discover') {
            setDiscover(true);
        } else if (btnText === 'Help Center') {
            setHelpCenter(true);
        } else if (btnText === 'Notification') {
            setNotification(true);
        } else if (btnText === 'Profile') {
            setProfile(true);
        }
    };

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

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                {/* left section */}
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <Image
                            src={images.logo}
                            alt="NFT Marketplace"
                            width={100}
                            height={100}
                        ></Image>
                    </div>
                    <div className={Style.navbar_container_left_box_input}>
                        <div className={Style.navbar_container_left_box_input_box}>
                            <input type="text" placeholder="Search" />
                            <BsSearch onClick={() => { }} className={Style.search_icon} />
                        </div>
                    </div>
                </div>

                {/* right section */}
                <div className={Style.navbar_container_right}>
                    <div className={Style.navbar_container_right_discover}>

                        {/* discover menu */}
                        <p onClick={(e) => openMenu(e)}>Discover</p>
                        {discover && (
                            <div className={Style.navbar_container_right_discover_box}>
                                <Discover />
                            </div>
                        )}

                        {/* help center menu */}
                        <div className={Style.navbar_container_right_help}>
                            <p onClick={(e) => openMenu(e)}>Help Center</p>
                            {helpCenter && (
                                <div className={Style.navbar_container_right_help_box}>
                                    <HelpCenter />
                                </div>
                            )}
                        </div>

                        {/* notification */}
                        <div className={Style.navbar_container_right_notification}>
                            <MdNotifications
                                className={Style.notification}
                                onClick={(e) => openNotification(e)}
                            />
                            {notification && <Notification />}
                        </div>

                        {/* button section */}
                        <div className={Style.navbar_container_right_button}>
                            <Button btnText="Create" />
                        </div>

                        {/* user profile */}
                        <div className={Style.navbar_container_right_profile_box}>
                            <div className={Style.navbar_container_right_profile}>
                                <Image
                                    src={images.user}
                                    alt="Profile1"
                                    width={40}
                                    height={40}
                                    onClick={() => openProfile()}
                                    className={Style.navbar_container_right_profile}
                                />

                                {profile && <Profile />}
                            </div>
                        </div>

                        {/* menu button */}
                        <div className={Style.navbar_container_right_menuButton}>
                            <CgMenuRight
                                className={Style.menuIcon}
                                onClick={() => openSideBar()}
                            />
                        </div>

                        {/* sidebar component */}
                        {sideBar && (
                            <div className={Style.SideBar}>
                                <SideBar setOpenSideMenu={setOpenSideMenu} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
