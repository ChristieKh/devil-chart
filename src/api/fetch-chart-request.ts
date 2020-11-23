import {HEADER_CONTENT_TYPE_URLENCODED} from "../_constants";

export const fetchChartRequestData = async () => {
    const data = await fetch('/api/data', {
        headers: HEADER_CONTENT_TYPE_URLENCODED
    });
    return data.json();
}