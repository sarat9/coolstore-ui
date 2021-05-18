import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    dealsContainer: {
        margin: '0px 20px 0px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    dealImage: {
        height: 'auto',
        width: '100%'
    },
    textBannerTitle: {
        textTransform: 'uppercase',
        color: '#3e4152',
        letterSpacing: '.15em',
        fontSize: '1.8em',
    }
}));



function DealsOfTheDay(props) {
    const classes = useStyles()
    const { dealsList } = props

    return (
        <div className='deals-of-the-day-layout-page'>
            <Grid container spacing={2}>
                <div class="text-banner-container">
                    <h4 class={classes.textBannerTitle}>Deals Of The Day</h4>
                    <h4 class="text-banner-subtitle"></h4>
                </div>
                <Grid className={classes.dealsContainer} container spacing={4}>
                    {dealsList.map(deal=>{
                        return <Grid item xs={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <img className={classes.dealImage} src={deal.src} />
                                </Grid>
                            </Grid>
                        </Grid>
                    })}
                </Grid>

            </Grid>
        </div>
    )
}

DealsOfTheDay.defaultProps = {
    dealsList: [
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/4/ac54517b-d841-4b49-8a5d-a0df4bc169d51617557749316-Flat1000.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/4/c4e7b4ac-4d65-4c27-8df0-903ad69bb5541617531971438-Flat40.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/4/ac54517b-d841-4b49-8a5d-a0df4bc169d51617557749316-Flat1000.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/4/c4e7b4ac-4d65-4c27-8df0-903ad69bb5541617531971438-Flat40.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/4/ac54517b-d841-4b49-8a5d-a0df4bc169d51617557749316-Flat1000.jpg' },
    ]
}



export default DealsOfTheDay