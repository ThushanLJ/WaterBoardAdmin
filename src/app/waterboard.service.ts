import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class WaterboardService {

  authstate: any = null;

  constructor(private db : AngularFirestore) {
    
  }

  registerWithEmail(name: string, id: string, email: string, password: string) {
    this.db.collection("User").add({
        "name": name,
        "id": id,
        "email": email,
        "password":password
    })
  }
}
