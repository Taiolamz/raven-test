
import { Link } from "react-router-dom";
import { routesPath } from "../../utils/route-path";
import { IoHomeOutline } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";



const { EXCHANGE } = routesPath;

export default function PageNotFound() {
    return (
        <div className="flex min-h-screen text-white flex-col items-center justify-center bg-background text-foreground">
            <div className="container mx-auto flex max-w-[64rem] flex-col items-center px-4 py-16 text-center sm:py-32 md:px-8">
                <h1 className="mb-4 text-6xl font-bold sm:text-7xl md:text-8xl">404</h1>
                <h2 className="mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
                    Page Not Found
                </h2>
                <p className="mb-8 max-w-lg text-muted-foreground sm:text-lg">
                    Oops! The page you're looking for seems to have wandered off. It might
                    be exploring the digital wilderness or taking a well-deserved vacation
                    in cyberspace.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <button >
                        <Link to={EXCHANGE} className="flex gap-2 items-center">
                            <IoHomeOutline />
                            Go to Dashboard
                        </Link>
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="flex gap-2 items-center"
                    >
                        <FaLongArrowAltLeft />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
