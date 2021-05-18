import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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



function TopBrands(props) {
    const classes = useStyles()
    const { brandList } = props

    return (
        <div className='top-brands-layout-page'>
            <Grid container spacing={2}>
                <div class="text-banner-container">
                    <h4 class={classes.textBannerTitle}>Biggest deals on Top Brands</h4>
                    <h4 class="text-banner-subtitle"></h4>
                </div>
                <Grid container spacing={4}>
                    {brandList.map(deal=>{
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

TopBrands.defaultProps = {
    brandList: [
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/0524cbd5-f034-4155-9e3b-336c4e530ee41605363272658-Home---Levis.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/d5c17859-f366-4a65-ab42-5a066254feaa1605363272474-Home---GAP.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg' },
        { src: 'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg' },
    ]
}



export default TopBrands