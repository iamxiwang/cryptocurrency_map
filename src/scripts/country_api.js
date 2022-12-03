

const fetchCountry = async (url, options) => {
    try {
        const res = await fetch(url,options);
        // debugger;
        if (res.ok) {
            let data = await res.json();
            return data;
        } else {
            let data = await res.json();
            throw data.meta.msg;
        }
        } catch (error) {
        console.warn(JSON.stringify(error))
    }
}

export default fetchCountry