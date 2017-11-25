export function dataToStorage(data,key) {
    localStorage.setItem(key,JSON.stringify(data));
}

export function getDataFromStorage(key) {
    return localStorage.getItem(key);
}