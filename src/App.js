import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home";
import {ContactUs} from "./Components/ContactUs";
import {BookTickets} from "./Components/BookTickets";
import {Packages} from "./Components/Packages";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/contact-us'} element={<ContactUs/>}/>
                    <Route path={'/ticket-booking'} element={<BookTickets/>}/>
                    <Route path={'/packages'} element={<Packages/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
