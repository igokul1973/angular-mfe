import { environment } from './environments/environment';

const feature1Protocol = environment.url?.feature_1.protocol || 'http';
const feature1Host = environment.url?.feature_1.host || 'localhost';
const feature1Port = environment.url?.feature_1.port || 4200;
export const feature1RemoteEntry = `${feature1Protocol}://${feature1Host}:${feature1Port}/feature_1.js`;
