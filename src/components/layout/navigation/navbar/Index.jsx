import { Link } from "react-router-dom";
import logo from "../../../../assets/ag-logo.jpg";

const Index = () => {
  return (

    <header className="py-4 px-12 flex flex-row justify-between items-center">

      <div className="w-1/4 flex flex-row justify-between items-center font-semibold">
        <Link to="/">
          <img src={logo} width="40px" alt="ag-logo" />
        </Link>
      </div>

      <nav className="w-1/2 px-20 flex flex-row justify-between items-center font-semibold">

        <Link>Features</Link>
        <Link>About</Link>
        <Link>Pricing</Link>
        <Link>Integrations</Link>

      </nav>

      <div className="w-1/4 flex flex-row justify-center items-center font-normal">

        <Link to="/login">
          <span className="mx-2 py-2 px-4 rounded-3xl bg-slate-500 text-slate-50 text-sm">
            Login
          </span>
        </Link>

        <Link to="/try-now">
          <span className="py-2 px-4 rounded-3xl bg-emerald-500 text-slate-50 text-sm">
            Try Now
          </span>
        </Link>

      </div>

    </header>
  )
}

export default Index;