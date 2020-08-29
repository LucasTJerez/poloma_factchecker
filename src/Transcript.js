import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar'
import { textAlign } from '@material-ui/system';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing.unit * (4, 0, 2),
    },
    h1Style: {
        fontSize: "1.2em",
        fontWeight: "450",
        float: "left",
        paddingLeft: 16,
        margin: 0,
        display: "inline-block"
    },
    h2Style: {
        fontSize: "1em",
        fontWeight: 450,
        float: "right",
        marginTop: 0,
        paddingRight: 16,
        color: "#606060",
        display: "inline-block"
    },
    highlight: {
        backgroundColor: '#fff2ac',
    },
    spacing: {
        marginTop: '20px',
    },
   

});


const Transcript = (props) => {
    const { classes, ...other } = props;
    const transcriptCreator = (sentences) => {
        let sentenceArray = [];
        let formattedSentenceArray = [];
        for (let i = 0; i < sentences.length; i++) {
            let sentence = sentences[i];
            if (!(i != 0 && sentences[i - 1].speaker === sentences[i].speaker)) {
                sentenceArray.push(sentence.speaker.toUpperCase() + ": ")
                if (sentence.contradiction)
                {
                    
                    sentenceArray.push(<mark className={classes.highlight}><span id={sentence.id}>{sentence.sentence}</span></mark>)
                    
                }
                else
                {
                    sentenceArray.push(<span id={sentence.id}>{sentence.sentence}</span>)
                }

            }
            else {
                if (sentence.contradiction)
                {
                    sentenceArray.push(<mark className={classes.highlight}><span id={sentence.id}>{sentence.sentence}</span></mark>)
                }
                else
                {
                    sentenceArray.push(<span id={sentence.id}>{sentence.sentence}</span>)
                }

            }

        }




        for (let i = 0; i < sentenceArray.length; i++) {
            let sentence = sentenceArray[i];
            {

                if (typeof sentence !== 'object' && sentence.charAt(sentence.length - 2) === ":")
                {
                if(i != 0)
                {
                    formattedSentenceArray.push(
                        <p >
                        </p>
                    )
                }
            }
                formattedSentenceArray.push(sentence)
            }
        }
        return formattedSentenceArray;
    }

    const checkSentence = (sentence) => {
        return <mark>sentence.senc</mark>
    }

    return (
        <div className={classes.root}>            
            <Grid container spacing={12}>
            
             <Grid item xs={12} style={{ height: "4vh" }}>
                    <h1 className={classes.h1Style}>
                        Watch Live: Robert Mueller Testifies Before Congress | NBC News
                        </h1>
                    <h2 className={classes.h2Style}>
                        120,783 watching now
                    </h2>


                </Grid>

                <Grid item xs={12} >
                    <div className={classes.demo}>
                                <Paper id="transcriptScroll" style={{ height: "16vh", overflow: 'auto' }}>
                                    <List dense={false}>
                                        <ListItem  >
                                            <ListItemText>
                                                {transcriptCreator(props.sentences)}
                                            </ListItemText>

                                        </ListItem>
                                    </List>
                                </Paper>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Transcript)
