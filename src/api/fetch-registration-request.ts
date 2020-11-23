import { HEADER_CONTENT_TYPE_URLENCODED } from "../_constants";
import { getEncodeURI } from "../utils/getEncodURI";

export const fetchRegistrationRequest = async (params: any) => {
    const result = await fetch('/api/register', {
            method: 'POST',
            headers: HEADER_CONTENT_TYPE_URLENCODED,
            body: getEncodeURI(params)
        }
    )

    return result.json();
}