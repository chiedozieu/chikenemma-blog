import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Spinner } from "flowbite-react";
import CallToAction from '../components/CallToAction';

export default function  () {

    const {postSlug} = useParams() 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [post, setPost] = useState(null)

   



    

    useEffect(() =>{
        const fetchPost = async () => {
            try {
                setLoading(true)
                const res = await fetch(`/api/post/getposts?slug=${postSlug}`)
                const data = await res.json()
                if(!res.ok){
                    setError(true)
                    setLoading(false)
                    return;
                }
                
                if(res.ok){
                    setPost(data.posts[0])
                    setError(false)
                    setLoading(false)
                    return;
                }
                
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        fetchPost()
    }, [postSlug]);

if(loading)
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Spinner size='xl'/>
        </div>)

 const timeToRead = post && (post.content.length/1000).toFixed(0)

  return ( 
    
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center '>
      {
        post && post.title
      }</h1>

      <Link to={`/search?category=${post && post.category}`} className='self-center mt-5'> 
        <Button color='gray' pill size='xs' >{post && post.category}</Button>
      </Link>

      <img src={post && post.image} alt={post && post.title} className='mt-10 max-h-[600px] p-3 w-full object-cover' />

      <div className="flex justify-between p-3 border-b border-slate-300 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        {timeToRead > 0 ? (<span>{timeToRead} mins read</span>) : (<span>Less than a min read</span>)}
      </div>
      <div className="p-3 max-w-2xl mx-auto w-full post-content" 
      dangerouslySetInnerHTML={{__html: post && post.content}}>
        
      </div>

      <div className="max-w-4xl mx-auto">
        <CallToAction />
      </div>
            
    </main>
  )
}
