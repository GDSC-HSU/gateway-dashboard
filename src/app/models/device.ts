import { DeviceStatus } from "./enums/device_status";

export interface Device {
    id?: string,
    accessKey?: string,
    oid?: string,
    name?: string,
    location?: string,
    hardwareInfo?: JSON,
    tags?: Array<string>;
    status?: DeviceStatus;
    timestampUpdate?: string;
}