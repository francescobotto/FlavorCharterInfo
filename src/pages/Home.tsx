import { Link } from "react-router-dom";

import Progress from "../components/Progress.tsx";

export default function Home() {
  return (
    <div className="lg:max-w-[900px] mx-auto px-8 lg:px-0 py-8">
      <h1 className="text-[clamp(28px,2vw,32px)] lg:text-[2.5rem] font-semibold leading-tight">Flavor Charter</h1>

      <p className="text-[#7d7d7d] text-lg">Explore your taste perception.</p>

      <div className="mt-8">
        <p className="text-lg">
          Flavor Charter is a scientific research project designed to better understand how people perceive taste. The app collects data from healthy
          individuals about how they experience the flavor of different foods. Users are asked to rate each food across ten taste dimensions. This baseline data
          from healthy participants will later be compared with data from oncology patients to support clinical decisions around nutrition and treatment
          recovery.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold">Why Taste Perception Matters</h2>

        <p className="text-lg mt-2">
          Taste perception plays a crucial role in nutrition and quality of life. Around{" "}
          <a
            href="https://my.clevelandclinic.org/health/diseases/22047-dysgeusia"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 underline"
          >
            17%
          </a>{" "}
          of the US population experiences some form of taste disorder, including dysgeusia, and among Head and Neck Cancer patients undergoing chemotherapy or
          radiotherapy this number can reach{" "}
          <a
            href="https://www.thegreenjournal.com/article/S0167-8140(21)00023-2/fulltext"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 underline"
          >
            51–100%
          </a>
          . These alterations can lead to reduced appetite, malnutrition, and overall lower well-being. Establishing a clear baseline of how healthy individuals
          perceive taste is essential to understanding these changes and supporting clinical interventions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center mt-8 gap-6">
        <Progress current={100} target={100} />

        <div className="flex-1">
          <p>
            So far, <strong>100</strong> people have enrolled in the study, and we reached this first milestone by <strong>January 15th 2026</strong>
            <br />
            Our study includes diverse ethnic and national backgrounds, with South Asian (41%) and Non-Hispanic White (32%) groups most represented.
            <br />
            Participants are predominantly young adults aged 18–34 (68%), providing valuable insight into how young people perceive flavor.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center mt-8 gap-6">
        <Progress current={0} target={100} />

        <div className="flex-1">
          <p className="mb-2">
            We are thrilled to enroll the next <strong>100</strong> participants by <strong>August 2026</strong> to further strengthen the reliability and
            robustness of the taste profiles.
          </p>

          <p className="mb-4">Every participant helps us build a more complete picture of how humans perceive taste.</p>

          <Link to="/participate" className="btn btn-danger font-bold inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Participate
          </Link>
        </div>
      </div>
    </div>
  );
}
