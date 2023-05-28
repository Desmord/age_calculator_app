import { useState } from 'react';

import Inputs from './Containers/Inputs/Inputs';
import Results from './Containers/Results/Results';
import SubmitPanel from './Containers/SubmitPanel/SubmitPanel';

import './App.scss';

const App = () => {
  const [day, setDay] = useState(``)
  const [month, setMonth] = useState(``);
  const [year, setYear] = useState(``);

  const [resultDays, setResultDays] = useState(``);
  const [resultMonths, setResultMonths] = useState(``);
  const [resultYears, setResultYears] = useState(``);

  const [dayError, setDayError] = useState(``);
  const [monthError, setMonthError] = useState(``);
  const [yearError, setYearError] = useState(``);
  // must be a validDay
  // must be in the past (year)
  // this field is reauired

  const updateResult = () => { console.log(`Odświerz wyniki`) }

  return (
    <div className='appContainer'>
      <Inputs
        day={day}
        setDay={setDay}
        month={month}
        setMonth={setMonth}
        year={year}
        setyear={setYear}
        dayError={dayError}
        monthError={monthError}
        yearError={yearError} />
      <SubmitPanel updateResult={updateResult} />
      {/* <Results
        days={resultDays}
        months={resultMonths}
        years={resultYears} /> */}
    </div>
  );
}

export default App;
