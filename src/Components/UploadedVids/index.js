import {useEffect, useState} from "react";
import axios from "axios"
import {Fragment} from "react";
import SideList from "./SideList";
import VideoPlayer from "./VideoPlayer";
import Loader from "react-spinners/PacmanLoader";
import FullPageLoader from "../Loader/Loader";

const UploadedVids = () => {
    //loader vars
    const [loader, setLoader] = useState(true)
    //Playlist Component Logic//
    const [videos, setVideos] = useState([])
    const [chosenVideo, setChosenVideo] = useState('')

    //Main UseEffect
    useEffect(() => {
        (async () => {
            try {
                await axios.get('videos?filters[isPublic][$eq]=true').then((res) => {
                    setVideos(res.data.data)
                    setLoader(false)
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

    return (
        <Fragment>

        {loader ?
            <FullPageLoader loader={loader} />
            :
                <div className="flex flex-auto h-full mx-auto bg-blue-100 ">
                    {/* List of Videos */}
                    <div className="flex flex-uto w-2/12 flex-col overflow-y-auto gap-1">
                        {videos.length !== 0 &&
                            videos.map((video, id) => (
                                <SideList
                                    key={id}
                                    video={video.attributes}
                                    chosenVideo={chosenVideo}
                                    setChosenVideo={setChosenVideo}
                                />
                            ))}
                    </div>

                    {/* Video Player */}
                    <VideoPlayer chosenVideo={chosenVideo}/>
                </div>
        }
        </Fragment>


    )
}

export default UploadedVids