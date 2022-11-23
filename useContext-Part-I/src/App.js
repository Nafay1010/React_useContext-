import Navbar from './components/Navbar'
import Home from './components/Home'
import ThemeContextProvider from './context/ThemeContext';
function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
        <Navbar />
        <Home />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
