export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.statusText)


export const log = param => {
    console.log();
    return param;
}