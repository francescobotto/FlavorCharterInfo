import { FaApple, FaAndroid } from "react-icons/fa";
import React from "react";

const Participate: React.FC = () => {
  return (
    <div className="lg:max-w-[900px] mx-auto py-8 px-8 lg:px-0">
      <h1 className="text-[clamp(28px,2vw,32px)] lg:text-[2.5rem] font-semibold leading-tight">Participate in the Study</h1>

      <p className="mt-8 mb-4 leading-relaxed text-lg">
        Join us in helping build a scientific reference for how taste is perceived in healthy individuals. It only takes a few minutes and your participation is
        anonymous and secure.
      </p>

      <div className="mt-8">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold mt-8">How It Works</h2>
        <p className="mt-2">After downloading the app, you will be guided through a simple process:</p>
        <ol className="mt-4 list-decimal pl-8">
          <li>Open the app and sign the consent form</li>
          <li>Fill in your demographic information</li>
          <li>Choose a food, taste it, and rate it</li>
          <li>Repeat for more foods</li>
        </ol>
      </div>

      <div className="mt-10">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold mt-8">Ready to Join?</h2>
        <p className="mt-2 leading-relaxed">
          To join the study, download the app and start rating today! The app is available on the <strong>App Store for iOS users</strong>. For{" "}
          <strong>Android users</strong>, the app is currently in closed testing; request access from the link below.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://apps.apple.com/us/app/flavor-charter/id6745230451"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white font-bold rounded hover:bg-gray-900 transition"
          >
            <FaApple />
            Download for iOS
          </a>
          <a
            href="https://uic.ca1.qualtrics.com/jfe/form/SV_eDx4CKcIXJMO3J4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#A4C639] text-white font-bold rounded hover:bg-green-700 transition"
          >
            <FaAndroid />
            Request Android Access
          </a>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-6 justify-between">
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-[clamp(24px,2vw,28px)] font-semibold mb-2">Who can participate?</h2>
          <p className="text-lg">Only healthy individuals aged 18+ with no taste alterations.</p>
        </div>

        <div className="flex-1 min-w-[250px]">
          <h2 className="text-[clamp(24px,2vw,28px)] font-semibold mb-2">How your data is used</h2>
          <p className="text-lg">Data is anonymized once collected and used for research only in aggregate form.</p>
        </div>

        <div className="flex-1 min-w-[250px]">
          <h2 className="text-[clamp(24px,2vw,28px)] font-semibold mb-2">Any questions?</h2>
          <p className="text-lg">
            Contact{" "}
            <a href="mailto:fbott1@uic.edu" className="text-blue-600 underline">
              fbott1@uic.edu
            </a>{" "}
            if you have any questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Participate;
