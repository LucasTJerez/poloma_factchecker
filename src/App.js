import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as Actions from './actions';
import Iteration_1 from './Iteration_1'

const styles = theme => ({
});

class App extends Component {

  componentDidMount() {
    
    this.props.startUp(true)
  }
 
  
  render() {
    const { classes, ...other } = this.props; // classes = this.props.classes

    return (
      <div className="App">
        <Iteration_1 {...other}/>
        {/* {this.state.date.toLocaleTimeString()} */}
        {/* {console.log(this.props.start)} */}



      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    sentences: state.sent.sentences, // this.props.view = view 
    start: state.sent.start,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSentences: (sentences) => dispatch(Actions.loadSentences(sentences)), // this.props.changeView(view)
    startUp: (start) => dispatch(Actions.startUp(start)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
