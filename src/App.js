import logo from './logo.svg';
import TopBanner from "./component/TopBanner/TopBanner";
import Services from "./component/Services/Services";
import TopNavigation from "./component/TopNavigation/TopNavigation";
import Analysis from "./component/Analysis/Analysis";
import Summary from "./component/Summary/Summary";
import RecentProject from "./component/RecentProject/RecentProject";
import Courses from "./component/Courses/Courses";
import Video from "./component/Video/Video";
import ClientReview from "./component/ClientReview/ClientReview";
import Footer from "./component/Footer/Footer";


function App() {
  return (
    <div>
      <TopNavigation/>
      <TopBanner/>
        <Services/>
        <Analysis/>
        <Summary/>
        <RecentProject/>
        <Courses/>
        <Video/>
      <ClientReview/>
        <Footer/>

    </div>
  );
}

export default App;
