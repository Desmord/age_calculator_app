import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import App from "../App";
import Inputs from '../Containers/Inputs/Inputs';

describe(`Trial tests group`, () => {

    test(`Trial test`, () => {
        render(<App />)
        const text = screen.getByText(`YEAR`);

        expect(text).toBeInTheDocument();
    })

    test(`GetByRole`, async () => {

        user.setup();

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
        const inputElement = screen.getAllByRole(`textbox`); // moze byc regex

        expect(inputElement[0]).toBeInTheDocument();

        await user.click(inputEmelent);

        const inputElementPoClikniecu = screen.getAllByRole(`textbox`); // moze byc regex
        expect(co co zmienilo sie po klikniecu);

    })

})



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





//  getBy..  //  queryBy..  //  findBy..  //
//  getAllBy..  //  queryAllBy..  // findAllBy..  //
//  getBy..-> Role (Accessible Rich Internet Applications[link,button,checkBox...{ można dodać własna role}]),
//     |       LabelText,
//     |       PlaceHolderText,
//     |       Text,
//     |       DisplayValue,
//     |       AltText,
//     |       Title, -> cos co pojawia sie gdy najezdzasz myszka
//     |/      TestId -> data-testid="id do testu"


// query -> zwraca node query albo null jesli nie znajdzie ale nie wyrzuci bład. Przydatne w sytulacjach w ktorych
//          spodziewaly sie ze elemetu nie bedzie.


// find -> Do testow elemtow async. Zwraca obietnice ktora jest wykonywana gdy znajdzie element
//         'await screen.findBY(...{timeout:3000})



// Biblioteka  'uesr-event' (jest instalowany domyślnie). Instnieje fireEvents z RTL ale nie jest tak dobry.
// click()
// dblClick()
// tripleClick()
// hover
// unhover

// type(element,`cos`) -> toHaveValue
// tab                 -> toHaveFocus
// keyboard(`opcje`)

// clear
// selectOptions/deselectOptions
// uplaod 
// copy
// cut
// paste

// pointer({keys:`[MouseLeft]`}) - wiecej opcjie w dokumentaci ( przy opuszczaniu przycisu itp.)







// screen.debug() ->  pokazuje gdzie w html wystepuje bład



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