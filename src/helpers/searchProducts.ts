export function searchProducts(
    array: any[],
    text: string,
): any[] {

    if (!text) {
        return array;
    } else if (!array) {
        return [];
    }

    let filter: any[] = array.filter(product => {

        let splitForDescription = product.description.toLowerCase().split(text.toLowerCase());
        let splitForTitle = product.title.toLowerCase().split(text.toLowerCase());

        if((splitForDescription.length > 1) || (splitForTitle.length > 1)) {
            return (splitForDescription.length > 1) || (splitForTitle.length > 1)
        }
    })

    if(array.length) {
        return filter;
    }

    return [];
}
