import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import wave from "../../../../src/assets/images/wave2.svg";
const Footer = () => {
  return (
    <div className="relative">
      <img src={wave} alt="" className="w-full " />
      <footer className="-mt-1 footer p-10 bg-[#161616] text-green-600 font-semibold">
        <div>
          <span className="text-primary uppercase text-xl">Services</span>
          <Link className="link link-hover" to="#">
            Branding
          </Link>
          <Link className="link link-hover" to="#">
            Design
          </Link>
          <Link className="link link-hover" to="#">
            Marketing
          </Link>
          <Link className="link link-hover" to="#">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="text-primary uppercase text-xl">Terms</span>
          <Link className="link link-hover" to="#">
            Branding
          </Link>
          <Link className="link link-hover" to="#">
            Design
          </Link>
          <Link className="link link-hover" to="#">
            Marketing
          </Link>
          <Link className="link link-hover" to="#">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="text-primary uppercase text-xl">Company</span>
          <Link className="link link-hover" to="#">
            Branding
          </Link>
          <Link className="link link-hover" to="#">
            Design
          </Link>
          <Link className="link link-hover" to="#">
            Marketing
          </Link>
          <Link className="link link-hover" to="#">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="text-primary uppercase text-xl">Company</span>
          <Link className="link link-hover" to="#">
            Branding
          </Link>
          <Link className="link link-hover" to="#">
            Design
          </Link>
          <Link className="link link-hover" to="#">
            Marketing
          </Link>
          <Link className="link link-hover" to="#">
            Advertisement
          </Link>
        </div>
      </footer>
      <div className="px-10 py-4 bg-primary flex items-center justify-between">
        <div>
          <span className="font-bold text-2xl">VBD</span> <br />
          <span className="font-bold text-xl">Gazipur District</span>
        </div>

        <div className="flex gap-3">
          <Link
            to="https://www.facebook.com/groups/241233189259725"
            target="_blank"
            className="bg-secondary rounded-full text-white hover:bg-green-700 duration-200 p-3"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="#"
            // target="_blank"
            className="bg-secondary rounded-full text-white hover:bg-green-700 duration-200 p-3"
          >
            <AiFillYoutube />
          </Link>

          <Link
            to="#"
            // target="_blank"
            className="bg-secondary rounded-full text-white hover:bg-green-700 duration-200 p-3"
          >
            <AiFillInstagram />
          </Link>

          <Link
            to="#"
            // target="_blank"
            className="bg-secondary rounded-full text-white hover:bg-green-700 duration-200 p-3"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
