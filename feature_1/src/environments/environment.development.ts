import { IEnvironment } from './types';

export const environment: IEnvironment = {
    production: false,
    url: {
        host: {
            protocol: 'http',
            host: 'localhost',
            port: 4200
        },
        feature_1: {
            protocol: 'http',
            host: 'localhost',
            port: 4201
        }
    }
};
