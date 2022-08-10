export interface GraphData{
    boardName?:string,
    labels?:[string];
    temperature1: {
        label: string,
        data: number[]
    },
    temperature2: {
        label: string,
        data: number[]
    },
    measurements: {
        label: string,
        data: number[]
    }
}