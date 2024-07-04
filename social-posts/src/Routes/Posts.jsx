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
                    <button style={{backgroundColor: "red", borderRadius: "10px", outline: "none", color: "white", padding: "2px", padding-X}}>
                        Delete
                    </button>
                </div>
            </div>
        </section>
    )
}