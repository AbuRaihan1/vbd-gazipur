import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
const DisclosureQue = ({ disclosureData }) => {
  const { question, answer } = disclosureData;
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="mt-5 w-full flex items-center justify-between rounded-lg hover:bg-secondary px-4 py-2 text-left text-2xl font-bold text-white bg-green-900 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
            <span>{question}</span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-primary`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black font-semibold text-justify">
            {answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default DisclosureQue;
