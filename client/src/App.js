import appStyle from './styles/App.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import Registration from './pages/Registration';
// import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className={appStyle.App}>
      <Home  />
    </div>
  );
}

export default App;
