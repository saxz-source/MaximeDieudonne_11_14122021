import locationList from "./locationList.json";

/**
 * Fetch a location item form its ID
 * @param {number} locationId the id of the location
 * @returns {Promise <any{}>} a location item object
 */
export const getLocationItem = (locationId) => {
    return new Promise((resolve, reject) => {
        const locationItem = locationList.filter((l) => l.id === locationId)[0];
        locationItem
            ? resolve(locationItem)
            : reject("location place not found");
    });
};

/**
 * Fetch the array of all location places
 * @returns {Promise <any{}[]>} the array of all location places
 */
export const getLocationList = () => {
    return new Promise((resolve, reject) => {
        locationList
            ? resolve(locationList)
            : reject("location list not found");
    });
};
