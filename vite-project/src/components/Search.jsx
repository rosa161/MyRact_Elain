import { div } from "motion/react-client"
import "../css/search.css"

const Search =()=>{
    return(
        <div className="search">
            <input type="text" />
            <button>Search</button>
        </div>
    )
}
export default Search