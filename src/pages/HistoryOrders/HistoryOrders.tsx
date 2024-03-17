import "./ordersStyle.css";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {dateParser} from "../../helpers";
import {useAppDispatch} from "../../store/store.ts";
import {getAllBought} from "../../store/reducers/actions/getAllBought.ts";

export function HistoryOrders() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllBought());
    }, []);

    const bought = useSelector((state: any) => state.bought);

    if (!bought?.length) {
        return null
    }
    if (!bought) {
        return null
    }

    return (
        <>
            <h1 className="pageTitle"> Order History </h1>
            <div className="orderHistoryContainer">
                <table>
                    <thead>
                    <tr>
                        <tr>
                            <th> Name</th>
                            <th> Price</th>
                            <th> Count</th>
                        </tr>
                        <th> Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bought.map((element: any, i: number): any => (
                            <tr key={element.id+i}>
                                {
                                    element.products.map((e: any, i: number) => (
                                        <tr key={e.id+i+element.title}>
                                            <td>{e.title}</td>
                                            <td>${e.price}</td>
                                            <td>{e.count}</td>
                                        </tr>
                                    ))
                                }
                                <td>{dateParser(element.date)}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
