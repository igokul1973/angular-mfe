export enum MfeEnum {
    host = 'host',
    feature_1 = 'feature_1'
}

export type TUrl = Record<MfeEnum, IUrl>;

export interface IUrl {
    protocol: 'http' | 'https' | 'ws';
    host: string;
    port: number;
}

export interface IEnvironment {
    production: boolean;
    url?: TUrl;
}
