import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import { scrollSmoothtoTop } from './../../../util/util'
import { setOpenedProductData } from './../../../actions/product/productAction'
import { useSelector, useDispatch } from 'react-redux'
import ItemCard from "./ItemCard";

const itemData = [{
    title: 'Men Navy Blue & White Regular Fit Checked Casual Shirt',
    shortTitle: 'Regular Fit Checked Shirt',
    brand: 'Tommy Hilfiger',
    price: 2500,
    discountByPercentage: 20,
    discountByPrice: 200,
    currency: 'Rs.',
    defaultImage: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12354840/2020/11/10/de91a543-2710-47a2-9203-28a6e04763b81604995179181-Tommy-Hilfiger-Men-Green--White-Regular-Fit-Checked-Casual-S-1.jpg'
},
{
    title: 'Only Women Solid Top',
    shortTitle: 'Solid Top',
    brand: 'ONLY',
    price: 799,
    discountByPercentage: 20,
    discountByPrice: 200,
    currency: 'Rs.',
    defaultImage: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11291534/2020/1/17/7203f070-766f-4346-bd3a-a7bc9ddafa1a1579239591012-ONLY-Women-Tops-341579239589539-1.jpg'
},
{
    title: 'H&M Casual T-Shirt',
    shortTitle: 'Casual Fit T-Shirt',
    brand: 'H&M',
    price: 2800,
    discountByPercentage: 20,
    discountByPrice: 200,
    currency: 'Rs.',
    defaultImage: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8267997/2019/1/9/2aa11437-9107-4e02-86ca-d0d7ca2190e81547028324622-HERENOW-Men-White-Solid-Round-Neck-T-shirt-351547028323849-1.jpg'
},
{
    title: 'Women Yellow Solid Fit and Flare Dress',
    shortTitle: 'Solid Fit and Flare Dress',
    brand: 'ONLY',
    price: 1649,
    discountByPercentage: 20,
    discountByPrice: 200,
    currency: 'Rs.',
    defaultImage: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12630364/2020/11/3/b30ed856-7a96-42e2-8c03-6ebe9d3ee19c1604409454160-ONLY-Women-Dresses-7061604409453052-3.jpg'
}
]

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    itemContainer: {
        padding: 10
    },
    shopYourFavTitle: {
        textTransform: 'uppercase',
        color: '#3e4152',
        letterSpacing: '.15em',
        fontSize: '1.2em',
    },
    eachItemContainer: {
        padding: '8px'
    }
}));



function ItemContainer(props) {
    const classes = useStyles()
    const [items, setItems] = useState(itemData)

    const dispatch = useDispatch();


    useEffect(() => {
        setItems([...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items])
    }, [])

    function navigateToPage() {
        scrollSmoothtoTop()
        props.history.push('/shop/product')
    }

    function handleOpenItem(item) { 
        dispatch(setOpenedProductData(item))     
        navigateToPage()
    }

    return (
        <div className='shop-layout-page'>
            <div class={classes.itemContainer}>
                <Grid container spacing={3}>
                    {items && items.map((item, index) => {
                        return <>
                            <Grid name={"product-item-card"} item xs={6} md={3}>
                                <div class={classes.eachItemContainer} onClick={()=>handleOpenItem(item)}>
                                    <ItemCard
                                        defaultImage={item.defaultImage}
                                        shortTitle={item.shortTitle}
                                        brand={item.brand}
                                        price={item.price}
                                        discountByPercentage={item.discountByPercentage}
                                        discountByPrice={item.discountByPrice}
                                        currency={item.currency}
                                    />
                                </div>
                            </Grid>
                        </>
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default withRouter(ItemContainer)