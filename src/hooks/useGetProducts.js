import { useEffect, useState } from "react";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch(API)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                    setLoading(false);
                })

        }, 1000);
    }, [loading]);

    return { products, loading }

}

export default useGetProducts