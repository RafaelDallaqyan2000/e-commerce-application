export function searchProducts(
    array: any[],
    text: string,
): any[] {

    if (!text) {
        return array
    }

    if(!array && !array?.length) {
        return [];
    }

    let filter: any[] = array.filter(product => {

        let splitForDesc = product.description.toLowerCase().split(text.toLowerCase());
        let splitForTitle = product.title.toLowerCase().split(text.toLowerCase());

        if((splitForDesc.length > 1) || (splitForTitle.length > 1)) {
            return (splitForDesc.length > 1) || (splitForTitle.length > 1)
        }
    })

    if(array.length) {
        return filter;
    }

    return [];
}
