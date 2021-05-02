/**
 * Returns the list of orbital bodies to dynamicly fill the select option
 * @param {Array of Objects} data
 * @return { Array of Objects}
 */
export const getOrbitalBodies = (data) => {
  if (data !== undefined) {
    let orbitingBodies = [];

    // Get orbiting bodies
    const ob = data.map((d) => d.close_approach_data);
    const arr = ob.map((x) =>
      x.map((o) => orbitingBodies.push(o.orbiting_body))
    );

    // Remove Duplicates
    let newData = [...new Set(orbitingBodies)];

    return newData;
  }
};

/**
 * Returns NEOs that are currently orbiting the selected body
 * @param {String} ob Orbit body
 * @param {Array Of Objects} data
 * @return { Array of Objects}
 */
export const getNeosWithOrbitalBody = (ob, data) => {
  if (data !== undefined) {
    let filteredData = [];

    // Filter Neos based on orbital body
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].close_approach_data.length; j++) {
        if (data[i].close_approach_data[j].orbiting_body === ob) {
          filteredData = [...filteredData, data[i]];
        }
      }
    }

    // Remove Duoplicates
    var filteredDataCleaned = Array.from(
      new Set(filteredData.map(JSON.stringify)),
      JSON.parse
    );

    return filteredDataCleaned;
  }
};
