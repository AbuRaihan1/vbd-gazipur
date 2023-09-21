import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import contactIMG from "../../assets/images/contact.svg";
import Swal from "sweetalert2";

const Contact = () => {
  const title = "Contact Us";
  const description =
    "This is our contact page, you can know about our contact and any other information from here";

  const sendMessage = () => {
    Swal.fire("sorry!", "This button doesn't work yet!", "error");
  };
  return (
    <div>
      <PageBanner img={contactIMG} title={title} description={description} />
      <div className="my-10 text-center">
        <h2 className="lg:text-5xl text-secondary top-10 font-bold text-3xl">
          Contact us
        </h2>
      </div>

      <div className="container mx-auto py-5 pt-2 lg:px-12 px-5">
        <div className="text-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 rounded-md px-2 py-2 outline-secondary w-full"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="border-2 rounded-md px-2 py-1 outline-secondary w-full"
            />
          </div>
          <div>
            <textarea
              name=""
              placeholder="Enter Your message here"
              className="border-2 rounded-md px-2 py-2 outline-secondary w-full mt-4 h-[150px] resize-none"
            ></textarea>
            <button
              onClick={sendMessage}
              className="secondary-button w-full mt-3"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
