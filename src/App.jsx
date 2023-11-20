import SideBar from "./components/SideBar.jsx";
import classes from "./modules/App.module.scss"
import YourInfo from "./components/YourInfo.jsx";
import {useState} from "react";
import SelectPlan from "./components/SelectPlan.jsx";
import AddOns from "./components/AddOns.jsx";
import Summary from "./components/Summary.jsx";

function App() {
    const [activeState, setActiveState] = useState(1)

    const nextPageHandler = () => {
        setActiveState(activeState + 1);
    }

  return (
    <div className={classes['form-wrapper']}>
      <SideBar activeState={activeState} />
        {activeState === 1 && <YourInfo onNext={nextPageHandler}/>}
        {activeState === 2 && <SelectPlan />}
        {activeState === 3 && <AddOns />}
        {activeState === 4 && <Summary />}
    </div>
  )
}

export default App
