import { Link } from "react-router-dom";
import logo from "../../../../assets/ag-logo.jpg";
import { destopNavOptions, smallDeviceNavOptions } from "./NavbarOptions";
import { useState } from "react";

const Index = () => {

  const [showSmallDeviceNavOptions, setShowSmallDeviceNavOptions] = useState(false);

  const toggleNav = () => {
    if (showSmallDeviceNavOptions)
      setShowSmallDeviceNavOptions(false);
    else setShowSmallDeviceNavOptions(true);
  }

  return (

    <>
      <header className="py-4 px-12 flex flex-row justify-between items-center">

        <div className="w-1/4 flex flex-row justify-between items-center font-semibold">
          <Link to="/">
            <img src={logo} width="40px" alt="ag-logo" />
          </Link>
        </div>

        {
          window.screen.width > 755 ?
            destopNavOptions()
            :
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-8 h-6 bg-slate-50 cursor-pointer block ring-gray-300 hover:ring-8" data-bs-toggle="collapse" data-bs-target="me" onClick={toggleNav}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </>
        }

      </header>
      {
        window.screen.width < 755 && showSmallDeviceNavOptions ?
          smallDeviceNavOptions()
          :
          <></>

      }
    </>
  )
}

export default Index;