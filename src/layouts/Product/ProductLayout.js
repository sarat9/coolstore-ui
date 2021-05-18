import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'

import Magnify from '../../components/Magnifier/Magnify'
import useDialog from "./../../hooks/useDialog";
import ProductZoomer from '../../components/Dialogs/ProductZoomer'
import { useSelector, useDispatch } from 'react-redux'
import ProductDetails from './Details/ProductDetails';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  shopYourFavTitle: {
    textTransform: 'uppercase',
    color: '#3e4152',
    letterSpacing: '.15em',
    fontSize: '1.2em',
  },
  productItemImage: {
    width: '100%',
    height: '100%',
    padding: '1%',
    '&:hover': {
      transform: 'scale(1.04)'
    }
  },
  productItemImageContainerDiv: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  productItemImageContainer: {
    top: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    backgroundOrigin: 'border-box',
    backgroundSize: 'cover'
  }
}));



function ProductLayout(props) {
  const classes = useStyles()

  const { productBrand, productImages } = props
  const [zoomOpen, handleZoomOpen, handleZoomClose] = useDialog()

  const openedProduct = useSelector(state => state.product.openedProductData)

  useEffect(()=>{
    console.log('openedProduct',openedProduct)
    if(openedProduct){
      
    }else{
      props.history.push('/shop')
    }
  },[openedProduct])


  return (
    <div className='shop-layout-page'>
      <h4 class={classes.shopYourFavTitle}>Shop your favourite</h4>
      <div style={{ width: '250px' }}>

      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            {productImages && productImages.map((image, index) => <Grid item md={6}>
              <img className={classes.productItemImage} src={image.src} onClick={handleZoomOpen} />
            </Grid>)}
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <ProductDetails 
              details={openedProduct}
            />
          </div>
        </Grid>
      </Grid>

      {zoomOpen && <>
        <ProductZoomer
          open={zoomOpen}
          handleClose={handleZoomClose}
          title={productBrand}
        />
      </>}
    </div>
  )
}

ProductLayout.defaultProps = {
  productBrand: 'Product Brand',
  sizes: [39, 40, 42, 44],
  productImages: [{
    src: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11780968/2020/4/3/11591b03-97f1-4907-b735-906984c4bcd61585905051096HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt1.jpg'
  }, {
    src: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg'
  }, {
    src: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg'
  }, {
    src: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg'
  }, {
    src: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg'
  }, {
    src: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg'
  }
  ]
}

export default withRouter(ProductLayout)