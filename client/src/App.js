import appStyle from './styles/App.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Login from './pages/Login';

function App() {
  return (
    <div className={appStyle.App}>
      <Login />
    </div>
  );
}

export default App;
