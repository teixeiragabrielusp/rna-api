import {
    IHttpError,
    IHttpResponse
} from '../interfaces/index';

export const httpResponseHelper = (items: any[], page?: number): IHttpResponse => {
    if (items && items.length > 1)
    {
        return {
            size: items.length,
            page,
            items
        };
    }
    else if (items && items.length === 1)
    {
        return {
            data: items[0]
        };
    }
    else
    {
        return {
            data: null
        };
    }
};

export const httpErrorHelper = (error: IHttpError): IHttpError => error;
