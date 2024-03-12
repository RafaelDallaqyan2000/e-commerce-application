import React, { useEffect } from "react";
import { getTodosData } from "../../store/reducers/actions/getTodosData.ts";
import { useDispatch, useSelector } from "react-redux";
import { Simulate } from "react-dom/test-utils";

export type TableDataType = {
    id: number,
    userId: number,
    title: string,
    completed: boolean
}
export function CustomTable() {

    const dispatch = useDispatch();
    const tableData = useSelector((state: any) => state.tableData);
    const loadingData = useSelector((state: any) => state.loading);

    useEffect(() => {
        dispatch(getTodosData());
    }, []);

    if(loadingData) {
        return <h3>Loading ...</h3>
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((e: TableDataType) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.userId}</td>
                                <td>{e.title}</td>
                                <td>{`${e.completed}`}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
