import logo from './logo.svg';
import TopBanner from "./component/TopBanner/TopBanner";
import Services from "./component/Services/Services";
import TopNavigation from "./component/TopNavigation/TopNavigation";


function App() {
  return (
    <div>
      <TopNavigation/>
      <TopBanner/>
        <Services/>

    </div>
  );
}

export default App;
