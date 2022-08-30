import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import { store } from './store';

import TickersTable from './components/TickersTable/TickersTable';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <Header />
          <TickersTable />
            <Footer />
        </div>
      </Provider>
  );
}

export default App;
