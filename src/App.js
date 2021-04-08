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
        <Route path="/details" >
        <SurveyForm/>
        </Route>
        <Route path="/">
        <Home/>
</Route>
       </Switch>  
    </div>
 </Router> );

}

export default App;
