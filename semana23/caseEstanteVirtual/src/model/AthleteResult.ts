export enum UNIT {
    METROS = "m",
    SEGUNDOS = "s"
};

export interface ResultDTO {
    athleteId: string
    value: number
    unit: UNIT
    competitionId: string
};
