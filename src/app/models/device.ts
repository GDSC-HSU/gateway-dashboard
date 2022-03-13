export interface Device {
    id?: string,
    accessKey?: string,
    oid?: string,
    name?: string,
    location?: string,
    hardwareInfo?: JSON,
    tag?: Array<string>;
}