import ReactDOM from 'react-dom/client';
import './css/styles.css'
import { Provider } from 'react-redux'; 
import { store } from './app/store';
import { CellList, Navbar } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <CellList />
      </div>
    </Provider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
