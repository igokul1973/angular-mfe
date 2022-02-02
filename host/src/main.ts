import { loadRemoteEntry } from '@angular-architects/module-federation';
import { feature1RemoteEntry } from './constants';

Promise.all([
    loadRemoteEntry({
        type: 'module',
        remoteEntry: feature1RemoteEntry
    })
])
    .catch((e) => console.error('Error loading remote entries', e))
    .then(() => import('./bootstrap'))
    .catch((err) => console.error(err));
