import React, { useEffect, useState, useCallback } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import styles from './../ProductsStyles.css'


const useStyles = makeStyles(theme => ({

}));



function SelectSize(props) {
    const classes = useStyles()
    const { sizes } = props

    const [selectedSize, setSelectedSize] = useState(null)

    const handleSelectSize = useCallback((size)=>{
        setSelectedSize(size)
    },[selectedSize])

    return (<>
    <div>
        <h3 className="select-size-title">SELECT SIZE</h3>
        <div className="size-circle-container">
        {sizes.map(size=>{
            return <div 
                className={`size-circle ${selectedSize==size?'selected-class':'not-selected'} size-circle-key-${size}`} 
                onClick={()=>handleSelectSize(size)}
                style={{textAlign:'center'}}
                >
                    {size}
                </div>
        })}
        </div>
    </div >
    </>)
}

SelectSize.defaultProps = {
    sizes: [39, 40, 42, 44],
}

export default (SelectSize)