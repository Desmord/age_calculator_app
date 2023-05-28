import { useState } from 'react';
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from 'date-fns';

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

  const clearErrors = () => {
    setDayError(``)
    setMonthError(``)
    setYearError(``)
  }

  const clearResults = () => {
    setResultDays(``)
    setResultMonths(``)
    setResultYears(``)
  }

  const checkDayValue = (): boolean => {

    switch (true) {
      case day.length === 0:
        setDayError(`This field is required`)
        return false
      case isNaN(parseInt(day)):
        setDayError(`Must be a valid day`)
        return false
      case parseInt(day) > 31:
        setDayError(`Must be a valid day`)
        return false
      case parseInt(day) < 1:
        setDayError(`Must be a valid day`)
        return false
      default:
        return true;
    }

  }

  const checkMonthValue = (): boolean => {

    switch (true) {
      case month.length === 0:
        setMonthError(`This field is required`)
        return false
      case isNaN(parseInt(month)):
        setMonthError(`Must be a valid month`)
        return false
      case parseInt(month) > 12:
        setMonthError(`Must be a valid month`)
        return false
      case parseInt(month) < 1:
        setMonthError(`Must be a valid month`)
        return false
      default:
        return true;
    }

  }

  const checkYearValue = (): boolean => {

    switch (true) {
      case year.length === 0:
        setYearError(`This field is required`)
        return false
      case year.length !== 4:
        setYearError(`Must be a valid year`)
        return false
      case isNaN(parseInt(year)):
        setYearError(`Must be a valid year`)
        return false
      case parseInt(year) > new Date().getFullYear():
        setYearError(`Must be a valid year`)
        return false
      case parseInt(year) < 1900:
        setYearError(`Must be a valid year`)
        return false
      default:
        return true;
    }

  }

  const setAndDisplayResults = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    const yearsDifference = Math.abs(
      differenceInYears(new Date(parseInt(year), parseInt(month), parseInt(day)), new Date()));
    const monthsDifference = Math.abs(
      differenceInMonths(new Date(currentYear, parseInt(month), 1), new Date(currentYear, currentMonth, 1)));
    const daysDifference = Math.abs(
      differenceInDays(new Date(currentYear, currentMonth, parseInt(day)), new Date(currentYear, currentMonth, currentDay)))

    setResultYears(`${yearsDifference}`);
    setResultMonths(`${monthsDifference}`);
    setResultDays(`${daysDifference}`);
  }

  const updateResult = () => {
    clearErrors()
    clearResults()

    const isDayCorrect = checkDayValue();
    const isMonthCorrect = checkMonthValue();
    const isYearCorrect = checkYearValue();

    if (isDayCorrect && isMonthCorrect && isYearCorrect) setAndDisplayResults()

  }

  return (
    <div className='appContainer'>
      <Inputs
        day={day}
        setDay={setDay}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        dayError={dayError}
        monthError={monthError}
        yearError={yearError} />
      <SubmitPanel updateResult={updateResult} />
      <Results
        days={resultDays}
        months={resultMonths}
        years={resultYears} />
    </div>
  );
}

export default App;
