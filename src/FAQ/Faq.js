import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
  }, []);

  
  return (
    <div className="w-full bg-secondary py-10 my-20 mt-56">
      <div
        className="p-5 lg:mx-auto mx-4 max-w-2xl rounded-xl bg-white shadow-2xl"
        data-aos="fade-up"
      >
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex items-center justify-between rounded-lg hover:bg-secondary px-4 py-2 text-left text-2xl font-bold text-primary bg-green-900 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                <span>Is vbd free?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-primary`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black font-semibold text-justify">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="mt-5 w-full flex items-center justify-between rounded-lg hover:bg-secondary px-4 py-2 text-left text-2xl font-bold text-primary bg-green-900 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-primary`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black font-semibold text-justify">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="mt-5 w-full flex items-center justify-between rounded-lg hover:bg-secondary px-4 py-2 text-left text-2xl font-bold text-primary bg-green-900 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                <span>How many upazila have VBD gazipur's?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-primary`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black font-semibold text-justify">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
