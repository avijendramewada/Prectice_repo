
import Home from "./Home";
import SurveyForm from "./SurveyForm";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import FormSubmissionDetail from "./FormSubmissionDetail";
function App() {
  return (
      
    <div >
            <Router>
       <Switch> 
        <Route  path="/onform">
          <SurveyForm />
        </Route>
         <Route path="/detailpage">
         <FormSubmissionDetail/>
         </Route>
        {/* <Route path="/newpage" >
        <SurveyForm/>
        </Route> */}
        <Route path="/">
        <Home/>
</Route>
       </Switch>
       </Router>  
    </div>

  )
}

export default App;
