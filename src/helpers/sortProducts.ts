export function sortProducts(products: any[], sortBy: string) {

    if(!products.length) {
        return [];
    }

    const sortedByAdd = [...products].sort((a, b) => a.price - b.price);
    const sortedByReduce = [...products].sort((a, b) => b.price - a.price);

    if(sortBy === "reduce") {

        return sortedByReduce;
    } else if(sortBy === "add") {

        return sortedByAdd;
    } else {

         return products;
    }
}
