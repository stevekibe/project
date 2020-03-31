import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    FullName: new FormControl('',),
    Email: new FormControl('',),
    Mobile: new FormControl('',),
    Location: new FormControl(''),
    Bio: new FormControl(''),
    Skills: new FormControl(''),
    Language: new FormControl(''),
  });

  getCustomers(){
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer) {
    this.customerList.push({
      FullName: customer.fullName,
      Email: customer.email,
      Mobile: customer.mobile,
      Location: customer.location,
      Bio: customer.bio,
      Skills: customer.skills,
      Language: customer.language,

    });
  }

}
