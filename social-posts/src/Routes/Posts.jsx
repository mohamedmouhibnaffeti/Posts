import '../CSS/Posts.css'
export default function Posts(){
    return(
        <section className="postsSection">
            <div className="innerPostsSection">
                <div className="UserHeader">
                    <div className="innerUserHeader">
                        <span className="UserIcon"> M N </span>
                        <span> Mouhib Naffeti </span>
                    </div>
                    <div style={{backgroundColor: "red", borderRadius: "10px", outline: "none", color: "white", paddingTop: "2px", paddingLeft: "6px"}}>
                        Delete
                    </div>
                </div>
            </div>
        </section>
    )
}