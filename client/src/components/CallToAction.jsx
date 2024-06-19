import { Button } from "flowbite-react";


export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-md text-center">
        <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl ">Want to learn more about javascript?</h2>
            <p className="text-gray-500 my-2">checkout these resources for javascript projects</p>
            <Button gradientDuoTone='purpleToPink' >Learn more</Button>
        </div>
        <div className="p-7  flex-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8yJaxP10--lzBgC0oY_8YS4vAWW0K7b_Ow&s" alt="" />
        </div>
    </div>
  )
}
