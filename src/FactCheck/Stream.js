import React from 'react';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/styles'


const theme = createMuiTheme({
    palette: {
        primary: { main: '#ea513f' },
        secondary: { main: '#11cb5f' }

    }


})

const styles = theme => ({
    root: {
        width: '100%',
        // backgroundColor: theme.palette.background.paper,

    },
    highlight: {
        // display: 'inline',
        backgroundColor: '#fff2ac',
        // backgroundImage: 'linear-gradient(to right, #ffe359 0%, #fff2ac 100%)',
    },
    pic: {
        height: 80,
        width: "auto",
    },
    pic2: {
        height: 90,
        width: "auto",
        float: "bottom"
    },
    linkStyle: {
        cursor: "pointer"
    },
    linkStyle2: {
        textDecorationLine: 'none',
        color: "blue"
    },
    spacing: {
        marginTop: '20px',
    },
    dividerStyle: {
        marginLeft: 15,
        marginRight: 15
    },
    confidenceBar: {
        width: '90%',
        height: '80%',
        top: 1,
        backgroundColor: "white",


        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'white',

        boxShadow: "0 0 0 1px #ea513f"
    },
    bolded: {
        color: 'black',


    },
    falseSentenceStyle: {
        fontSize: ".9rem",
        lineHeight: "1.5rem",
        verticalAlign: "middle"
    },
    gridStyle: {
        marginBottom: 5
    },
    gridStyle2: {
        marginBottom: 25
    },
    linearProgressStyle: {
        marginBottom: 5
    },
    trueSentenceStyle: {
        fontSize: "0.9rem",
    }


});

const Stream = (props) => {

    const { classes } = props // classes = props.classes
    const streamSentences = []
    const streamedSentences = (sentences) => {


        for (let i = sentences.length - 1; i >= 0; i--) {
            if (sentences[i].contradiction) {
                streamSentences.push(sentences[i])

            }

        }
    }

    const sentences = [

        {
            speaker: "bullock",
            falseSentence: "The reason that they are separating these little children from their families is that they are using section 1325 of that Act which criminalizes coming across the border to incarcerate the pr—the parents and then separate them.",
            trueSentence: "Section 1325 is the part of the United States Code that criminalizes illegal entry into the country as a misdemeanor, punishable by imprisonment or fines.",
            confidenceLevel: 40,
            link: "",
            faceSource: <img src={require("./StreamImages/bullock.png")} className={classes.pic} />
        },
    ]
    const getFaceSource = (speaker) => {
        if (speaker === 'booker') {
            return <img src={require("./StreamImages/booker.png")} className={classes.pic} />
        }
        if (speaker === 'ryan') {
            return <img src={require("./StreamImages/ryan.png")} className={classes.pic} />
        }
        if (speaker === 'trump') {
            return <img src={require("./StreamImages/trump.png")} className={classes.pic} />
        }
        if (speaker === 'rubio') {
            return <img src={require("./StreamImages/rubio.png")} className={classes.pic} />
        }
    }

    const getConfidenceString = (confidenceLevel) => {
        if (confidenceLevel >= 85) {
            return '\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ "False"
        }
        else if (confidenceLevel >= 70) {
            return "Likely False"
        }
    }
    
    const getFalseSentence = (sentence) => {
        if(sentence.id == 16)
            return <b className={classes.falseSentenceStyle} onClick={() => { document.getElementById(sentence.id).scrollIntoView() }} ><i>"{sentence.sentence.substring(0, sentence.sentence.length - 1)}"</i></b>
        else if (sentence.id == 18)
            return <b className={classes.falseSentenceStyle} onClick={() => { document.getElementById(sentence.id).scrollIntoView() }} ><i>"{sentence.sentence.substring(1, sentence.sentence.length)}"</i></b>
        else
            return <b className={classes.falseSentenceStyle} onClick={() => { document.getElementById(sentence.id).scrollIntoView() }} ><i>"{sentence.sentence}"</i></b>
        
    }

    const functionForSentences = () => {
        let sentenceString = [];
        streamedSentences(props.sentences);


        for (let i = 0; i < streamSentences.length; i++) {
            let sentence = streamSentences[i]
            // setTimeout(function(){
            sentenceString.push(
                <div>
                    <ListItem alignItems="flex-start" >


                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Grid container spacing={20} className={classes.gridStyle}>
                                        <Grid item xs={4} >
                                            {getFaceSource(sentence.speaker)}
                                        </Grid>
                                        <Grid item xs={8} >
                                            {getFalseSentence(sentence)}
                                            
                                        </Grid>
                                    </Grid>




                                </React.Fragment>
                            }
                            secondary={
                                <React.Fragment>

                                    <div className={classes.root}>

                                        <br />
                                        <Grid container spacing={12} className={classes.gridStyle2}>

                                            <Grid item xs={3}  >
                                                <b className={classes.bolded}> {getConfidenceString(sentence.confidenceLevel)}</b>


                                            </Grid>
                                            <Grid item xs={8} >

                                                <ThemeProvider theme={theme} >
                                                    <LinearProgress color="primary" variant="determinate" value={sentence.confidenceLevel} className={classes.confidenceBar} />
                                                </ThemeProvider>

                                            </Grid>
                                            <Grid item xs={1} >
                                                <b className={classes.bolded}>{sentence.confidenceLevel}%</b>

                                            </Grid>
                                            <Grid item xs={12}>

                                            </Grid>

                                        </Grid>
                                        Reference: <a href={sentence.source} target="_blank">{sentence.sourceTitle}</a>


                                    </div>
                                    <Typography
                                        // component="span"
                                        variant="body1"
                                        // className={classes.inline}
                                        color="textPrimary"
                                        className={classes.trueSentenceStyle}   >
                                        {sentence.sentenceBefore}
                                        <b>{sentence.trueSentence}</b>
                                        {sentence.sentenceAfter}
                                    </Typography>



                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" className={classes.dividerStyle}/>
                </div>
            )

            // }, 100)

        }
        return sentenceString;

    }

    return (
        <List className={classes.root}>
            {functionForSentences()}
        </List>
    );
}











export default withStyles(styles)(Stream)
