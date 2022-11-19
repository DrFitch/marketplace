import React from 'react'
import Link from 'next/link';

// internal import
import Style from './Discover.module.scss';

const Discover = () => {

    const discover = [{
        name: 'Collection',
        link: 'collection'
    }, {
        name: 'Search',
        link: 'search'
    }, {
        name: 'Author Profile',
        link: 'author-profile'
    }, {
        name: 'NFT Details',
        link: 'nft-details'
    }, {
        name: 'Account Settings',
        link: 'account-settings'
    }, {
        name: 'Connect Wallet',
        link: 'connect-wallet'
    }, {
        name: 'Collection',
        link: 'collection'
    }, {
        name: 'Blog',
        link: 'blog'
    }];

    return (
        <div>
            {discover.map((item, index) => (
                <div key={index} className={Style.discover}>
                    <Link href={{ pathname: `${item.link}` }}>
                        {item.link}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Discover