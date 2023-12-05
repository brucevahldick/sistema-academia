import axios, {AxiosResponse} from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

export function makeApiGetCall(porta: string, successFn: (response: AxiosResponse) => any, errorFn: (error: any) => any, pathParams?: [any]): Promise<any> {
    for (const pathParam in pathParams) {
        // @ts-ignore
        porta += "/" + pathParams[pathParam];
    }
    return api.get(porta).then((response: AxiosResponse) => {
        return successFn(response);
    }).catch((error) => {
        return errorFn(error);
    });
}

export function makeApiPostCall(porta: string, successFn: (response: AxiosResponse) => any, errorFn: (error: any) => any, body: {}): any {
    api.post(porta, body).then((response: AxiosResponse) => {
        return successFn(response);
    }).catch((error) => {
        return errorFn(error);
    });
}

export function makeApiPutCall(porta: string, successFn: (response: AxiosResponse) => any, errorFn: (error: any) => any, body: {}): any {
    api.put(porta, body).then((response: AxiosResponse) => {
        return successFn(response);
    }).catch((error) => {
        return errorFn(error);
    });
}

export function makeApiDeleteCall(porta: string, successFn: (response: AxiosResponse) => any, errorFn: (error: any) => any, pathParams?: [any]): any {
    for (const pathParam in pathParams) {
        // @ts-ignore
        porta += "/" + pathParams[pathParam];
    }
    api.delete(porta).then((response: AxiosResponse) => {
        return successFn(response);
    }).catch((error) => {
        return errorFn(error);
    });
}

export function makeApiPatchCall(porta: string, successFn: (response: AxiosResponse) => any, errorFn: (error: any) => any, body: {}) {
    api.patch(porta, body).then((response: AxiosResponse) => {
        return successFn(response);
    }).catch((error) => {
        return errorFn(error);
    });
}