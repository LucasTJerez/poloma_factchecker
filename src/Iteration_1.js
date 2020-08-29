import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar'
import FactCheck from './FactCheck/FactCheck'
import Transcript from './Transcript'
import Button from '@material-ui/core/Button';
import { DummySentences2 } from './dummy/DummySentences2'
import Videojs from './video.js';
import FactCheckMobile from './FactCheck/FactCheckMobile'
import PopUp from './PopUp'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  frameStyle: {
    // width: 0.6*(window.innerWidth),
    // height: (322.8*(window.innerWidth))/956,
    width: "100%",
    height: (315 * (window.innerWidth)) / 956,
  },
  gridStyle: {
    paddingRight: "5vw",
    paddingLeft: "5vw",
  },
  factCheckStyle: {
    height: 'calc(30vh - 56px)'
  },
  gridRight: {
    paddingLeft: "2vw",
  },
  transcript: {
    width: 20,
  },
  frameStyle: {
    // width: 0.6*(window.innerWidth),
    // height: (322.8*(window.innerWidth))/956,
    width: "100%",
    height: { frameHeightPercentString },
    // pointerEvents: 'none',
  },
  divStyle: {
    zIndex: 1000
  }
});
const frameHeight = (323 * (window.innerWidth)) / 956;
const frameWidth = (frameHeight * 1.77695167)
const frameHeightPercent = frameHeight / window.innerHeight * 90
const frameHeightPercentString = frameHeightPercent + "%"
const Iteration_1 = (props) => {
  const { classes, ...other } = props;
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });
  const videoJsOptions = {
    // autoplay: falses,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: frameWidth,
    height: frameHeight,
    controls: false,
    sources: [
      {
        src: "/Video/factCheckVideo.mp4",
        // src: '//vjs.zencdn.net/v/oceans.mp4',

        type: 'video/mp4',
      },
    ],
  };
  let onMobile = false;
  function updateScrollHelper() {
    if (!onMobile) {
      var element = document.getElementById('transcriptScroll');
      let x = Math.round(element.scrollHeight - element.offsetHeight)
      let y = Math.round(element.scrollTop)
      if (y === x)
        return true
    }
  }
  function updateScroll() {
    if (!onMobile) {
      var element = document.getElementById('transcriptScroll');
      setTimeout(function () {
        element.scrollTop = element.scrollHeight
      }, 2)
    }
  }
  const updateFunction = () => {
    {
      if (props.start) {
        props.startUp(false);
        let sentences = DummySentences2();
        console.log(sentences)
        let count = 0
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          if (updateScrollHelper()) {
            props.sentences.push(sentences[count]);
            updateScroll();
          }
          else {
            props.sentences.push(sentences[count]);
          }
          setState(count++)
        }, 0)
        setTimeout(function () {
          
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 88000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 92000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 96000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 99000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 106000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 108000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 112000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 116000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 128000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 129000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 132000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 138000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 140000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 142000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 148000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 151000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 153000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 158000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 160000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 165000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 168000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 174000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 178000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 179000 - 82000)
          setTimeout(function () {
            if (updateScrollHelper()) {
              props.sentences.push(sentences[count]);
              updateScroll();
            }
            else {
              props.sentences.push(sentences[count]);
            }
            setState(count++)
          }, 186000 - 82000)
        }, 5000)
      }
    }
  }
  let starter = false
  const updateFunctionMobile = () => {
    let sentences = DummySentences2();
    props.sentences.push(sentences[2]);
    props.sentences.push(sentences[16]);
    props.sentences.push(sentences[17]);
    props.sentences.push(sentences[29]);
    props.sentences.push(sentences[38]);
  }

  const checkDevice = () => {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      onMobile = true;
      return (<div className={classes.root}>
        <NavBar />
        <PopUp />
        <Grid container spacing={0} className={classes.gridStyle}>
          <Grid item xs={12} >
            <FactCheckMobile className={classes.factCheckStyle} {...other} />
            {
              updateFunctionMobile()
            }
          </Grid>
        </Grid>
      </div>)
    }
    else {
      return (<div className={classes.root}>
        <NavBar />
        <PopUp />
        <Grid container spacing={0} className={classes.gridStyle}>
          <Grid item xs={8}>

            <iframe id="video" className={classes.frameStyle} width={frameWidth} height={frameHeight} src="https://www.youtube.com/embed/bDHSvc-1xIc?autoplay=1&controls=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Transcript className={classes.transcript} {...other} />
          </Grid>
          <Grid item xs={4} className={classes.gridRight}>
            <FactCheck className={classes.factCheckStyle} {...other} />
            {/* {console.log(state.checkedA)} */}
            {updateFunction()
            }
            {/* {document.getElementById("").scrollIntoView()} */}
          </Grid>
        </Grid>
      </div>)
    }
  }
  




  return (
    checkDevice()
  );
}
export default withStyles(styles)(Iteration_1)