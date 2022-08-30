import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import { store } from './store';


import TickersTable from './components/TickersTable/TickersTable';
function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <TickersTable />
        </div>
      </Provider>
  );
}

export default App;
