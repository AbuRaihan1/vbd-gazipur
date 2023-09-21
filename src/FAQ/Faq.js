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
      question: "Do I need any specific qualifications to volunteer?",
      answer:
        "No, we welcome volunteers from all backgrounds and skill levels. Your willingness to contribute and make a difference in our community is what matters most.",
    },
    {
      question: "What types of volunteer opportunities does VBD Gazipur offer?",
      answer:
        "We provide a wide range of opportunities, including educational support, environmental initiatives, healthcare outreach, and more. Visit our 'Volunteer Opportunities'. page to explore the current projects and find one that aligns with your interests",
    },
    {
      question:
        "How can I support VBD Gazipur if I don't have the time to volunteer?",
      answer:
        "We greatly appreciate your support! You can make a donation on our 'Support Us' page. Your contributions help us fund our projects and make a positive impact in Gazipur.",
    },
    {
      question: "Is VBD Gazipur a registered non-profit organization?",
      answer:
        " Yes, we are a registered non-profit organization committed to improving the lives of Gazipur's residents. You can find our registration details on our 'About Us' page.",
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
            <Disclosure key={idx} className="mt-12 mb-44 shadow-2xl bg-white">
              <DisclosureQue disclosureData={f} />
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
