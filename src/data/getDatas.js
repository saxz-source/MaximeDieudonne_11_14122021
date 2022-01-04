import locationList from "./locationList.json";

export const getLocationItem = (locationId) => {
    return new Promise((resolve, reject) => {
        const locationItem = locationList.filter((l) => l.id === locationId)[0];
        locationItem ? resolve(locationItem) : reject("location place not found");
    });
};

export const getLocationList = () => {
    return new Promise((resolve, reject)=> {

        locationList ? resolve(locationList) : reject("location list not found")
    })
}