import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Lead} from "../model/lead.model";
// import { LeadOwner } from "../model/lead-owner.model";
// import { LeadCategory } from "../model/lead-category.model";
// import { SourceEnquiry } from "../model/source-enquiry.model";
import { of } from "rxjs";

@Injectable()
export class LeadService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/lead-portal/leads';

  getLeads() {
      let fakeleads = [//{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
    //  {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
    //  {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
    //  {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    {
      id: 1,
      leadNo:135,
      studentName: 'Dhiraj',
      fatherName: 'ramohan',
      motherName: 'syamala',
      fatherEmailId: 'ramohan@gmail.com',
      motherEmailId: 'dhiraj@gmail.com',
      bloodGroup: 'dhiraj@gmail.com',
      address: 'dhiraj@gmail.com',
      telephone: 'dhiraj@gmail.com',
      cell1: 'dhiraj@gmail.com',
      cell2: 'dhiraj@gmail.com',
      Gender: 'dhiraj@gmail.com',
      dob: '12/05/2010',
      seekingAdmissionYear: '2019',
      dateForVisit:'20/05/2019',
       leadOwner: {    
           id: 1,
           name: 'mahesh',
           mailId: 'mahesh@gmail.com',
           active: true
         },
       leadCategory: {  
           id: 1,
           name: 'Web',
           active: true
         },
       sourceEnquiry:{
           id: 2,
           name: null,
           active: false 
         },
      leadDate:'12/06/2019',
      description:'Something about your interest on this school',
      active: true
      }
   ];
    
   return of(fakeleads); 
    // return this.http.get<Lead[]>(this.baseUrl);
  }

  getLeadById(id: number) {
    return this.http.get<Lead>(this.baseUrl + '/' + id);
  }

  createLead(lead: Lead) {
    return this.http.post(this.baseUrl, lead);
  }

  updateLead(lead: Lead) {
    return this.http.put(this.baseUrl + '/' + lead.id, lead);
  }

  deleteLead(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
