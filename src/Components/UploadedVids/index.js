import {useEffect, useState} from "react";
import axios from "axios"
import {Fragment} from "react";
import defaultThumbnail from "../../Assets/Images/no-img.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player/youtube";

const UploadedVids = () => {

    //Playlist Component Logic//
    const [videos, setVideos] = useState([])
    const [chosenVideo, setChosenVideo] = useState('')
    const noThumbnail = ""
    //Main UseEffect
    useEffect(() => {
        (async () => {
            try {
                await axios.get('videos?filters[isPublic][$eq]=true').then((res) => {
                    setVideos(res.data.data)
                })
            } catch (e) {
                console.log(e);
            }
        })()
    }, []);


    useEffect(() => {
        (async () => {
            try {
                console.log(chosenVideo)

            } catch (e) {
                console.log(e);
            }
        })()
    }, [chosenVideo]);
    //-----------------------//

    return (<Fragment>
            {/* Playlist Component */}
            <div className="flex flex-auto h-full mx-auto bg-white">
                {/* List of Videos */}
                <div className="flex flex-uto w-2/12 flex-col overflow-y-auto gap-1">
                    {videos.length !== 0 &&
                        videos.map((video, id) => (<div key={id} className=" relative flex h-16  md:h-32
                        bg-blue-100 grid grid-cols-1 flex ">
                        <div className=" h-16 md:h-32  flex content-center justify-center px-2 py-3 group">
                            <img src={video?.attributes?.thumbnail !== "" ? video.attributes.thumbnail : defaultThumbnail}
                                alt=""
                                className=" max-h-full"/>

                            <button className={`hidden group-hover:block absolute mx-auto text-3xl text-blue-900
											flex w-full h-full top-0 hover:text-blue-300 
											${video.attributes.url === chosenVideo.url ? "active-video" : null}`}
                                    onClick={() => setChosenVideo(video.attributes)}>
                                <FontAwesomeIcon icon={faPlay} size={"lg"}/>
                            </button>
                        </div>
                    </div>))}
                </div>

                {/* Video Player */}
                <div className="flex  flex-col flex-wrap  w-10/12 bg-blue-100 flex-wrap">
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
            </div>
        </Fragment>


    )
}

export default UploadedVids