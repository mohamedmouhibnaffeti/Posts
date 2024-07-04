import { useEffect, useState } from 'react'
import axios from 'axios'
import '../CSS/Posts.css'
export default function Posts(){
    const [err, setErr] = useState('')
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:3000/api/posts/all')
        if(response.status === 200 ){
            setPosts(response.data.posts)
        }else{
            setErr('Error Fetching posts')
        }
    }

    const deletePost = async(id) => {

    }

    useEffect(()=>{
        fetchPosts()
    }, [])
    return(
        <section className="postsSection">
            {
                posts.map((post, index)=>(
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
                            {post.title}
                        </div>
                        <div className="Description">
                            {post.description}
                        </div>
                    </div>
                ))
            }
        </section>
    )
}