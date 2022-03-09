export enum UNIT {
    METROS = "m",
    SEGUNDOS = "s"
};

export interface ResultDTO {
    competitionName: string
    athleteName: string
    value: number
    unit: UNIT
};
