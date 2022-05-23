import { useLocation } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";



export default function Header({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;

    return (
        <nav className="bg-gray-700 md:ml-64 py-6 px-3 w-full">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <button className="text-white text-xl px-2"

                        onClick={() => setShowSidebar('left-0')}>
                        <FontAwesomeIcon icon={faBars} size={"lg"}/>
                    </button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >

                        <button className="text-white text-xl px-2"
                            onClick={() => setShowSidebar('-left-64')}>
                            <FontAwesomeIcon icon={faXmark} size={"lg"}/>
                        </button>

                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>

                </div>
            </div>
        </nav>
    );
}
