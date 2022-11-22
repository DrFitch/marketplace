import React, { useState } from 'react';
import Image from 'next/image';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

// internal
import Style from './Notification.module.scss';
import images from '../../../styles/assets/images';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';

const Notification = () => {

    // <NotificationsNoneIcon />
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Tooltip title="Open notifications">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} color={"inherit"}>
                    <NotificationsNoneIcon />
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
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCut fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Cut</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘X
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCopy fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Copy</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘C
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentPaste fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Paste</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘V
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Cloud fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
        </>

        // <div className={Style.notification}>
        //     <p>Notification</p>
        //     <div className={Style.notification_box}>
        //         <div className={Style.notification_box_img}>
        //             <Image className={Style.notification_box_img} src={images.user} alt="profile image" width={50} height={50} />
        //         </div>
        //         <div className={Style.notification_box_info}>
        //             <h4>Shoaib Akhter</h4>
        //             <p>Measure action your user...</p>
        //             <small>3 minutes ago</small>
        //         </div>
        //         <span className={Style.notification_box_new}></span>
        //     </div>
        // </div>
    )
}

export default Notification