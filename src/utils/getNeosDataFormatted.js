/**
 * Returns Neo data Formatted
 * @param {Object} data
 * @returns {Array of Arrays}
 */
export const getNeosDataFormatted = (data) => {
  if (data !== undefined) {
    let formattedData = data.map((neo) => [
      neo.name,
      neo.estimated_diameter.kilometers.estimated_diameter_min,
      neo.estimated_diameter.kilometers.estimated_diameter_max,
    ]);

    let dataOptions = [
      "Name",
      "estimated_diameter_min",
      "estimated_diameter_max",
    ];

    var newData = [dataOptions, ...formattedData];
  }

  return newData;
};
