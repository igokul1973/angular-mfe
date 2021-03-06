import { IEnvironment } from './types';

export const environment: IEnvironment = {
    production: false,
    url: {
        host: {
            protocol: 'http',
            host: 'mfe.host.l',
            port: 8080
        },
        feature_1: {
            protocol: 'http',
            host: 'mfe.feature1.l',
            port: 8080
        }
    }
};
