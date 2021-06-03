import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#333996',
        light: '#3C44b126'
      },
      secondary: {
        main: '#F83245',
        light: '#F83245'
      },
      background:{
        default:"#f4f5fd"
      }
    },
    shape:{
      borderRadius:'4px'
    },
    props:{
      MuiTextField:{
        variant:"outlined",
        InputLabelProps:{shrink: true}
      },
      MuiButton:{
        variant:"contained"
      }
    }
  })

export default theme;