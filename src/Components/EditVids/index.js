import {useEffect, useState} from "react";
import axios from "axios"
import {Fragment} from "react";
import Loader from "react-spinners/PacmanLoader";
import EditList from "./EditList";
import FullPageLoader from "../Loader/Loader";

const EditVids = () => {
    //Loader Variables//
    const [loader, setLoader] = useState(true)
    const [reload, setReload] = useState(false)

    //EditVids Component Logic//
    const [videos, setVideos] = useState([])

    //Main UseEffect
    useEffect(() => {
        (async () => {
            try {
                await axios.get('videos').then((res) => {
                    setLoader(false)
                    setVideos(res.data.data)
                })
            } catch (e) {
                console.log(e);
            }
        })()
    }, []);

    useEffect(() => {
        (async () => {
            setLoader(true)
            try {
                await axios.get('videos').then((res) => {
                    setLoader(false)
                    setVideos(res.data.data)

                })
            } catch (e) {
                console.log(e);
            }
        })()
    }, [reload]);


    //-----------------------//

    return (<Fragment>

            {loader ?
                <FullPageLoader loader={loader} />
                :
                <Fragment>
                    {/* EditVid Component */}
                    <div className="overflow-auto rounded-xl shadow p-8" >
                        <table className="w-full">
                            <thead
                                className="bg-gray-50 border-b-2 border-gray-200 ">
                            <tr>
                                <th scope="col" className="p-3 text-sm font-semibold tracking-white text-left">
                                    THUMBNAIL
                                </th>
                                <th scope="col" className="p-3 text-sm font-semibold tracking-white text-left">
                                    TITTLE
                                </th>
                                <th scope="col" className="p-3 text-sm font-semibold tracking-white text-left">
                                    URL
                                </th>
                                <th scope="col" className="p-3 text-sm font-semibold tracking-white text-left">
                                    SLUG
                                </th>
                                <th scope="col" className="p-3 text-sm font-semibold tracking-white text-left">
                                    Status
                                </th>
                            </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">

                            {videos.length !== 0 && videos.map((video, id) => (
                              <EditList
                              key={id}
                              video={video.attributes}
                              setLoader={setLoader}
                              setReload={setReload}
                              />

                            ))}
                            </tbody>
                        </table>
                    </div>
                </Fragment>
                    }

                </Fragment>



    )
}

export default EditVids