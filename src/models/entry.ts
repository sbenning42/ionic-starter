export enum EntryName {
    firstUse = '[Entry Name] First Use',
    credentials = '[Entry Name] Credentials',
}

export interface Entry {
    key: string;
    value: any;
}