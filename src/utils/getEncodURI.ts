export const getEncodeURI = (body: Record<string, string>) => Object.keys(body).map((key) =>
    encodeURIComponent(key) + '=' + encodeURIComponent(body[key]))
    .join('&');