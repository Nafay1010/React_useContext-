import Navbar from './components/Navbar'
import Home from './components/Home'
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import HomeContextProvider from './context/HomeContext'

function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
        <Navbar />
        <HomeContextProvider>
          <Home />
        </HomeContextProvider>
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
