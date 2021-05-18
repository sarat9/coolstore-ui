import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ItemContainer from "./../Shop/Items/ItemContainer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  shopYourFavTitle: {
    textTransform: 'uppercase',
    color: '#3e4152',
    letterSpacing: '.15em',
    fontSize: '1.2em',
  }
}));



function WishListLayout() {
  const classes = useStyles()

  useEffect(()=>{
    return ()=>{
      //unmount

    }
  },[])

  return (
    <div className='shop-layout-page'>
      <h4 class={classes.shopYourFavTitle}>Bag Your Wishlist</h4>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <ItemContainer />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default WishListLayout