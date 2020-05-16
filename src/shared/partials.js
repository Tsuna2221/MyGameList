export const convertQueryString = (q, type) => {
    if(type === "string"){
        return Object.keys(q).map((i) => `${i}=${q[i]}`).join("&")
    }else{
        const query = q ? q : window.location.search;
        const obj = {};

        query.substr(1).split("&").forEach(string => {
            const stringSplit = string.split("=")
        
            return query === "" ? "" : obj[stringSplit[0]] = stringSplit[1].replace(/%20/g, " ")
        })

        return obj;
    }
}
