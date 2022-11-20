import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";

// internal
import Style from "./Profile.module.scss";
import images from "../../../styles/assets/images";

const Profile = () => {
    return (
        <div className={Style.profile_account}>
            <Image
                src={images.user}
                alt="user profile"
                width={50}
                height={50}
                className={Style.profile_account_img} />

            <div className={Style.profile_account_info}>
                <p>f1tch</p>
                <small>0x2cb3032faace320</small>
            </div>

            <div className={Style.profile_account_menu}>
                <div className={Style.profile_account_menu_one}>
                    <div className={Style.profile_account_menu_item}>
                        <FaUserAlt />
                        <p>
                            <Link href={{ pathname: "/myprofile" }}>My profile</Link>
                        </p>
                    </div>
                    <div className={Style.profile_account_menu_item}>
                        <FaRegImage />
                        <p>
                            <Link href={{ pathname: "/my-item" }}>My Items</Link>
                        </p>
                    </div>
                    <div className={Style.profile_account_menu_item}>
                        <FaUserEdit />
                        <p>
                            <Link href={{ pathname: "/edit-profile" }}>Edit profile</Link>
                        </p>
                    </div>
                </div>

                <div className={Style.profile_menu_two}>
                    <div className={Style.profile_menu_one_item}>
                        <MdHelpCenter />
                        <p>
                            <Link href={{ pathname: "/help" }}>Help</Link>
                        </p>
                    </div>
                </div>
                <div className={Style.profile_menu_two}>
                    <div className={Style.profile_menu_one_item}>
                        <TbDownloadOff />
                        <p>
                            <Link href={{ pathname: "/disconnect" }}>Disconnect</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
