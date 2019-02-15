import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Entry } from '../../models/entry';
import { map, switchMap } from 'rxjs/operators';

export const asObservable = (promiseFactory: () => Promise<any>) => Observable.defer(() => Observable.fromPromise(promiseFactory()));

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  private get storage(): Observable<Storage> {
    return asObservable(() => this._storage.ready()).pipe(
      map(() => this._storage)
    );
  }
  constructor(private _storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  load(): Observable<Array<Entry>> {
    return this.storage.pipe(
      switchMap(() => {
        return asObservable(() => {
          const entries: Array<Entry> = [];
          return this._storage.forEach((value: any, key: string) => entries.push({ key, value }))
            .then(() => {
              console.log('GOT: ', entries);
              return Promise.resolve(entries);
            });
        });
      })
    );
  }

  save(entries: Array<Entry>): Observable<Array<Entry>> {
    return this.storage.pipe(
      switchMap(() => {
        const saveTasks = entries.map((entry: Entry) => asObservable(() => this._storage.set(entry.key, entry.value)));
        return Observable.zip(...saveTasks).pipe(map((g) => {
          return entries;
        }));
      })
    );
  }

  remove(keys: Array<string>): Observable<Array<string>> {
    return this.storage.pipe(
      switchMap(() => {
        const removeTasks = keys.map((key: string) => asObservable(() => this._storage.remove(key)));
        return Observable.zip(...removeTasks).pipe(map(() => keys));
      })
    );
  }

  clear(): Observable<void> {
    return this.storage.pipe(
      switchMap(() => asObservable(() => this._storage.clear()))
    );
  }



}
