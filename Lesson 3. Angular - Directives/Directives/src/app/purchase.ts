export enum Status
{
    Proccesing = "Proccesing",
    Closed = "Closed",
    Canceled = "Canceled"
}

export interface Purchase
{
    number: number;
    description: string;
    price: number;
    date: Date;
    salePercent: number;
    purchaseStatus: Status;

    buyerName: string;
    buyerSurname: string;
}