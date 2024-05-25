import { Footer } from "flowbite-react";
import { BsWhatsapp, BsFacebook, BsYoutube, BsInstagram, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Footer container className="p-20">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-5">
          <Link to='/' className='font-bold dark:text-white text-xlb ' >
            <span className='px-2 py-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-lg text-white'>CKM's</span>Blog
          </Link>
          </div>
          <div className="grid grid-cols-2 gap-20 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">chikenemma</Footer.Link>
                <Footer.Link href="#">chikenemma</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Chikenemma™" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsYoutube} />
            <Footer.Icon href="#" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
