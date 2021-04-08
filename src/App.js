
import Home from "./Home";
import SurveyForm from "./SurveyForm";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import FormSubmissionDetail from "./FormSubmissionDetail";
function App() {
  return (
      <Router>
    <div >
       <Switch> 
        <Route  path="/onform">
          <SurveyForm />
        </Route>
         <Route path="/formDetails">
         <FormSubmissionDetail/>
         </Route>
        {/* </Route>

        <Route path="/details">
        </Route> */}
        {/*
        <Elements stripe={promise}>
           <Payment/>
        </Elements>
</Route>
        <Route path="/">
        <Header />
        <Home/>
</Route>*/}<Route path="/">
       
        <Home/>
</Route>
       </Switch>  
    </div>
 </Router> );

}

export default App;
