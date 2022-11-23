import Navbar from './components/Navbar'
import Home from './components/Home'
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
        <Navbar />
        <Home />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
