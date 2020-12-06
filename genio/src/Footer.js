import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1,
        alignItems:"center",
        backgroundColor:"#F7F9F9",
        height:300,
    },
    dividercolor:{
        backgroundColor:"grey",
        [theme.breakpoints.down('xs')]:{
            marginTop:8,
            height:10,
        }
    },
    links_grid:{
        marginTop:20,
    },
    links :{
        color:"black",
        marginLeft:10,
        marginRight:10,
        '&:hover':{
            color: "#2789E1",
        },
        [theme.breakpoints.down('xs')]:{
            margin:3
        }
    },
    social:{
        marginTop:6,
    }
}))

const Footer = () =>{
    const classes = useStyles();
    return(
        <div>
            <Grid container className = {classes.root} direction = {"column"}>
                <Grid item className = {classes.links_grid}>
                    <Grid container direction = {"row"}>
                        <Link component="button" variant="body2" className = {classes.links}>Blog</Link>
                        <Divider orientation="vertical" flexItem  classes = {{root:classes.dividercolor}}/>
                        <Link component="button" variant="body2" className = {classes.links}>Privacy Policy</Link>
                        <Divider orientation="vertical" flexItem classes = {{root:classes.dividercolor}}/>
                        <Link component="button" variant="body2" className = {classes.links}>Terms and Conditions</Link>
                        <Divider orientation="vertical" flexItem classes = {{root:classes.dividercolor}}/>
                        <Link component="button" variant="body2" className = {classes.links}>Site Map</Link>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography style ={{"fontWeight":"550","fontSize":"40px","color":"#2789E1","marginTop":"15px"}}>Genio</Typography>
                </Grid>
                
                <Grid item className = {classes.social}>
                    <hr></hr>
                    <Grid container direction = {'row'}>
                        <Link component="button" variant="body2" className = {classes.links}><FacebookIcon /></Link>
                        <Link component="button" variant="body2" className = {classes.links}><InstagramIcon /></Link>
                        <Link component="button" variant="body2" className = {classes.links}><LinkedInIcon /></Link>  
                    </Grid>
                    <hr></hr>
                </Grid>
                <Grid item>
                    <Link component="button" to = '#'><img src = "/assets/images/play_store_icon.png" style = {{"height":"70px" , "float":"right"}}></img></Link>
                </Grid>
                <Grid item>
                    <Grid container direction = {"row"}>
                        <Typography style ={{"fontWeight":"550","color":"#2789E1","marginTop":"2px","marginBottom":"2px"}}>Copyright </Typography>
                        <CopyrightIcon style = {{"color":"#2789E1","marginLeft":"3px","marginRight":"3px"}}/>
                        <Typography style ={{"fontWeight":"550","color":"#2789E1","marginTop":"2px","marginBottom":"2px"}}> Genio.app-2020</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default Footer;