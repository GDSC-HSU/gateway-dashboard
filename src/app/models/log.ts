export interface Log{
    did: string,
    bodyTemperature: number,
    faceMask: boolean,
    covidIdentification: JSON,
    isComplete: boolean,
    timestamp: number,
}