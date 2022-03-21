import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from "./Components/Slider";

import Nav from "./Components/Nav/Nav";
import ContactUs from "./Components/Contact/ContactUs";
import Faq from "./Components/FAQ/Faq";
import AboutUs from "./Components/About/AboutUs";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import BreakFast from './Components/Menu/pages/Menu/BreakFast';
import Lunch from './Components/Menu/pages/Menu/Launch';
import Dinner from './Components/Menu/pages/Menu/Dinner';
import myStore from './Components/Menu/store/myStore'
import { Provider } from "react-redux";
import ShoppingList from './Components/Menu/pages/ShoppingList'
import MealDetails from "./Components/Menu/pages/Menu/MealDetail";
import AllMeals from "./Components/Menu/pages/Menu/AllMeals";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={myStore}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path= "/BreakFast"  component={BreakFast} />
          <Route exact path= "/Lunch"  component={Lunch} />
          <Route exact path= "/Dinner" component={Dinner} />
          <Route exact path= "/shoppinglist" component={ShoppingList} />
          <Route path= "/menudetails/:id" exact component={MealDetails} />
          <Route path ='/allMeals' exact component={AllMeals}/>

        </Switch>
        <Footer/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
