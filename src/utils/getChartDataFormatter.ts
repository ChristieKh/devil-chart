import {TEST_DATA} from "../_constants";

export const getChartDataFormatter = (dataVal: any) => {
    // @ts-ignore
    return Boolean(dataVal.length) ? dataVal.map((elemData) => {
        return({
            id: Boolean(elemData.data.length) ? elemData.data[0].name : 'test', // @ts-ignore
            data: elemData.data.map(item => ({x: item.date, y: item.value})) })
    }) : TEST_DATA
}

// new Date(item.date).toISOString().substring(0, 10)
