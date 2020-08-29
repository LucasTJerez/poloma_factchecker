const Timing = (state) => {

    
      const handleChange = name => event => {
        state.setState({ ...state, [name]: event.target.checked });
      };
      setTimeout(function(){
          handleChange('checkedA')


      },2000)





}

export default Timing