import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom'
import  Banner  from './../../components/Carousals/Banner'
import DealsOfTheDay from './DealsOfTheDay'
import TopBrands from './TopBrands'
import CategoriesToBag from './CategoriesToBag'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    pageOutline: {
        margin: '15px'
    },
    tshirtBanner: {
        width: '100%',
        maxWidth: '100%',
        '& :hover': {
            padding: '3%',
        },
    }
}));



function DashboardLayout(props) {
    const classes = useStyles()
    
    function goToTshirts() {
        props.history.push('/tshirts')
    }

    
    return (
        <div className='dashboard-layout-page'>
            <br />
            <Grid container spacing={2}>
               <Banner />
            </Grid>
            <br />
            <br />
            <div className={classes.pageOutline}>
                <Grid container spacing={2}>
                    <DealsOfTheDay />
                </Grid>
                
                <Grid container spacing={2}>
                    <TopBrands />
                </Grid>

                <Grid container spacing={2}>
                    <CategoriesToBag />
                </Grid>

                 {/* <Grid container spacing={2}>
                    Trending in Indian Wear
                </Grid>

                 <Grid container spacing={2}>
                    Trending in Westren Wear
                </Grid>

                 <Grid container spacing={2}>
                    Footer
                </Grid> */}
                <br />
                <br />
            </div>
        </div>
    )
}

export default withRouter(DashboardLayout)