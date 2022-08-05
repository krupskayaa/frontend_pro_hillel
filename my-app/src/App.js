import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Info from "./components/Info";


function App() {
  return (
    <div className = "Portfolio">
      <Header class = "header" title = "Portfolio"></Header>
      <Navigation class = "nav"></Navigation>
      <Info class="info"></Info>
    </div>
  );
}

export default App;
