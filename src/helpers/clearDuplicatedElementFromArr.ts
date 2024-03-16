export function clearDuplication(arr = []): any[] {

    let unique: any = [];

    arr.forEach((element: any) => {
        if (!unique.includes(element?.type)) {
            unique.push(element.type);
        }
    });

    return unique;
}
