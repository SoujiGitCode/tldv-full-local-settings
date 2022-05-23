import ReactPlayer from "react-player/youtube";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = ({chosenVideo}) =>{

    return(
        <div className="flex  flex-col flex-wrap  w-10/12 bg-blue-100 flex-wrap h-[80vh] mr-5">
            <div className="mx-auto text-gray-900 text-lg font-semibold h-[10%] relative top-[2%] tracking-wide"> Playing
                Now: {chosenVideo.tittle}</div>
            {chosenVideo !== '' ?
                <ReactPlayer url={chosenVideo.url} width={"100%"} height={"90%"} playing={true}
                             controls={true}/> :

                <div className="flex w-full text-center mt-10 h-[30%] justify-center  items-center">
                    <h1 className="animated infinite bounceIn delay-1s text-gray-900 sm:text-xl lg:text-3xl">
                        Play a Video <FontAwesomeIcon icon={faPlay} size={"lg"}/></h1>

                </div>

            }
        </div>
    )
}

export default VideoPlayer