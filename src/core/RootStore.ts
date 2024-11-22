import * as React from 'react';
import NoteStore from '../assets/modules/store/NoteStore';

export class RootStore {
    noteStore: NoteStore;

    constructor() {
        this.noteStore = new NoteStore();
    }

    sync = async () => {
        await Promise.all(
            Object.values(this).map(store => {
                return store?.sync ? store.sync() : Promise.resolve();
            }),
        );
    }
}

const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
