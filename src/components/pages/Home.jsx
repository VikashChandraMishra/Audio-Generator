import { Link } from "react-router-dom";
import image from "../../assets/landing-img-right.jpg"
import customer1Logo from "../../assets/customer-1.png";
import customer2Logo from "../../assets/customer-2.png";
import customer3Logo from "../../assets/customer-3.png";
import customer4Logo from "../../assets/customer-4.jpg";

const Home = () => {
    return (
        <>
            <div className="px-12 py-10 flex flex-row justify-between">
                <div className="w-2/5">
                    <h1 className="text-6xl">Voice Magic: AI-Powered Generator</h1>

                    <div className="py-4 text-xl">Unleash AI Voice Wizardry for Seamless Communication and Creativity</div>

                    <div className="flex flex-row justify-start items-center font-normal">

                        <Link>
                            <span className="mr-4 py-2 px-6 rounded-3xl bg-slate-500 text-slate-50 text-sm">
                                Login
                            </span>
                        </Link>

                        <Link>
                            <span className="py-2 px-6 rounded-3xl bg-emerald-500 text-slate-50 text-sm">
                                Try It Now
                            </span>
                        </Link>

                    </div>

                    <div>
                        <h6 className="my-4 text-slate-500 font-semibold text-sm">USED BY</h6>

                        <div className="flex flex-row justify-between items-center">
                            <img src={customer1Logo} width="110px" alt="" />
                            <img src={customer2Logo} width="110px" alt="" />
                            <img src={customer3Logo} width="110px" alt="" />
                            <img src={customer4Logo} width="110px" alt="" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-center">
                    <img
                        src={image}
                        width="550px"
                        alt="" />
                </div>
            </div>
        </>
    )
}

export default Home;