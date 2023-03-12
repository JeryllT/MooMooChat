import appStyle from './styles/App.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Chat from './pages/Chat';

function App() {
  return (
    <div className={appStyle.App}>
      <Chat  />
    </div>
  );
}

export default App;
