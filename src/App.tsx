 import BookingDetails from "./pages/BookingDetails"
 import PersonalDetails from "./pages/PersonalDetails"
 import Confirmation from "./pages/Confirmation"
 import ServiceDetails from "./pages/ServiceDetails"
 import Header from "./components/Header"
 import {BrowserRouter,Routes,Route} from "react-router-dom"

  const App= () => {
    return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<PersonalDetails />} />
          <Route path="/booking-Details" element={<BookingDetails />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/service-Details" element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    );
  }


export default App
