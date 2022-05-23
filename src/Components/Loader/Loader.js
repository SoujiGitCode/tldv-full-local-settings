import Loader from "react-spinners/PacmanLoader";

const FullPageLoader = ({loader}) =>{
    const color = "#161616"
    return(
        <div className="w-full h-screen content-center justify-center text-center flex mx-auto">
            <div className="my-32 mx-auto">
                <Loader color={color} loading={loader} size={25}/>
            </div>
        </div>
    )
}

export default FullPageLoader