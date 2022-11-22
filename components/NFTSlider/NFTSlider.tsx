import React, { useState } from 'react';
import Style from './NFTSlider.module.scss';
import images from "../../styles/assets/images";

const NFTSlider = () => {

    const [idNumber, setIdNumber] = useState(1);

    const sliderData = [{
        id: 1,
        title: 'NFT Title 1',
        name: 'f1tch',
        collection: 'Collection Name',
        price: '0.1 ETH',
        like: 100,
        image: images.user,
        nftImage: images.nft1,
        time: {
            days: 27,
            hours: 10,
            minutes: 30,
            seconds: 15
        }
    }, {
        id: 2,
        title: 'NFT Title 2',
        name: 'f1tch',
        collection: 'Collection Name',
        price: '0.1 ETH',
        like: 100,
        image: images.user,
        nftImage: images.nft1,
        time: {
            days: 27,
            hours: 10,
            minutes: 30,
            seconds: 15
        }
    }, {
        id: 3,
        title: 'NFT Title 3',
        name: 'f1tch',
        collection: 'Collection Name',
        price: '0.1 ETH',
        like: 100,
        image: images.user,
        nftImage: images.nft1,
        time: {
            days: 27,
            hours: 10,
            minutes: 30,
            seconds: 15
        }
    }];

    return (
        <div>NFTSlider</div>
    )
}

export default NFTSlider;