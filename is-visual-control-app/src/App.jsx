import {Container, makeStyles} from '@material-ui/core';
import ControlComponent from './components/controlComponent/ControlComponent';
import DisplayComponent from './components/display-component/DisplayComponent';

// redux
import { Provider } from 'react-redux'
import store from './store';
import NavBarComponent from './components/navBar/NavBarComponent';

const useStyles = makeStyles({
  app: {
    marginTop: '10px',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <Provider store = {store}>
      <Container className = {classes.app}>
        <NavBarComponent />
        <DisplayComponent />
        <br />
        <ControlComponent />
      </Container>
    </Provider>
  );
}

export default App;
