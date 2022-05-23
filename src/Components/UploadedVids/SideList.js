import defaultThumbnail from "../../Assets/Images/no-img.webp"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay} from "@fortawesome/free-solid-svg-icons"


const SideList = ({video, setChosenVideo, chosenVideo}) =>{

    return (
            <div className=" relative flex h-16  md:h-32
                        bg-blue-100 grid grid-cols-1 flex ">
                <div className=" h-16 md:h-32  flex content-center justify-center px-2 py-3 group">
                    <img src={video?.thumbnail !== "" ? video?.thumbnail : defaultThumbnail}
                         alt=""
                         className=" max-h-full"/>

                    <button data-testid="play-button" className={`hidden group-hover:block absolute mx-auto text-3xl text-blue-900
											flex w-full h-full top-0 hover:text-blue-300 
											${video?.url === chosenVideo.url ? "active-video" : null}`}
                            onClick={() => setChosenVideo(video)}>
                        <FontAwesomeIcon icon={faPlay} size={"lg"}/>
                    </button>
                </div>
            </div>
    )
}

export default SideList