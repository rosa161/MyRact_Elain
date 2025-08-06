import '../css/App0806-1.css'
const App = () => {
    
    const photos={
        photo1:{
            imgURL:'https://images.unsplash.com/photo-1547955922-85912e223015?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'貓咪',
            desc:"可愛貓咪在樓梯上",
            btnName:'圖片來源',
            btnURL:'https://images.unsplash.com/photo-1547955922-85912e223015?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo2:{
            imgURL:'https://images.unsplash.com/photo-1581898262339-10bac03c5818?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'可愛貓咪',
            desc:'喵喵喵喵喵',
            btnName:'圖片來源',
            btnURL:'https://images.unsplash.com/photo-1581898262339-10bac03c5818?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo3:{
            imgURL:'https://images.unsplash.com/photo-1572252821143-035a024857ac?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'可愛睡覺貓咪',
            desc:'呼嚕呼嚕呼嚕嚕',
            btnName:'圖片來源',
            btnURL:'https://images.unsplash.com/photo-1572252821143-035a024857ac?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <img src={photos.photo1.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photos.photo2.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photos.photo3.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App