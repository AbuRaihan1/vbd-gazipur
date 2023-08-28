import { Disclosure } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import DisclosureQue from "./DisclosureQue";
import "./faq.css";
export default function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
  }, []);

  const faq = [
    {
      question: "why are you?",
      answer: "cause i'm boss of mine",
    },
    {
      question: "why are you?",
      answer: "cause i'm boss of mine",
    },
    {
      question: "why are you?",
      answer: "cause i'm boss of mine",
    },
  ];

  return (
    <div className="pb-10 bg-white relative">
      <div className="custom-div-faq"></div>
      <div className="faq w-full bg-secondary pb-32 pt-48 relative mb-14 ">
        <h2 className="text-center mb-10 text-primary font-bold lg:text-5xl text-2xl">
          FAQ
        </h2>
        <div
          className="p-5 lg:mx-auto mx-4 max-w-3xl rounded-xl bg-primary shadow-2xl"
          data-aos="fade-up"
        >
          {faq.map((f, idx) => (
            <Disclosure key={idx} className="mt-12 mb-44 shadow-2xl  bg-white">
              <DisclosureQue disclosureData={f} />
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
