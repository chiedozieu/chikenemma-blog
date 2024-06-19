import { Button, Modal, ModalHeader, Table } from "flowbite-react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MdAutoDelete } from "react-icons/md";





export default function DashPosts() {
    const [ userPosts, setUserPosts ] = useState([])
    const [showMore, setShowMore] = useState(true)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [ postIdToDelete, setPostIdToDelete] = useState('')


    const { currentUser } = useSelector(state => state.user)
    
useEffect(() => {
    const fetchPosts = async () => {
        try {
           const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`) 
           const data = await res.json()
           if(res.ok){
            setUserPosts(data.posts)
            if (data.posts.length < 9){
                setShowMore(false)
            }
           }
        } catch (error) {
            console.log(error.message)
        }
    }
   if(currentUser.isAdmin) {
    fetchPosts();
}
}, [currentUser._id]);

const handleShowMore = async (user) => {
    const startIndex = userPosts.length;
     try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`)
        const data = await res.json();
        if(res.ok){
             setUserPosts((prev) => [...prev, ...data.posts])
        }
        if(data.posts.length < 9) {
            setShowMore(false)
        }
     } catch (error) {
        console.log(error.message);
     }  
};

const handleDeletePost = async () => {
    setShowDeleteModal(false);
    try {
      const res = await fetch(`/api/post/deletepost/${postIdToDelete}/${currentUser._id}`, {
        method: 'DELETE',
      })

      const data = await res.json();
      if(!res.ok){
        console.log(error.message )
      }else {
        setUserPosts(((prev) => prev.filter((post) => post._id !== postIdToDelete)))
      }
    } catch (error) {
      console.log(error.message);
    }
}


  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
        {
            currentUser.isAdmin && userPosts.length > 0 ?  (
                <>
                    <Table hoverable className="shadow-md ">
                        <Table.Head>
                          <Table.HeadCell>Date Updated</Table.HeadCell>
                          <Table.HeadCell>Post Image </Table.HeadCell>
                          <Table.HeadCell>Post Title</Table.HeadCell>
                          <Table.HeadCell>Category</Table.HeadCell>
                          <Table.HeadCell>Delete</Table.HeadCell>
                          <Table.HeadCell><span>Edit</span></Table.HeadCell>
                        </Table.Head>
                        {userPosts.map((post) => (
                            <Table.Body className="divide-y" key={post._id}>
                                 <Table.Row className="bg-white dark:border-gray-700 dark:gray-800 "> 
                                    <Table.Cell>{new Date(post.updatedAt).toLocaleDateString()}</Table.Cell>

                                    <Table.Cell>
                                      <Link to={`/post/${post.slug}`}>
                                        <img src={post.image} alt={post.title} className="w-20 h-10 bg-gray-500 object-cover"/>
                                      </Link>
                                    </Table.Cell>

                                    <Table.Cell>
                                      <Link to={`/post/${post.slug}`}>
                                       {post.title}
                                      </Link>
                                    </Table.Cell>

                                    <Table.Cell>{post.category}</Table.Cell>

                                    <Table.Cell>
                                      <span
                                          onClick={() => {
                                            setShowDeleteModal(true);
                                            setPostIdToDelete(post._id);
                                          }} 
                                          className="font-medium text-red-500 hover:underline cursor-pointer">Delete</span>
                                    </Table.Cell>

                                    <Table.Cell>
                                      <Link to={`/update-post/${post._id}`} className="text-teal-500 hover:underline">
                                       <span>Edit</span>
                                      </Link>
                                    </Table.Cell>

                                 </Table.Row>
                            </Table.Body> 
                        ))

                        }
                    </Table>
                    {
                        showMore && (
                            <Button onClick={handleShowMore} className="w-full text-teal-500 self-center text-sm py-7">
                                Show More
                            </Button>
                        )
                    }
                </>
            ) : (
              ''
            )
        }

        <Modal 
            show={showDeleteModal} 
            onClose={()=> setShowDeleteModal(false)}
            popup
            size={'md'}>

            <ModalHeader />
            <Modal.Body>
                <div className="text-center">
                <MdAutoDelete className='h-14 w-14 text-orange-400 mb-4 mx-auto'/>
                </div>
                <h3 className='text-gray-500 dark:text-gray-400 mb-5 text-lg'>Are you sure you want to delete this post?</h3>
                <div className='flex justify-center gap-4'>
                  <Button color='failure' onClick={handleDeletePost}>
                  Yes I'm sure
                  </Button>
                  <Button color='gray' onClick={()=>setShowDeleteModal(false)}>
                  No, cancel
                  </Button>
                </div>
            </Modal.Body>
                 
            </Modal>
    </div>
  )
}
