import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';


import classes from './App.module.css';
import SideNav from '../components/layouts/SideNav';
import Header from '../components/layouts/Header';
import theme from '../config/materialTheme';
import ManageEmployee from '../components/pages/Employee/ManageEmployee';


function App() {
  console.log('css', classes)
  return (
    <ThemeProvider theme={theme}>
      <SideNav />
      <div className={classes.main}>
        <Header></Header>
        <ManageEmployee />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
