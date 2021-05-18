import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
import { Parallax, Fade, AutoPlay } from "@egjs/flicking-plugins";
import Grid from '@material-ui/core/Grid';

const plugins = [new Fade(), new AutoPlay(2000, "NEXT")];



const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    bannerPanel: {
        width: '100%',
        height: '350px'
    },
    bannerImage: {
        width: '100%',
        height: '350px'
    }
}));



function Banner(props) {
    const classes = useStyles();
    const {bannerDataList} = props
    
    return (
        <>
            <div id="banner-flicking-class" style={{ width: '100%', height: '350px' }}>
                <Flicking
                    style={{ width: '100%', height: '350px' }}
                    // tag="div"
                    // viewportTag="div"
                    // cameraTag="div"
                    // onNeedPanel={(e) => { }}
                    // onMoveStart={(e) => { }}
                    // onMove={(e) => { }}
                    // onMoveEnd={(e) => { }}
                    // onHoldStart={(e) => { }}
                    // onHoldEnd={(e) => { }}
                    // onRestore={(e) => { }}
                    // onSelect={(e) => { }}
                    // onChange={(e) => { }}
                    // classPrefix="eg-flick"
                    // deceleration={0.0075}
                    // horizontal={true}
                    circular={true}
                    // infinite={true}
                    // infiniteThreshold={0}
                    // lastIndex={Infinity}
                    // threshold={40}
                    // duration={100}
                    // panelEffect={x => 1 - Math.pow(1 - x, 3)}
                    // defaultIndex={0}
                    // inputType={["touch", "mouse"]}
                    // thresholdAngle={45}
                    // bounce={10}
                    // autoResize={false}
                    // adaptive={false}
                    // zIndex={2000}
                    // bound={false}
                    // overflow={false}
                    // hanger={"50%"}
                    // anchor={"50%"}
                    gap={10}
                    plugins={plugins}
                    // moveType={{ type: "snap", count: 1 }}
                    collectStatistics={true}
                >
                    {bannerDataList&&bannerDataList.map(banner=>{
                        return <div className={classes.bannerPanel}>
                            <img className={classes.bannerImage} src={banner.src} />
                        </div>
                    })}
                                       
                </Flicking>
            </div>
        </>
    );
}

Banner.defaultProps = {
    bannerDataList:[
        // {src: 'https://naver.github.io/egjs-flicking/images/bg01.jpg'},
        // {src: 'https://naver.github.io/egjs-flicking/images/bg02.jpg'},
        // {src: 'https://naver.github.io/egjs-flicking/images/bg03.jpg'},
        {src: 'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/13/66f3cedb-f19d-4856-ae81-f715a3b1e6811618331402832-Kurtas_Desk_Banner--1-.jpg'},
        {src: 'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/4/27192fc0-747b-495a-b49b-15963f3fd3ae1617537128677-Fragrances_Desk.jpg'},
        {src: 'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/4/7ab2bdef-5673-4cf5-a308-61ca66f4bd871617537128691-AAY_Desk_Banner.jpg'},   
        {src: 'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/3/aa5e9ecb-b4ba-4f27-82be-c27e5985e7231617445678068-Main_Banners_Desktop1.jpg'},   
        {src: 'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/4/a2cf3ba3-c36b-441a-9c06-3ae76ae6e1801617539186693-cat-fest-dk-april.jpg'}, 
    ]
}


export default Banner

/**
 * 
 * Ref:
https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking
https://naver.github.io/egjs-flicking/
https://codesandbox.io/s/react-flicking-examples-rnqm8?file=/src/index.tsx:891-901
 * 
 */
