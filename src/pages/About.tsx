export default function About() {
  return (
    <div className="lg:max-w-[900px] mx-auto py-8 px-8 lg:px-0">
      <h1 className="text-[clamp(28px,2vw,32px)] lg:text-[2.5rem] font-semibold leading-tight">About</h1>

      <p className="text-[1.1rem] leading-relaxed mt-8">
        This study is conducted by a team of researchers at the University of Illinois Chicago (UIC), under IRB Protocol STUDY2025-0477.
      </p>

      <h2 className="text-[clamp(24px,2vw,28px)] font-semibold mt-8">Research Team</h2>
      <div className="">
        <div className="mt-2">
          <strong>G. Elisabeta Marai</strong>
          <br />
          <em>Professor of Computer Science</em>
          <br />
          University of Illinois Chicago
          <br />
          <em>Principal Investigator</em>
        </div>

        <div className="mt-2">
          <strong>Francesco Botto</strong>
          <br />
          <em>Graduate Student</em>
          <br />
          University of Illinois Chicago
          <br />
          <em>Research Assistant</em>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold mt-8">Scientific goals</h2>
        <ul className="mt-2 list-disc pl-6 leading-relaxed">
          <li>Build a reliable taste perception baseline from healthy participants</li>
          <li>Identify deviations in taste perception in oncology patients</li>
          <li>Explore correlations between treatment types and sensory alterations</li>
          <li>Suggest personalized dietary recommendations based on perception patterns</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold mt-8">Publications</h2>
        <p className="mt-2">
          <a href="https://uofi.box.com/s/w7ad67yhdiv82oq5094zsosgo32166bb" className="text-blue-600 underline">
            FlavorCharter:
          </a>{" "}
          Development of a Smartphone App for Quantifying Food Flavor, Francesco Botto, Guadalupe Canhuate, Xinhua Zhang, C. David Fuller, G. Elisabeta Marai,
          pp. 1-8, Workshop on Computational Gastronomy: Data Science for Food and Cooking (CoGamy) at ICDM 2025
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold mt-8">Collaborators</h2>
        <div className="flex flex-wrap gap-8 justify-center items-center mt-6">
          <img src="/uic_logo.png" alt="UIC" className="h-[60px] object-contain" />
          <img src="/evl_logo.png" alt="EVL" className="h-[60px] object-contain" />
          <img src="/md_anderson_cancer_center_logo.png" alt="MD Anderson Cancer Center" className="h-[60px] object-contain" />
          <img src="/iowa_logo.png" alt="University of Iowa" className="h-[60px] object-contain" />
        </div>
      </div>
    </div>
  );
}
