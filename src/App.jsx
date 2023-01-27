import { GetMonth } from './components/log'
import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { Month } from "./components/month/month";
import classes from './styles.module.scss'
import { SmallCalendar } from './components/SmallCalendar';
import { CurrentDate } from './components/CurrentDate';
import { GlContext } from './Global/Context';
import { Event } from './components/Event'; 
import { Aside } from './components/Aside';

function App() {
  const [currenMonth, setCurrentMonth] = useState(GetMonth());
  const { month, showEventModal } = useContext(GlContext);

  useEffect(() => {
    setCurrentMonth(GetMonth(month));
  }, [month]);

  return (
    <>
    {showEventModal &&<Event/>}
      <div className={classes.box}>
        <div className={classes.title}>
          <CurrentDate />
          <SmallCalendar />
        </div>
        <div className={classes.top}>
          <Aside/>
          <Month month={currenMonth} />
        </div>
      </div>
    </>
  );
}
export default App;
