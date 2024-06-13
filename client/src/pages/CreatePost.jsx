import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>
            Create a Post
        </h1>
        <form className='flex flex-col gap-4'>
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <TextInput type='text' placeholder='Title' id='title' required className='flex-1'/>
                <Select id="categories">
                    <option uncategorized=''>Select a category</option>
                    <option value="javascript">Javascript</option>
                    <option value="reactjs">React.js</option>  
                    <option value="nextjs">Next.js</option>
                    <option value="python">Python</option>
                </Select>             
            </div>
            <div className="flex items-center justify-between border-4 border-teal-500 border-dotted p-3">
               
                <input 
                type="file"
                className='file:bg-black
                file:p-2 file:ml-4 file:my-2 file:border-none file:rounded-xl
                file:text-white file:cursor-pointer 
               
                text-black/80 
                rounded-xl cursor-pointer '
                accept='image/*' multiple/>

        
                <Button type='button' gradientDuoTone='purpleToBlue'size='sm' outline>
                    Upload image
                </Button>
            </div>
            <ReactQuill theme='snow' placeholder='Write something...' className='h-72' required/>
            <Button type='submit' gradientDuoTone='purpleToPink' className='mt-12'>
                Publish
            </Button>

        </form> 

    </div>
  )
}
