// Autogenerated on build - do not edit

//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.2.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class ActionsClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://localhost:5001";
    }

    throwError(): Promise<FileResponse> {
        let url_ = this.baseUrl + "/Secure/Actions/ThrowError";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processThrowError(_response);
        });
    }

    protected processThrowError(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
            let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
            if (fileName) {
                fileName = decodeURIComponent(fileName);
            } else {
                fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            }
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(null as any);
    }

    generateTsFromSwagger(): Promise<FileResponse> {
        let url_ = this.baseUrl + "/Secure/Actions/GenerateTsFromSwagger";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGenerateTsFromSwagger(_response);
        });
    }

    protected processGenerateTsFromSwagger(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
            let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
            if (fileName) {
                fileName = decodeURIComponent(fileName);
            } else {
                fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            }
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(null as any);
    }

    setStatusToNormal(): Promise<FileResponse> {
        let url_ = this.baseUrl + "/Secure/Actions/SetStatusToNormal";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSetStatusToNormal(_response);
        });
    }

    protected processSetStatusToNormal(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
            let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
            if (fileName) {
                fileName = decodeURIComponent(fileName);
            } else {
                fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            }
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(null as any);
    }

    setStatusToWarning(): Promise<FileResponse> {
        let url_ = this.baseUrl + "/Secure/Actions/SetStatusToWarning";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSetStatusToWarning(_response);
        });
    }

    protected processSetStatusToWarning(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
            let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
            if (fileName) {
                fileName = decodeURIComponent(fileName);
            } else {
                fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            }
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(null as any);
    }

    setStatusToDanger(): Promise<FileResponse> {
        let url_ = this.baseUrl + "/Secure/Actions/SetStatusToDanger";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSetStatusToDanger(_response);
        });
    }

    protected processSetStatusToDanger(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
            let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
            if (fileName) {
                fileName = decodeURIComponent(fileName);
            } else {
                fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            }
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(null as any);
    }
}

export class SecureApiClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://localhost:5001";
    }

    getLoggedInFnr(): Promise<string> {
        let url_ = this.baseUrl + "/Secure/SecureApi/GetLoggedInFnr";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetLoggedInFnr(_response);
        });
    }

    protected processGetLoggedInFnr(response: Response): Promise<string> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<string>(null as any);
    }

    addHome(numberOfInhabitants: number | undefined): Promise<void> {
        let url_ = this.baseUrl + "/Secure/SecureApi/AddHome?";
        if (numberOfInhabitants === null)
            throw new Error("The parameter 'numberOfInhabitants' cannot be null.");
        else if (numberOfInhabitants !== undefined)
            url_ += "numberOfInhabitants=" + encodeURIComponent("" + numberOfInhabitants) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAddHome(_response);
        });
    }

    protected processAddHome(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    getHome(): Promise<HomeEntity> {
        let url_ = this.baseUrl + "/Secure/SecureApi/GetHome";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHome(_response);
        });
    }

    protected processGetHome(response: Response): Promise<HomeEntity> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = HomeEntity.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<HomeEntity>(null as any);
    }

    addItem(item: ItemEntity): Promise<void> {
        let url_ = this.baseUrl + "/Secure/SecureApi/AddItem";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(item);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAddItem(_response);
        });
    }

    protected processAddItem(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    removeItem(itemId: number | undefined): Promise<void> {
        let url_ = this.baseUrl + "/Secure/SecureApi/RemoveItem?";
        if (itemId === null)
            throw new Error("The parameter 'itemId' cannot be null.");
        else if (itemId !== undefined)
            url_ += "itemId=" + encodeURIComponent("" + itemId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRemoveItem(_response);
        });
    }

    protected processRemoveItem(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    getItemTypes(): Promise<ItemTypeEntity[]> {
        let url_ = this.baseUrl + "/Secure/SecureApi/GetItemTypes";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetItemTypes(_response);
        });
    }

    protected processGetItemTypes(response: Response): Promise<ItemTypeEntity[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(ItemTypeEntity.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ItemTypeEntity[]>(null as any);
    }

    getItems(homeId: number | undefined): Promise<ItemEntity[]> {
        let url_ = this.baseUrl + "/Secure/SecureApi/GetItems?";
        if (homeId === null)
            throw new Error("The parameter 'homeId' cannot be null.");
        else if (homeId !== undefined)
            url_ += "homeId=" + encodeURIComponent("" + homeId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetItems(_response);
        });
    }

    protected processGetItems(response: Response): Promise<ItemEntity[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(ItemEntity.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ItemEntity[]>(null as any);
    }

    getStatus(): Promise<Status> {
        let url_ = this.baseUrl + "/Secure/SecureApi/GetStatus";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetStatus(_response);
        });
    }

    protected processGetStatus(response: Response): Promise<Status> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Status.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Status>(null as any);
    }

    getAzureMapsKey(): Promise<string> {
        let url_ = this.baseUrl + "/Secure/SecureApi/GetAzureMapsKey";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAzureMapsKey(_response);
        });
    }

    protected processGetAzureMapsKey(response: Response): Promise<string> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<string>(null as any);
    }

    isEasterEggActivated(): Promise<boolean> {
        let url_ = this.baseUrl + "/Secure/SecureApi/IsEasterEggActivated";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processIsEasterEggActivated(_response);
        });
    }

    protected processIsEasterEggActivated(response: Response): Promise<boolean> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<boolean>(null as any);
    }
}

export class WeatherForecastClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://localhost:5001";
    }

    get(): Promise<WeatherForecast[]> {
        let url_ = this.baseUrl + "/WeatherForecast";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<WeatherForecast[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(WeatherForecast.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<WeatherForecast[]>(null as any);
    }
}

export abstract class DatabaseTable implements IDatabaseTable {

    constructor(data?: IDatabaseTable) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
    }

    static fromJS(data: any): DatabaseTable {
        data = typeof data === 'object' ? data : {};
        throw new Error("The abstract class 'DatabaseTable' cannot be instantiated.");
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data;
    }
}

export interface IDatabaseTable {
}

export class HomeEntity extends DatabaseTable implements IHomeEntity {
    id?: number;
    personFnr?: string;
    name?: string;
    adress?: string;
    numberOfInhabitants?: number;
    items?: ItemEntity[];
    itemTypes?: ItemTypeEntity[] | undefined;
    hasLackingItems?: boolean;
    numberOfMissingTypes?: number;

    constructor(data?: IHomeEntity) {
        super(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.personFnr = _data["personFnr"];
            this.name = _data["name"];
            this.adress = _data["adress"];
            this.numberOfInhabitants = _data["numberOfInhabitants"];
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(ItemEntity.fromJS(item));
            }
            if (Array.isArray(_data["itemTypes"])) {
                this.itemTypes = [] as any;
                for (let item of _data["itemTypes"])
                    this.itemTypes!.push(ItemTypeEntity.fromJS(item));
            }
            this.hasLackingItems = _data["hasLackingItems"];
            this.numberOfMissingTypes = _data["numberOfMissingTypes"];
        }
    }

    static fromJS(data: any): HomeEntity {
        data = typeof data === 'object' ? data : {};
        let result = new HomeEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["personFnr"] = this.personFnr;
        data["name"] = this.name;
        data["adress"] = this.adress;
        data["numberOfInhabitants"] = this.numberOfInhabitants;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        if (Array.isArray(this.itemTypes)) {
            data["itemTypes"] = [];
            for (let item of this.itemTypes)
                data["itemTypes"].push(item.toJSON());
        }
        data["hasLackingItems"] = this.hasLackingItems;
        data["numberOfMissingTypes"] = this.numberOfMissingTypes;
        super.toJSON(data);
        return data;
    }
}

export interface IHomeEntity extends IDatabaseTable {
    id?: number;
    personFnr?: string;
    name?: string;
    adress?: string;
    numberOfInhabitants?: number;
    items?: ItemEntity[];
    itemTypes?: ItemTypeEntity[] | undefined;
    hasLackingItems?: boolean;
    numberOfMissingTypes?: number;
}

export class ItemEntity extends DatabaseTable implements IItemEntity {
    id?: number;
    itemTypeId?: number;
    homeId?: number;
    sellByDate?: Date;
    itemType?: ItemTypeEntity | undefined;

    constructor(data?: IItemEntity) {
        super(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.itemTypeId = _data["itemTypeId"];
            this.homeId = _data["homeId"];
            this.sellByDate = _data["sellByDate"] ? new Date(_data["sellByDate"].toString()) : <any>undefined;
            this.itemType = _data["itemType"] ? ItemTypeEntity.fromJS(_data["itemType"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ItemEntity {
        data = typeof data === 'object' ? data : {};
        let result = new ItemEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["itemTypeId"] = this.itemTypeId;
        data["homeId"] = this.homeId;
        data["sellByDate"] = this.sellByDate ? this.sellByDate.toISOString() : <any>undefined;
        data["itemType"] = this.itemType ? this.itemType.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export interface IItemEntity extends IDatabaseTable {
    id?: number;
    itemTypeId?: number;
    homeId?: number;
    sellByDate?: Date;
    itemType?: ItemTypeEntity | undefined;
}

export class ItemTypeEntity extends DatabaseTable implements IItemTypeEntity {
    id?: number;
    name?: string;
    recomendedUnitPerPerson?: number;
    unit?: string;
    excludeFromTotal?: boolean;

    constructor(data?: IItemTypeEntity) {
        super(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.recomendedUnitPerPerson = _data["recomendedUnitPerPerson"];
            this.unit = _data["unit"];
            this.excludeFromTotal = _data["excludeFromTotal"];
        }
    }

    static fromJS(data: any): ItemTypeEntity {
        data = typeof data === 'object' ? data : {};
        let result = new ItemTypeEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["recomendedUnitPerPerson"] = this.recomendedUnitPerPerson;
        data["unit"] = this.unit;
        data["excludeFromTotal"] = this.excludeFromTotal;
        super.toJSON(data);
        return data;
    }
}

export interface IItemTypeEntity extends IDatabaseTable {
    id?: number;
    name?: string;
    recomendedUnitPerPerson?: number;
    unit?: string;
    excludeFromTotal?: boolean;
}

export class Status extends DatabaseTable implements IStatus {
    statusId?: number;
    isActive?: boolean;
    name?: string;
    description?: string | undefined;

    constructor(data?: IStatus) {
        super(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.statusId = _data["statusId"];
            this.isActive = _data["isActive"];
            this.name = _data["name"];
            this.description = _data["description"];
        }
    }

    static fromJS(data: any): Status {
        data = typeof data === 'object' ? data : {};
        let result = new Status();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["statusId"] = this.statusId;
        data["isActive"] = this.isActive;
        data["name"] = this.name;
        data["description"] = this.description;
        super.toJSON(data);
        return data;
    }
}

export interface IStatus extends IDatabaseTable {
    statusId?: number;
    isActive?: boolean;
    name?: string;
    description?: string | undefined;
}

export class WeatherForecast implements IWeatherForecast {
    date?: Date;
    temperatureC?: number;
    temperatureF?: number;
    summary?: string | undefined;

    constructor(data?: IWeatherForecast) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.date = _data["date"] ? new Date(_data["date"].toString()) : <any>undefined;
            this.temperatureC = _data["temperatureC"];
            this.temperatureF = _data["temperatureF"];
            this.summary = _data["summary"];
        }
    }

    static fromJS(data: any): WeatherForecast {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherForecast();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["date"] = this.date ? formatDate(this.date) : <any>undefined;
        data["temperatureC"] = this.temperatureC;
        data["temperatureF"] = this.temperatureF;
        data["summary"] = this.summary;
        return data;
    }
}

export interface IWeatherForecast {
    date?: Date;
    temperatureC?: number;
    temperatureF?: number;
    summary?: string | undefined;
}

function formatDate(d: Date) {
    return d.getFullYear() + '-' + 
        (d.getMonth() < 9 ? ('0' + (d.getMonth()+1)) : (d.getMonth()+1)) + '-' +
        (d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate());
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}