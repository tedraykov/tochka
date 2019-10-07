import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
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
  addPoint(data: User): void {
    this.usersCollection.doc(data.id).valueChanges().pipe(
      take(1),
      tap(doc => {
        const userPoints = (doc as User).points;
        this.usersCollection.doc(data.id).update({points: userPoints + 1});
      })
    ).subscribe();
  }
}
