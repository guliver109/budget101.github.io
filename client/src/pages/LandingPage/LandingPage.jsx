import React from 'react';
// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import {  ThemeProvider } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
// import NavigationIcon from '@material-ui/icons/Navigation';

import BackgroundImage from '../images/ancient-antique.jpg';
import woodenBrown from '../images/grunge.jpg';
import budgetOnly from '../images/budgetRustic.png';
import backroundHover from '../images/backgroundBrown.jpg';
import coins from '../images/coins.jpg';


const styles = theme => ({
    mainContainer: {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    layout: {
        // backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    root: {
        flexGrow: 1,
    },
    mainFeaturedPost: {
        backgroundImage: `url(${woodenBrown})`,
        // backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        // backgroundImage: `url(${woodenBrown})`,
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    budgetImage: {
        backgroundImage: `url(${budgetOnly})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        width: '10%',
        heigth: '10%'
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
        backgroundImage: `url(${backroundHover})`,
        color: theme.palette.common.white,
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
        backgroundImage: `url(${coins})`,
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    dividerLine: {
        backgroundColor: theme.palette.common.white,
    },
    footer: {
        // borderTop: `1px solid ${theme.palette.grey[300]}`,
        marginTop: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 3,
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 3
        },
    },
    fab: {
        margin: theme.spacing.unit * 1,
    },
});

const sections = [
    'Economy',
    'Technology',
    'Business',
    'Politics',
    'Science',
];

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];


function Blog(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.mainContainer}>
                <div className={classes.layout}>
                    <Toolbar className={classes.toolbarMain}>
                        {/* <Button size="small">Subscribe</Button> */}
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}
                        >
                            Budget Helper
                        </Typography>
                        {/* <IconButton>
                        <SearchIcon />
                        </IconButton> */}
                        {/* <Button href="/login">
                            Login
                        </Button>
                        <Button href="/signup">
                            Sign Up
                        </Button> */}
                    </Toolbar>
                    <Toolbar variant="dense" className={classes.toolbarSecondary}>
                        {sections.map(section => (
                            <Typography color="inherit" noWrap key={section}>
                                {section}
                            </Typography>
                        ))}
                    </Toolbar>
                    <main>
                        {/* Main featured post */}
                        <Paper className={classes.mainFeaturedPost}>
                            <div className={classes.root}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <div className={classes.mainFeaturedPostContent}>
                                            <Typography component="h3" variant="h4" color="inherit" gutterBottom>
                                                Welcome to Budget Helper!!
                                            </Typography>
                                            <Typography variant="h5" color="inherit" paragraph>
                                                To use full potential of this app you will need to create account or, if you have account already please logg in below. Enjoy!!!
                                            </Typography>
                                            <Fab variant="extended" aria-label="Delete" href="/login" className={classes.fab}>
                                                {/* <NavigationIcon className={classes.extendedIcon} /> */}
                                                Login!
                                            </Fab>
                                            <Fab variant="extended" aria-label="Delete" href="/signup" className={classes.fab}>
                                                {/* <NavigationIcon className={classes.extendedIcon} /> */}
                                                Sign Up
                                            </Fab>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} className={classes.budgetImage}>
                                        {/* <div className={classes.budgetImage}>
                                        <Typography >
                                        </Typography>
                                        </div> */}
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                        {/* End main featured post */}
                        {/* Sub featured posts */}
                        <Grid container spacing={40} className={classes.cardGrid}>
                            {featuredPosts.map(post => (
                                <Grid item key={post.title} xs={12} md={6}>
                                    <Card className={classes.card}>
                                        <div className={classes.cardDetails}>
                                            <CardContent>
                                                <Typography component="h2" variant="h5" color="inherit">
                                                    {post.title}
                                                </Typography>
                                                <Typography variant="subtitle1" color="inherit">
                                                    {post.date}
                                                </Typography>
                                                <Typography variant="subtitle1" color="inherit" paragraph>
                                                    {post.description}
                                                </Typography>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Continue reading...
                                            </Typography>
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image=""
                                                title="Image title"
                                            />
                                        </Hidden>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        {/* End sub featured posts */}
                        <Grid container spacing={40} className={classes.mainGrid}>
                            {/* Main content */}
                            <Grid item xs={12} md={12}>
                                <Divider className={classes.dividerLine} />
                            </Grid>
                            {/* End main content */}
                            {/* Sidebar */}
                            {/* <Grid item xs={12} md={12}>
                                <Paper elevation={0} className={classes.sidebarAboutBox}>
                                    <Typography variant="h6" gutterBottom>
                                        About
                                </Typography>
                                    <Typography>
                                        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                                        amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                                </Typography>
                                </Paper>
                            </Grid> */}
                            {/* End sidebar */}
                        </Grid>
                    </main>
                    {/* Footer */}
                    <footer maxWidth="md" componen="footer" className={classes.footer}>
                        <Grid container spacing={4} justify="space-evenly">
                            {footers.map(footer => (
                                <Grid item xs={6} sm={3} key={footer.title}>
                                    <Typography variant="h6" color="textLight" gutterBottom>
                                        {footer.title}
                                    </Typography>
                                    <ul>
                                        {footer.description.map(item => (
                                            <li key={item}>
                                                <Link href="#" variant="subtitle1" color="textSecondary">
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Grid>
                            ))}
                        </Grid>
                    </footer>
                    {/* End footer */}
                </div>
            </div>
        </React.Fragment>
    );
}

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);