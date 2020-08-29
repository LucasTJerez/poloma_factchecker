import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import Filter from './Filter'
import Stream from './Stream'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';




const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        position: 'fixed',
        paddingRight: "5vw",
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing.unit * (4, 0, 2),
    },
});


const FactCheck = (props) => {
    const {  classes, ...other } = props;
    const [] = React.useState(false);
    const [secondary] = React.useState(false);
    const loadup = () => {
        return 
        
    }
   


    return (
        <div className={classes.root}>
        
                    <Paper style={{height: "89.7vh", overflow: 'auto', }}>
                        <List dense={false}>
                            <ListItem style={{width: "26.3vw"}} >
                                {<Stream {...other}/>}
                            </ListItem>
                         </List>
                  </Paper>
           
        </div>
    );
}

export default withStyles(styles)(FactCheck)
