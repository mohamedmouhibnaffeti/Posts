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
                    <button style={{backgroundColor: "red", }}>
                        Delete
                    </button>
                </div>
            </div>
        </section>
    )
}