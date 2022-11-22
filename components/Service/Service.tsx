import Grid from '@mui/material/Grid';
import React from 'react'
import Style from './Service.module.scss';
import Image from 'next/image';

import images from '../../styles/assets/images';
import Typography from '@mui/material/Typography';

const Service = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <div className={Style.service}>
            <div className={Style.service_image}>
              <Image src={images.user} alt="Service 1" width={100} height={100} />
            </div>
            <div className={Style.service_title}>
              <Typography variant="h5" component="h5">
                Filter & Discover
              </Typography>
            </div>
            <div className={Style.service_description}>
              <Typography variant="subtitle1" component="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas ipsam? Ex, dolorum hic! Beatae quam dignissimos suscipit reiciendis commodi magni consequuntur, aperiam tempore iste rerum atque, praesentium quisquam vitae!
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <div className={Style.service}>
            <div className={Style.service_image}>
              <Image src={images.user} alt="Service 1" width={100} height={100} />
            </div>
            <div className={Style.service_title}>
              <Typography variant="h5" component="h5">
                Filter & Discover
              </Typography>
            </div>
            <div className={Style.service_description}>
              <Typography variant="subtitle1" component="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas ipsam? Ex, dolorum hic! Beatae quam dignissimos suscipit reiciendis commodi magni consequuntur, aperiam tempore iste rerum atque, praesentium quisquam vitae!
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <div className={Style.service}>
            <div className={Style.service_image}>
              <Image src={images.user} alt="Service 1" width={100} height={100} />
            </div>
            <div className={Style.service_title}>
              <Typography variant="h5" component="h5">
                Filter & Discover
              </Typography>
            </div>
            <div className={Style.service_description}>
              <Typography variant="subtitle1" component="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas ipsam? Ex, dolorum hic! Beatae quam dignissimos suscipit reiciendis commodi magni consequuntur, aperiam tempore iste rerum atque, praesentium quisquam vitae!
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <div className={Style.service}>
            <div className={Style.service_image}>
              <Image src={images.user} alt="Service 1" width={100} height={100} />
            </div>
            <div className={Style.service_title}>
              <Typography variant="h5" component="h5">
                Filter & Discover
              </Typography>
            </div>
            <div className={Style.service_description}>
              <Typography variant="subtitle1" component="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas ipsam? Ex, dolorum hic! Beatae quam dignissimos suscipit reiciendis commodi magni consequuntur, aperiam tempore iste rerum atque, praesentium quisquam vitae!
              </Typography>
            </div>
          </div>
        </Grid>

      </Grid>
    </>
  )
}

export default Service;