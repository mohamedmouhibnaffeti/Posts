import { useEffect, useState } from 'react'
import axios from 'axios'
import '../CSS/Posts.css'
export default function Posts(){
    const [err, setErr] = useState('')
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:3000/api/posts/all')
        if(response.status === 200 ){
            console.log(response.data.posts)
        }
    }
    console.log(posts)
    useEffect(()=>{
        fetchPosts()
    }, [])
    return(
        <section className="postsSection">
            <div className="innerPostsSection">
                <div className="UserHeader">
                    <div className="innerUserHeader">
                        <span className="UserIcon"> M N </span>
                        <span> Mouhib Naffeti </span>
                    </div>
                    <div style={{backgroundColor: "red", borderRadius: "10px", outline: "none", color: "white", paddingTop: "2px", paddingBottom: "4px", paddingLeft: "12px", paddingRight: "12px", cursor: "pointer"}}>
                        Delete
                    </div>
                </div>
                <div className="Title">
                    title
                </div>
                <div className="Description">
                    description
                </div>
            </div>
        </section>
    )
}