export const createLocationValue = (location = null) => {
  const city = !location?.city ? "" : `${location?.city}, `;
  const region = !location?.region ? "" : `${location?.region}, `;
  const country = !location?.country ? "" : `${location?.country}`;

  return location ? `${city}${region}${country}` : "";
};
