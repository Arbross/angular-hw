import { Purchase, Status } from "./purchase";

export const purchaseList: Purchase[] = [
    {
        number: 1,
        description: "qweqw",
        price: 300,
        date: new Date(),
        salePercent: 30,
        buyerName: "Mi",
        buyerSurname: "Yoho",
        purchaseStatus: Status.Proccesing
    },
    {
        number: 2,
        description: "cotonori",
        price: 400,
        date: new Date(),
        salePercent: 10,
        buyerName: "Mi",
        buyerSurname: "Yoho",
        purchaseStatus: Status.Canceled
    },
    {
        number: 3,
        description: "sito",
        price: 200,
        date: new Date(),
        salePercent: 60,
        buyerName: "Miko",
        buyerSurname: "Yoho",
        purchaseStatus: Status.Closed
    }, 
    {
        number: 4,
        description: "sitto",
        price: 100,
        date: new Date(),
        salePercent: 5,
        buyerName: "Mikoto",
        buyerSurname: "Yoho",
        purchaseStatus: Status.Closed
    },
    {
        number: 5,
        description: "proccesson",
        price: 150,
        date: new Date(),
        salePercent: 100,
        buyerName: "Siro",
        buyerSurname: "Quel",
        purchaseStatus: Status.Closed
    },
    {
        number: 6,
        description: "proccesson",
        price: 250,
        date: new Date(),
        salePercent: 500,
        buyerName: "Siro",
        buyerSurname: "Quel",
        purchaseStatus: Status.Proccesing
    }
];