import Search from "../components/Search"
import Picture from "../components/Picture"

function Home() {
    return (
        <div >
            {/* 搜尋列 */}
            <Search />

            {/* 顯示圖片 */}
            <div className="pictures">
                <Picture />
            </div>
            {/* 更多圖片 */}
            <div className="morePictures">
                <button>Load More</button>
            </div>
        </div>
    )
}

export default Home