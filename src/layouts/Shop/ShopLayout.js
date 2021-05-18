import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GenderFilter from "./Filter/GenderFilter";
import BrandFilter from "./Filter/BrandFilter";
import DiscountFilter from "./Filter/DiscountFilter";
import ItemContainer from "./Items/ItemContainer";

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



function ShopLayout() {
  const classes = useStyles()

  useEffect(()=>{
    return ()=>{
      //unmount

    }
  },[])

  return (
    <div className='shop-layout-page'>
      <h4 class={classes.shopYourFavTitle}>Shop your favourite</h4>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <GenderFilter />
          <br />
          <BrandFilter />
          <br />
          <DiscountFilter />
        </Grid>
        <Grid item xs={10}>
          <div>
            <ItemContainer />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ShopLayout