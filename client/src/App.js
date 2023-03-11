import appStyle from './styles/App.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <div className={appStyle.App}>
      <Registration  />
    </div>
  );
}

export default App;
