import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const styles = theme => ({
  pic: {
    height: 20,
    width: "auto",
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent"
    },
    padding: 1
  }
});

const Filter = props => {

  const {classes} = props;

  const [state, setState] = React.useState({
    checkedAll: true,
    checkedBullock: false,
    checkedButtigieg: false,
    checkedDelaney: false,
    checkedHickenlooper: false,
    checkedKlobuchar: false,
    checkedORourke: false,
    checkedRyan: false,
    checkedSanders: false,
    checkedWarren: false,
    checkedWilliamson: false,
  });

  function handleChangeHelper(name) {
    setState({
      ...state,
      ['checkedAll']: false,
      ['checkedBullock']: false,
      ['checkedButtigieg']: false,
      ['checkedDelaney']: false,
      ['checkedHickenlooper']: false,
      ['checkedKlobuchar']: false,
      ['checkedORourke']: false,
      ['checkedRyan']: false,
      ['checkedSanders']: false,
      ['checkedWarren']: false,
      ['checkedWilliamson']: false,
      [name]: true,
    })
  }

  const handleChange = name => event => {
    switch (name) {
      case 'checkedAll':
        if (!state.checkedAll)
          handleChangeHelper('checkedAll')
        break;



      case 'checkedBullock': //Bullock
        if (state.checkedBullock)
          handleChangeHelper('checkedAll')
        else
          handleChangeHelper('checkedBullock')
        break;

      case 'checkedButtigieg': //Buttigieg
        if (state.checkedButtigieg)
          handleChangeHelper('checkedAll')
        else
          handleChangeHelper('checkedButtigieg')
        break;

      case 'checkedDelaney': //Delaney
        if (state.checkedDelaney)
          handleChangeHelper('checkedAll')
        else
          handleChangeHelper('checkedDelaney')
        break;


      case 'checkedHickenlooper': //Hickenlooper
        if (state.checkedHickenlooper)
          handleChangeHelper('checkedAll')
        else
          handleChangeHelper('checkedHickenlooper')
        break;

      case 'checkedKlobuchar': //Klobuchar
        if (state.checkedKlobuchar)
          handleChangeHelper('checkedAll')
        else
          handleChangeHelper('checkedKlobuchar')
        break;

      case 'checkedORourke': //ORourke
        if (state.checkedORourke)
          handleChangeHelper('checkedAll')
        else
          handleChangeHelper('checkedORourke')
        break;

      case 'checkedRyan': //Ryan
        if (state.checkedRyan)
          handleChangeHelper('checkedAll')
        else
          handleChangeHelper('checkedRyan')
        break;

      case 'checkedSanders': //Sanders
        if (state.checkedSanders)
          handleChangeHelper('checkedAll')
        else
          handleChangeHelper('checkedSanders')
        break;

      case 'checkedWarren': //Warren
        if (state.checkedWarren)
          handleChangeHelper('checkedAll')
        else 
          handleChangeHelper('checkedWarren')
        break;

      case 'checkedWilliamson': //Williamson
        if (state.checkedWilliamson)
          handleChangeHelper('checkedAll')
        else
          handleChangeHelper('checkedWilliamson')
        break;

      default:
        console.log("this should never print")
    }



  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
          className={classes.button} 
          disableRipple = 'true'
          color = 'transparent'
          icon={<img src={require("./FilterImages/all_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/all_clicked.png")} className={classes.pic} />}
            checked={state.checkedAll}
            onChange={handleChange('checkedAll')}
          />
        }
      />

      <FormControlLabel
      
        control={
          <Checkbox
          className={classes.button} 
          disableRipple = 'true'
          color = 'transparent'
          icon={<img src={require("./FilterImages/bullock_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/bullock_clicked.png")} className={classes.pic} />} 
          onChange={handleChange('checkedBullock')} checked={state.checkedBullock} />
        }
        
        className={classes.button} 
      />
      <FormControlLabel
        control={
          <Checkbox 
          className={classes.button} 
          disableRipple = 'true'
          color = 'transparent'
          icon={<img src={require("./FilterImages/buttigieg_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/buttigieg_clicked.png")} className={classes.pic} />} 
          
          checked={state.checkedButtigieg} onChange={handleChange('checkedButtigieg')} checked={state.checkedButtigieg} />
        }
      />
      <FormControlLabel
        control={
          <Checkbox 
          className={classes.button}
          disableRipple = 'true'
          color = 'transparent' 
          icon={<img src={require("./FilterImages/delaney_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/delaney_clicked.png")} className={classes.pic} />} 
          checked={state.checkedDelaney} onChange={handleChange('checkedDelaney')} checked={state.checkedDelaney} />
        }
      />
      <FormControlLabel
        control={
          <Checkbox 
          className={classes.button} 
          disableRipple = 'true'
          color = 'transparent'
          icon={<img src={require("./FilterImages/hickenlooper_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/hickenlooper_clicked.png")} className={classes.pic} />} 
          checked={state.checkedHickenlooper} onChange={handleChange('checkedHickenlooper')} checked={state.checkedHickenlooper} />
        }
      />
      <FormControlLabel
        control={
          <Checkbox 
          className={classes.button} 
          disableRipple = 'true'
          color = 'transparent'
          icon={<img src={require("./FilterImages/klobuchar_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/klobuchar_clicked.png")} className={classes.pic} />} 
          checked={state.checkedKlobuchar} onChange={handleChange('checkedKlobuchar')} checked={state.checkedKlobuchar} />
        }
      />
      <FormControlLabel
        control={
          <Checkbox 
          className={classes.button} 
          disableRipple = 'true'
          color = 'transparent'
          icon={<img src={require("./FilterImages/orourke_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/orourke_clicked.png")} className={classes.pic} />} 
          checked={state.checkedORourke} onChange={handleChange('checkedORourke')} checked={state.checkedORourke} />
        }
      />
      <FormControlLabel
        control={
          <Checkbox 
          className={classes.button}
          disableRipple = 'true'
          color = 'transparent' 
          icon={<img src={require("./FilterImages/ryan_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/ryan_clicked.png")} className={classes.pic} />} 
          checked={state.checkedRyan} onChange={handleChange('checkedRyan')} checked={state.checkedRyan} />
        }
      />
      <FormControlLabel
        control={
          <Checkbox 
          className={classes.button}
          disableRipple = 'true'
          color = 'transparent' 
          icon={<img src={require("./FilterImages/sanders_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/sanders_clicked.png")} className={classes.pic} />} 
          checked={state.checkedSanders} onChange={handleChange('checkedSanders')} checked={state.checkedSanders} />
        }
      />
      <FormControlLabel
        control={
          <Checkbox
          className={classes.button}
          disableRipple = 'true'
          color = 'transparent'  
          icon={<img src={require("./FilterImages/warren_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/warren_clicked.png")} className={classes.pic} />} 
          checked={state.checkedWarren} onChange={handleChange('checkedWarren')} checked={state.checkedWarren} />
        }
      />
      <FormControlLabel
        control={
          <Checkbox 
          className={classes.button} 
          disableRipple = 'true'
          color = 'transparent'
          icon={<img src={require("./FilterImages/williamson_unclicked.png")} className={classes.pic} />}
          checkedIcon={<img src={require("./FilterImages/williamson_clicked.png")} className={classes.pic} />} 
          checked={state.checkedWilliamson} onChange={handleChange('checkedWilliamson')} checked={state.checkedWilliamson} />
        }
      />




    </FormGroup>
  );
}

export default withStyles(styles)(Filter)