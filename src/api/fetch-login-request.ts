import {HEADER_CONTENT_TYPE_URLENCODED} from "../_constants";
import {getEncodeURI} from "../utils/get-encode-URI";

export const fetchLoginRequest = async (params: any) => {
    const result = await fetch('/api/login', {
            method: 'POST',
            headers: HEADER_CONTENT_TYPE_URLENCODED,
            body: getEncodeURI(params)
        }
    )

    return result.json();
}