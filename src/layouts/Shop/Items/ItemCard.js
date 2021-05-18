import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect, useRef } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import useHoverEvent from "../../../hooks/useHoverEvent";

const useStyles = makeStyles({
    media: {
        height: 280,
        padding: 10,
        width: '100%',
        backgroundPosition: 'top'
    },
    itemBrand: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: 1,
        marginBottom: '6px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    itemShortDesc: {
        fontSize: '14px',
        fontFamily: 'system-ui',
        margin: '5px 0px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    itemPrice: {
        fontSize: '14px',
        fontWeight: 600,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    onTheTopWishlist: {
        position: 'absolute',
        background: 'white',
        width:'100%',
        height:'100%'
    }
});

function ItemCard(props) {
    const classes = useStyles();
    const hoverRef = useRef();
    const [hovered, setHovered] = useState(false)

    // useHoverEvent(hoverRef, () => setHovered(true), () => setHovered(false));
    
  
    const { title, shortTitle, brand, price, discountByPercentage, discountByPrice, currency, defaultImage } = props

    return (
        <div ref={hoverRef} className="item-class-info">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={defaultImage}
                        title={title}
                    />
                    <CardContent>
                        
                        <div>
                            <h3 className={classes.itemBrand}>{brand}</h3>
                            <p className={classes.itemShortDesc}>{shortTitle}</p>
                            <span className={classes.itemPrice}>{currency + price}</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}



export default ItemCard