import { HEADER_CONTENT_TYPE_URLENCODED } from "../_constants";
import { getEncodeURI } from "../utils/get-encode-URI";

type ParamsType = {
    name: string;
    password: string;
}

export const fetchRegistrationRequest = async (params: ParamsType) => {
    const result = await fetch('/api/register', {
            method: 'POST',
            headers: HEADER_CONTENT_TYPE_URLENCODED,
            body: getEncodeURI(params)
        }
    )

    return result.json();
}