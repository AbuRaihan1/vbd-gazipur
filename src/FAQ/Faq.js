import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./faq.css";
import DisclosureQue from "./DisclosureQue";
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
    <div className="faq w-full bg-secondary pb-16 pt-48">
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
  );
}
