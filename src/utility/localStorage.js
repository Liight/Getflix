export const getLocalStorage = (key) => {
    let newKeyValue = window.localStorage.getItem(key);
    // console.log("localStorage : getItem : key : ", newKeyValue);
    newKeyValue = JSON.parse(newKeyValue);
    console.log("newKey", newKeyValue);
    return newKeyValue;
}

export const setLocalStorage = (name, value) => {
    let newValue = value;
    console.log("about to store this value: ", newValue);
    newValue = JSON.stringify(newValue);
    window.localStorage.setItem(name, newValue);
    // console.log("localStorage : set : ", localStorage.getItem(name));
}

export const getLocalStorageKeyCheck = (key) => {
    if(window.localStorage.getItem(key) !== undefined){
        // console.log("localStorage : get : ", window.localStorage[key]);
        return true;
    } else {
        console.log("BAD: localStore : " + key + " ", localStorage[key]);
        return false;
    }
};