import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import App from "../App";
import Inputs from '../Containers/Inputs/Inputs';

describe(`Trial tests group`, () => {

    test(`Trial test`, () => {
        render(<App />)
        const text = screen.getByText(`YEAR`);

        expect(text).toBeInTheDocument();
    })

    test(`GetByRole`, () => {
        render(<Inputs
            day={``}
            setDay={() => { }}
            month=''
            setMonth={() => { }}
            year=''
            setYear={() => { }}
            dayError=''
            monthError=''
            yearError=''
        />);
        const inputElement = screen.getAllByRole(`textbox`);

        expect(inputElement[0]).toBeInTheDocument();
    })

})

//  getBy..  //  queryBy..  //  findBy..  //
//  getAllBy..  //  queryAllBy..  // findAllBy..  //
//  getBy..-> Role (Accessible Rich Internet Applications[link,button,checkBox...{ można dodać własna role}]),
//            LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title, TestId


// Przykładowe Testy
// component sie renderuje
// renderuje z odpowiednimi propsami
// renderuje w zaleznosci od stanu
// reaguje z eventami
// ------------------------
// Czego nie testowac
// testowanie zachowania a nie jesgo implementacji
// kod trzeciej strony
// kod nie potrzebny z punktu widzenia urzytkownika np. nie testowac jakiejs funkcji do wyswieltania tylko to
//          czy cos sie wyswietliow na stronie



// jestjs.io / jest-dom github
//
// Jest Mathers
// for numbers
// string
// arrays and iterable
// exceptions




// Naming Conventions
// 1. .test.js
// 2. .spec.js
// 3. .js in__tests__folders --> __test__/testTrial.tsx