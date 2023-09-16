import { Link } from "react-router-dom"

export const destopNavOptions = () => <>
    <nav className="w-1/2 md:px-10 flex flex-row justify-between items-center font-semibold">

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
</>

export const smallDeviceNavOptions = () => <>
    <nav className="w-full flex flex-col justify-between font-semibold pb-4">

        <Link className="bg-white text-red-500 px-10 pt-2">Features</Link>
        <Link className="bg-white text-red-500 px-10">About</Link>
        <Link className="bg-white text-red-500 px-10">Pricing</Link>
        <Link className="bg-white text-red-500 px-10">Integrations</Link>
        <Link className="bg-white text-red-500 px-10" to="/login">
            Login
        </Link>
        <Link className="bg-white text-red-500 px-10 pb-2" to="/try-now">
            Try Now
        </Link>
    </nav>
</>