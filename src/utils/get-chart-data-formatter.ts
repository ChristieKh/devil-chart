type ParamsType = {
    id: string;
    data: Array<ItemData>;
}

type ItemData = {
    name: string;
    value: number;
    date: string;
}

export const getChartDataFormatter = (values: Array<ParamsType>) =>
    Boolean(values.length) ? values.filter(filteredElem => typeof filteredElem !== 'string')
        .map(({data}) => ({
            id: Boolean(data.length) ? data[0].name : '',
            data: data.map(({date, value}) => ({x: new Date(date).toISOString(), y: value})
            )})
        ) : [];