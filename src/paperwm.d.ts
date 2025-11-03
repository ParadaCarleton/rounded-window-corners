import type Clutter from 'gi://Clutter';
import type Meta from 'gi://Meta';

declare module 'gi://Meta' {
    interface Window {
        clone: Clutter.Actor & {
            cloneActor: Meta.WindowActor;
        };
    }
}
