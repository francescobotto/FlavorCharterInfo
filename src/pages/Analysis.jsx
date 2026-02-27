import React, { useState } from "react";
// import RadarChart from "../components/RadarChart";
import OutlierRadarChart from "../components/OutlierRadarChart";
import Heatmap from "../components/Heatmap";
import ZGlyph from "../components/ZGlyph";

import { Data, ZGlyphData } from "../constants/data";
import { FlavorOrder, PropertiesMap } from "../constants/flavors";

function Analysis() {
  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ margin: 0 }}>Preliminary Results</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "2rem" }}>
        This section presents a snapshot of our ongoing research. We are currently collecting taste perception data from healthy individuals to build a baseline
        reference. Below are early aggregate results from selected foods based on the subjects currently enrolled in the study (see Home Page for the current
        count). These results as well as more detailed analyses will be updated as we enroll more subjects.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <h3>Taste Profiles</h3>
        <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
          The radar charts below illustrate the average taste ratings across ten dimensions for different foods. Each axis represents a taste dimension, and the
          distance from the center indicates the average rating (0-5). Hover over each flavor dimension to see the mean score and how many votes were given for
          ratings between 0 and 5.
        </p>
      </div>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        <div key={Data[4].name} style={{ display: "flex", flexDirection: "column", gap: "2rem", textAlign: "center", maxWidth: "280px", marginTop: "2rem" }}>
          <h4>{Data[4].name}</h4>
          <OutlierRadarChart outliers={Data[4].outliers} distribution={Data[4].distribution} meanValues={Data[4].meanValues} />
          <div>
            <h4 style={{ textAlign: "center", flexGrow: "1" }}>
              Value Distribution
              <br />
              (57 samples)
            </h4>
            <table style={{ fontSize: "0.85rem", marginTop: "1rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Dimension</th>
                  <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Mean ± Stdev</th>
                </tr>
              </thead>
              <tbody>
                {FlavorOrder.map((dim, idx) => {
                  const highlightDimensions = ["bitter", "astringent", "aromatic"];
                  const isHighlighted = highlightDimensions.includes(dim.toLowerCase());

                  return (
                    <tr key={idx}>
                      <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>{dim}</td>
                      <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>
                        {Data[4].meanValues[PropertiesMap[dim]].toFixed(2)} ± {Data[4].STDValues[PropertiesMap[dim]].toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div key={Data[1].name} style={{ display: "flex", flexDirection: "column", gap: "2rem", textAlign: "center", maxWidth: "280px", marginTop: "2rem" }}>
          <h4>{Data[1].name}</h4>
          <OutlierRadarChart outliers={Data[1].outliers} distribution={Data[1].distribution} meanValues={Data[1].meanValues} />
          <div>
            <h4 style={{ textAlign: "center", flexGrow: "1" }}>
              Value Distribution
              <br />
              (67 samples)
            </h4>
            <table style={{ fontSize: "0.85rem", marginTop: "1rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Dimension</th>
                  <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Mean ± Stdev</th>
                </tr>
              </thead>
              <tbody>
                {FlavorOrder.map((dim, idx) => {
                  const highlightDimensions = ["bitter", "fatty", "aromatic"];
                  const isHighlighted = highlightDimensions.includes(dim.toLowerCase());

                  return (
                    <tr key={idx}>
                      <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>{dim}</td>
                      <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>
                        {Data[1].meanValues[PropertiesMap[dim]].toFixed(2)} ± {Data[1].STDValues[PropertiesMap[dim]].toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div key={Data[2].name} style={{ display: "flex", flexDirection: "column", gap: "2rem", textAlign: "center", maxWidth: "280px", marginTop: "2rem" }}>
          <h4>{Data[2].name}</h4>
          <OutlierRadarChart outliers={Data[2].outliers} distribution={Data[2].distribution} meanValues={Data[2].meanValues} />
          <div>
            <h4>
              Value Distribution
              <br />
              (25 samples)
            </h4>
            <table style={{ fontSize: "0.85rem", marginTop: "1rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Dimension</th>
                  <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Mean ± Stdev</th>
                </tr>
              </thead>
              <tbody>
                {FlavorOrder.map((dim, idx) => {
                  const highlightDimensions = ["fatty", "texture", "aromatic"];
                  const isHighlighted = highlightDimensions.includes(dim.toLowerCase());

                  return (
                    <tr key={idx}>
                      <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>{dim}</td>
                      <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>
                        {Data[2].meanValues[PropertiesMap[dim]].toFixed(2)} ± {Data[2].STDValues[PropertiesMap[dim]].toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "5rem", marginBottom: "2rem" }}>
        <h3>Does food variance (e.g., organic vs not-organic) impact flavor profile perception?</h3>
        <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
          The flavor profile of produce is well conserved across varieties. Shown here are the flavor profile and rating distribution for Strawberry, a product
          most humans perceive as having high flavor variability. Nevertheless, the measurements reported by 52 subjects over a range of strawberry varieties,
          from Oishii strawberries (a pesticide-free, non-GMO strawberry variety known for its intense sweetness, creamy texture, and aromatic, floral flavor)
          to a common supermarket, non-organic strawberry, are remarkably well-conserved. The most important flavor components are:{" "}
          <b>sweetness, sourness, aroma, and texture.</b>
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "50px" }}>
        <div key={Data[0].name} style={{ textAlign: "center" }}>
          <h4 style={{ marginBottom: "2.5rem" }}>{Data[0].name}</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <OutlierRadarChart outliers={Data[0].outliers} distribution={Data[0].distribution} meanValues={Data[0].meanValues} />
          </div>
        </div>

        <div>
          <h4 style={{ textAlign: "center" }}>
            Value Distribution <br />
            (52 samples)
          </h4>
          <table style={{ width: "100%", fontSize: "0.85rem", marginTop: "1rem" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Dimension</th>
                <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Mean ± Stdev</th>
              </tr>
            </thead>
            <tbody>
              {FlavorOrder.map((dim, idx) => {
                const highlightDimensions = ["sweet", "sour", "aromatic"];
                const isHighlighted = highlightDimensions.includes(dim.toLowerCase());

                return (
                  <tr key={idx}>
                    <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>{dim}</td>
                    <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>
                      {Data[0].meanValues[PropertiesMap[dim]].toFixed(2)} ± {Data[0].STDValues[PropertiesMap[dim]].toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: "5rem", marginBottom: "2rem" }}>
        <h3>Does ethnicity influence flavor perception?</h3>
        <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
          The flavor profile of produce is relatively well conserved across diets and ethnicities. Shown here are the subtle differences in the flavor profile
          for Almonds reported by South Asians (10 responders) versus the whole population (25 responders). The most important flavor components are in both
          cases: <b>texture, fattiness, aroma, and sweetness</b>. South Asians, however, perceive Almonds to be a bit more{" "}
          <b>fatty, astringent, aromatic, and piquant</b> than the whole population.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "50px" }}>
        <div key={Data[2].name} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h4 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Almonds Flavor Profile
            <br /> South Asians vs. total population
          </h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ZGlyph baselineMean={ZGlyphData[0].baselineMean} baselineStDev={ZGlyphData[0].baselineStDev} compareMean={ZGlyphData[0].compareMean} />

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginLeft: "20px" }}>
              <div style={{ width: "20px", height: "140px", background: "linear-gradient(to bottom, #d65c5c, #f2f2f2, #3b82f6)", border: "1px solid #888" }} />

              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "140px", fontSize: "0.85rem" }}>
                <span>+3 sd</span>
                <span>0</span>
                <span>-3 sd</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ textAlign: "center" }}>
            Value Distribution
            <br />
            (25 samples)
          </h4>
          <table style={{ width: "100%", fontSize: "0.85rem", marginTop: "1rem" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Dimension</th>
                <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>
                  Mean ± Stdev
                  <br />
                  (Total Population)
                </th>
                <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>
                  Mean ± Stdev
                  <br />
                  (South Asian)
                </th>
              </tr>
            </thead>
            <tbody>
              {FlavorOrder.map((dim, idx) => {
                const highlightDimensions = ["fatty", "texture", "aromatic"];
                const isHighlighted = highlightDimensions.includes(dim.toLowerCase());

                return (
                  <tr key={idx}>
                    <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>{dim}</td>
                    <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>
                      {Data[2].meanValues[PropertiesMap[dim]].toFixed(2)} ± {Data[2].STDValues[PropertiesMap[dim]].toFixed(2)}
                    </td>
                    <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>
                      {ZGlyphData[0].compareMean[PropertiesMap[dim]].toFixed(2)}± {ZGlyphData[0].compareSTDValues[PropertiesMap[dim]].toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: "5rem", marginBottom: "2rem" }}>
        <h3>Why do you care about moderately-sweet foods? </h3>
        <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
          Tasteloss in cancer treatment is not an ON/OFF function, e.g., patients do not necessarily lose all sense of sweetness. The loss can be subtle, where
          patients can still detect honey as sweet, but an apple and a pear no longer taste differently. Charting the flavor profile of foods with varying
          degrees of a specific dimension will allow us to capture this type of more subtle loss.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "50px" }}>
        <div key={Data[3].name} style={{ textAlign: "center" }}>
          <h4 style={{ marginBottom: "2.5rem" }}>{Data[3].name}</h4>
          <OutlierRadarChart outliers={Data[3].outliers} distribution={Data[3].distribution} meanValues={Data[3].meanValues} />
        </div>

        <div>
          <h4 style={{ textAlign: "center" }}>
            Value Distribution
            <br />
            (12 samples)
          </h4>
          <table style={{ width: "100%", fontSize: "0.85rem", marginTop: "1rem" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Dimension</th>
                <th style={{ textAlign: "center", padding: "0.5rem 1.5rem" }}>Mean ± Stdev</th>
              </tr>
            </thead>
            <tbody>
              {FlavorOrder.map((dim, idx) => {
                const highlightDimensions = ["sweet", "texture", "sour"];
                const isHighlighted = highlightDimensions.includes(dim.toLowerCase());

                return (
                  <tr key={idx}>
                    <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>{dim}</td>
                    <td style={{ textAlign: "center", fontWeight: isHighlighted ? "bold" : "normal" }}>
                      {Data[3].meanValues[PropertiesMap[dim]].toFixed(2)} ± {Data[3].STDValues[PropertiesMap[dim]].toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
