import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import contactIMG from "../../assets/images/contact.svg";
const Contact = () => {
  const title = "Contact Us";
  const description =
    "This is our contact page, you can know about our contact and any other information from here";
  return (
    <div>
      <PageBanner img={contactIMG} title={title} description={description} />
      <div className="my-10 text-center">
        <h2 className="lg:text-5xl text-secondary top-10 font-bold text-3xl">
          Contact us
        </h2>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
