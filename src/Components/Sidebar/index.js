import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPlus, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const Sidebar= () => {

    return (
        <div className={"h-screen top-0 left-0 h-full w-24 m-0 flex flex-col bg-gray-900 text-white "}>

            <div className={"text-center text-white text-xl  my-5 mx-8"}>
                tl;dv
            </div>
            <div className={"sidebar-icon group"}>
                <FontAwesomeIcon icon={faPlay} size={"lg"}/>
                <span className={"sidebar-link-name group-hover:scale-100"}>Play &#10148;</span>
            </div>

            <div className={"sidebar-icon group"}>
                <FontAwesomeIcon icon={faPlus} size={"lg"}/>
                <span className={"sidebar-link-name group-hover:scale-100"}>Add &#10009;</span>
            </div>

            <div className={"sidebar-icon group"}>
                <FontAwesomeIcon icon={faWandMagicSparkles} size={"lg"}/>
                <span className={"sidebar-link-name group-hover:scale-100"}>Edit &#9998;</span>
            </div>

            <p className={"text-white absolute bottom-0"}>lorem</p>
        </div>
    )
}

export default Sidebar