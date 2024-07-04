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
    console.log(posts)
    useEffect(()=>{
        fetchPosts()
    }, [])
    return(
        <section className="postsSection">
            {
                posts.map((post, index))
            }
        </section>
    )
}