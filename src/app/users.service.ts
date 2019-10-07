import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface User {
  id: string;
  name: string;
  points: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  collectionName = 'Users';
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private db: AngularFirestore) {
    this.usersCollection = db.collection(this.collectionName);
  }

  getAllUsers$(): Observable<User[]> {
    return this.usersCollection.valueChanges({idField: 'id'});
  }
}
