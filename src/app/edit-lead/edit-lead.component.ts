import { Component, OnInit } from '@angular/core';
import {LeadService} from "../service/lead.service";
import {Router} from "@angular/router";
import {Lead} from "../model/lead.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-lead',
  templateUrl: './edit-lead.component.html',
  styleUrls: ['./edit-lead.component.css']
})
export class EditLeadComponent implements OnInit {

  lead: Lead;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private leadService: LeadService) { }

  ngOnInit() {
    let leadId = localStorage.getItem("editLeadId");
    if(!leadId) {
      alert("Invalid action.")
      this.router.navigate(['list-lead']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.leadService.getLeadById(+leadId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.leadService.updateLead(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-lead']);
        },
        error => {
          alert(error);
        });
  }

}
