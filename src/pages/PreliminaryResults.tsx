import DistributionAwareRadialProfileChart from "../components/OutlierRadarChart.tsx";
import ZGlyphChart from "../components/ZGlyph.tsx";
import { DistributionAwareRadialProfileData, Flavors, ZGlyphData, type ZGlyphItem } from "../data/data.ts";

function DistributionAwareRadialProfile({
  item,
  layout = "row",
  highlight,
  count,
}: {
  item: (typeof DistributionAwareRadialProfileData)[0];
  layout?: "row" | "column";
  highlight?: string[];
  count: number;
}) {
  return (
    <div key={item.name} className={`flex-1 flex ${layout === "row" ? "flex-row" : "flex-col"} items-center justify-center gap-8 text-center mt-8`}>
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="font-semibold text-2xl">{item.name}</span>
        <DistributionAwareRadialProfileChart item={item} />
      </div>

      <div>
        <span className="text-center font-semibold text-2xl block">
          Value Distribution <br /> ({count} samples)
        </span>

        <table className="text-sm mt-4">
          <thead>
            <tr>
              <th className="text-center px-6 py-2">Dimension</th>
              <th className="text-center px-6 py-2">Mean ± Stdev</th>
            </tr>
          </thead>

          <tbody>
            {Flavors.map((dim, idx) => {
              const isHighlighted = highlight?.some((h) => h.toLowerCase().includes(dim.toLowerCase()));

              return (
                <tr key={idx}>
                  <td className={`text-center ${isHighlighted ? "font-bold" : "font-normal"}`}>{dim}</td>

                  <td className={`text-center ${isHighlighted ? "font-bold" : "font-normal"}`}>
                    {item.meanValues[dim].toFixed(2)} ± {item.STDValues[dim].toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ZGlyph({
  ZGlyphItem,
  DistributionAwareRadialProfileItem,
  highlight,
}: {
  ZGlyphItem: ZGlyphItem;
  DistributionAwareRadialProfileItem: (typeof DistributionAwareRadialProfileData)[0];
  highlight?: string[];
}) {
  return (
    <div className="flex justify-center flex-wrap gap-8 mt-8">
      <div key={DistributionAwareRadialProfileItem.name} className="flex flex-col items-center">
        <h4 className="text-center mb-6 text-2xl font-semibold">
          Almonds Flavor Profile
          <br />
          South Asians vs. total population
        </h4>

        <div className="flex items-center">
          <ZGlyphChart
            baselineMean={ZGlyphItem.baselineMean}
            baselineStDev={ZGlyphItem.baselineStDev}
            compareMean={ZGlyphItem.compareMean}
            compareSTDValues={ZGlyphItem.compareSTDValues}
          />

          <div className="flex items-center gap-3 ml-5">
            <div className="w-5 h-[140px] border border-gray-500" style={{ background: "linear-gradient(to bottom, #d65c5c, #f2f2f2, #3b82f6)" }} />

            <div className="flex flex-col justify-between h-[140px] text-sm">
              <span>+3 sd</span>
              <span>0</span>
              <span>-3 sd</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="text-center font-semibold text-2xl block">
          Value Distribution
          <br />
          (25 samples)
        </span>

        <table className="text-sm mt-4">
          <thead>
            <tr>
              <th className="text-center px-6 py-2">Dimension</th>
              <th className="text-center px-6 py-2">
                Mean ± Stdev
                <br />
                (Total Population)
              </th>
              <th className="text-center px-6 py-2">
                Mean ± Stdev
                <br />
                (South Asian)
              </th>
            </tr>
          </thead>
          <tbody>
            {Flavors.map((dim, idx) => {
              const isHighlighted = highlight?.some((h) => h.toLowerCase().includes(dim.toLowerCase()));

              return (
                <tr key={idx}>
                  <td className={`text-center ${isHighlighted ? "font-bold" : "font-normal"}`}>{dim}</td>
                  <td className={`text-center ${isHighlighted ? "font-bold" : "font-normal"}`}>
                    {DistributionAwareRadialProfileItem.meanValues[dim].toFixed(2)} ± {DistributionAwareRadialProfileItem.STDValues[dim].toFixed(2)}
                  </td>
                  <td className={`text-center ${isHighlighted ? "font-bold" : "font-normal"}`}>
                    {ZGlyphItem.compareMean[dim].toFixed(2)}± {ZGlyphItem.compareSTDValues[dim].toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PreliminaryResults() {
  return (
    <div className="lg:max-w-[900px] mx-auto py-8 px-8 lg:px-0">
      <h1 className="text-[clamp(28px,2vw,32px)] lg:text-[2.5rem] font-semibold leading-tight">Preliminary Results</h1>

      <p className="mt-8 text-lg">
        This section presents a snapshot of our ongoing research. We are currently collecting taste perception data from healthy individuals to build a baseline
        reference. Below are early aggregate results from selected foods based on the subjects currently enrolled in the study (see Home Page for the current
        count). These results as well as more detailed analyses will be updated as we enroll more subjects.
      </p>

      <div className="mt-8">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold">Taste Profiles</h2>
        <p className="text-lg mt-2">
          The radar charts below illustrate the average taste ratings across ten dimensions for different foods. Each axis represents a taste dimension, and the
          distance from the center indicates the average rating (0-5). Hover over each flavor dimension to see the mean score and how many votes were given for
          ratings between 0 and 5.
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        <DistributionAwareRadialProfile
          item={DistributionAwareRadialProfileData[4]}
          layout="column"
          highlight={["bitter", "Astringent", "Aromatic"]}
          count={57}
        />
        <DistributionAwareRadialProfile item={DistributionAwareRadialProfileData[1]} layout="column" highlight={["Bitter", "Fatty", "Aromatic"]} count={67} />
        <DistributionAwareRadialProfile item={DistributionAwareRadialProfileData[2]} layout="column" highlight={["Texture", "Fatty", "Aromatic"]} count={25} />
      </div>

      <div className="mt-20">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold">Does food variance (e.g., organic vs not-organic) impact flavor profile perception?</h2>
        <p className="text-lg mt-2">
          The flavor profile of produce is well conserved across varieties. Shown here are the flavor profile and rating distribution for Strawberry, a product
          most humans perceive as having high flavor variability. Nevertheless, the measurements reported by 52 subjects over a range of strawberry varieties,
          from Oishii strawberries (a pesticide-free, non-GMO strawberry variety known for its intense sweetness, creamy texture, and aromatic, floral flavor)
          to a common supermarket, non-organic strawberry, are remarkably well-conserved. The most important flavor components are:{" "}
          <b>sweetness, sourness, aroma, and texture.</b>
        </p>
      </div>

      <DistributionAwareRadialProfile item={DistributionAwareRadialProfileData[0]} layout="row" highlight={["sweet", "sour", "aromatic"]} count={52} />

      <div className="mt-20">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold">Does ethnicity influence flavor perception?</h2>
        <p className="text-lg mt-2">
          The flavor profile of produce is relatively well conserved across diets and ethnicities. Shown here are the subtle differences in the flavor profile
          for Almonds reported by South Asians (10 responders) versus the whole population (25 responders). The most important flavor components are in both
          cases: <b>texture, fattiness, aroma, and sweetness</b>. South Asians, however, perceive Almonds to be a bit more{" "}
          <b>fatty, astringent, aromatic, and piquant</b> than the whole population.
        </p>
      </div>

      <ZGlyph
        ZGlyphItem={ZGlyphData[0]}
        DistributionAwareRadialProfileItem={DistributionAwareRadialProfileData[2]}
        highlight={["fatty", "texture", "aromatic"]}
      />

      <div className="mt-20">
        <h2 className="text-[clamp(24px,2vw,28px)] font-semibold">Why do you care about moderately-sweet foods?</h2>
        <p className="text-lg mt-2">
          Tasteloss in cancer treatment is not an ON/OFF function, e.g., patients do not necessarily lose all sense of sweetness. The loss can be subtle, where
          patients can still detect honey as sweet, but an apple and a pear no longer taste differently. Charting the flavor profile of foods with varying
          degrees of a specific dimension will allow us to capture this type of more subtle loss.
        </p>
      </div>

      <DistributionAwareRadialProfile item={DistributionAwareRadialProfileData[3]} layout="row" highlight={["sweet", "sour", "texture"]} count={12} />
    </div>
  );
}
