import "./ordersStyle.css";
import React from "react";
import {useSelector} from "react-redux";
import {dateParser} from "../../helpers";

export function HistoryOrders() {
    const bought = useSelector((state: any) => state.userData.bought);

    if (!bought?.length) {
        return null
    }

    console.log(bought)
    return (
        <>
            <h1 className="pageTitle">Order History</h1>
            <div className="orderHistoryContainer">
                <table>
                    <thead>
                    <tr>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Count</th>
                        </tr>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bought.map(({date, product}: any, i: number): any => {
                            return (
                                <tr key={date + i}>
                                    {
                                        product.map((e: any) => (
                                            <tr key={e.id}>
                                                <td>{e.title}</td>
                                                <td>${e.price}</td>
                                                <td>{e.count}</td>
                                            </tr>
                                        ))
                                    }
                                    <td>{dateParser(date)}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
