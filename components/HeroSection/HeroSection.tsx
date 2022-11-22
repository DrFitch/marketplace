import React from 'react';
import './HeroSection.module.scss';
import Style from './HeroSection.module.scss';
import images from "../../styles/assets/images";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_sections}>
                <div className={Style.heroSection_left_section}>
                    <h1>Discover, collect and sell NFTs</h1>
                    <Typography variant="h1" component="h2">
                        Discover,<br /> collect and sell NFTs
                    </Typography>
                    <Typography>
                        Discover the most oustanding NFTs from the most talented artists and creators. Collect your favorite NFTs and sell them to other collectors.
                    </Typography>
                    <Button name='Start your search' variant="contained">
                        Start your search
                    </Button>
                </div>
                <div className={Style.heroSection_right_section}>
                    <Image src={images.petrolium} alt="Hero section" width={600} height={600} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;