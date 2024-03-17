export type UserType = {
    id: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    email: string;
    phoneNumber: string;
}

export type ProductItemType = {
    id: string;
    title: string;
    description?: string;
    productImage: string;
    count?: number;
    price: number;
    type?: string
}

export type OrderType = {
    id: string;
    date: string;
    items: ProductItemType[];
}
