import {useEffect, useState} from "react";
import axios from "axios"
import {Fragment} from "react";
import defaultThumbnail from "../../Assets/Images/no-img.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal"
import Loader from "react-spinners/PacmanLoader";

const EditVids = () => {

    //Loader Variables//
    const [loader, setLoader] = useState(true)
    const [reload, setReload] = useState(false)
    const color = "#161616"


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
                <div className="w-full h-screen content-center justify-center text-center flex mx-auto">
                    <div className="my-32 mx-auto">
                        <Loader color={color} loading={loader} size={25}/>
                    </div>
                </div>
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

                                <Fragment key={id}>
                                    <tr
                                        className="bg-white bg-gray-100 border-b  border-cyan-700 hover:bg-gray-300 ">
                                        <td className="p-3 text-sm text-gray-700">
                                            <div
                                                className=" h-16 md:h-32  flex content-center justify-center px-2 py-3 group">
                                                <img
                                                    src={video?.attributes?.thumbnail !== "" ? video.attributes.thumbnail : defaultThumbnail}
                                                    alt=""
                                                    className=" max-h-full"/>
                                            </div>
                                            <Modal
                                                setLoader={setLoader}
                                                setReload = {setReload}

                                                id={video?.id}
                                                thumbnail={video?.attributes?.thumbnail}
                                                url={video?.attributes?.url}
                                                tittle={video?.attributes?.tittle}
                                                slug={video?.attributes?.slug}
                                                isPublic={video?.attributes?.isPublic}
                                            />
                                        </td>
                                        <td className="p-3 text-sm text-gray-700">
                                            {video.attributes?.tittle}
                                        </td>
                                        <td className="p-3 text-sm text-gray-700">
                                            {video.attributes?.url}
                                        </td>
                                        <td className="p-3 text-sm text-gray-700">
                                            {video.attributes?.slug}
                                        </td>
                                        <td className="px-6 py-2 text-left">
                                            <span className={`p-1.5 text-xs  uppercase tracking-wider rounded-lg bg-opacity-60 
                                            ${video.attributes?.isPublic ?  "text-blue-100 bg-blue-900" : "text-red-100 bg-red-900"}`}>
                                                  {video.attributes?.isPublic === true ?
                                                      "Public" : "Hidden"

                                                  }
                                            </span>


                                        </td>
                                    </tr>
                                </Fragment>

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