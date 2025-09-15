import { div } from "motion/react-client"
import "../css/pictures.css"


const Picture = () => {
    return (
        <div className="pictures">
            <p>圖片標題</p>
            <div className="imgContainer">
                <img src="./p01.jpg" alt="" />
            </div>
            <p>
                Donload Image:
                <a href="#" target="_blank">Click Here</a>
            </p>
        </div>
    )
}