export enum STATUS {
    INPROGRESS = "in_progress",
    FINISHED = "finished"
};

export interface CompetitionDTO {
    name: string
    status: STATUS
};
