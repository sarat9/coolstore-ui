import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch } from 'react-redux'

import './../ProductsStyles.css'
import SelectSize from "./SelectSize";

const useStyles = makeStyles(theme => ({

}));



function ProductLayout(props) {
    const classes = useStyles()
    const { details } = props


    return (<>
        {details && <div className='product-details-class'>
            <h1 className='product-brand'>{details.brand}</h1>
            <p className='product-title'>{details.title || ''}</p>
            <p className='product-reviews-box'>{' + 150 Reviews'}</p>

            <br />
            <hr class="dashed-divider" />
            <br />

            <p className='product-price'>{(details.currency || '') + (details.price || '')}</p>
            <p className='inclusive-of-all-taxes'>{'inclusive of all taxes'}</p>

            <div className='select-size-container'>
                <SelectSize />
            </div>
            
            <br />

            <div>
                <Button variant="contained" size="large" color="primary"
                    style={{
                        padding: '3% 10%',
                        margin: '10px',
                        backgroundColor: 'deeppink',
                        fontWeight: 600
                    }}
                    className={classes.margin}
                >
                    Add to bag
            </Button>
                <Button variant="outlined" size="large" color="primary"
                    style={{
                        padding: '3% 10%',
                        margin: '10px',
                        color: 'deeppink',
                        borderColor: 'deeppink',
                        fontColor: 'deeppink',
                        fontWeight: 600
                    }}
                    className={classes.margin}
                >
                    Wishlist
            </Button>
            </div>

        </div>}
    </>)
}


export default withRouter(ProductLayout)