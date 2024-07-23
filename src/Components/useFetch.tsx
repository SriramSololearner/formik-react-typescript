import React, { useState, useEffect } from 'react';


const useFetch = (url: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((res) => setData(res));
    }, []);

    return [data]
}

export default useFetch
