import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LeadService} from "../service/lead.service";
import {Lead} from "../model/lead.model";
import { LeadOwner } from "../model/lead-owner.model";
import { LeadCategory } from "../model/lead-category.model";
import { SourceEnquiry } from "../model/source-enquiry.model";

@Component({
  selector: 'app-list-lead',
  templateUrl: './list-lead.component.html',
  styleUrls: ['./list-lead.component.css']
})
export class ListLeadComponent implements OnInit {

  leads: Lead[] = [];
  leadCategory: LeadCategory[];
  leadOwner: LeadOwner[];
  sourceEnquiry: SourceEnquiry[];
  
  constructor(private router: Router, private leadService: LeadService) { }

  ngOnInit() {
    this.leadService.getLeads()
      .subscribe( data => {
      
        for(let i = 0; i < data.length; i++) {
            let lead = new Lead();
            let lead_category = new LeadCategory();
            let lead_owner = new LeadOwner();
            let sourceEnquiry = new SourceEnquiry();

            lead_owner.id=data[i].leadOwner.id,
            lead_owner.name = data[i].leadOwner.name,
            lead_owner.mailId = data[i].leadOwner.mailId,
            lead_owner.active = data[i].leadOwner.active
            
            
            lead_category.id = data[i].leadCategory.id,
            lead_category.name = data[i].leadCategory.name,
            lead_category.active = data[i].leadCategory.active,

            sourceEnquiry.id = data[i].sourceEnquiry.id,
            sourceEnquiry.name = data[i].sourceEnquiry.name,
            sourceEnquiry.active = data[i].sourceEnquiry.active,

            lead.id = data[i].id,
            lead.leadNo = data[i].leadNo,
            lead.studentName = data[i].studentName,
            lead.fatherName = data[i].fatherName,
            lead.motherName = data[i].motherName,
            lead.fatherEmailId = data[i].fatherEmailId,
            lead.motherEmailId = data[i].motherEmailId,
            lead.bloodGroup = data[i].bloodGroup,
            lead.address = data[i].address,
            lead.telephone = data[i].telephone,
            lead.cell1 = data[i].cell1,
            lead.cell2 = data[i].cell2,
            lead.Gender = data[i].Gender,
            lead.dob = data[i].dob,
            lead.seekingAdmissionYear = data[i].seekingAdmissionYear,
            lead.dateForVisit = data[i].dateForVisit,
            lead.leadDate = data[i].leadDate,
            lead.description = data[i].description,
            lead.active = data[i].active
            lead.leadOwner= lead_owner;
            lead.leadCategory= lead_category;
            lead.sourceEnquiry= sourceEnquiry;
            

            this.leads.push(lead)
        }

        // this.leadOwner= data['leadOwner'];
        // this.leadCategory=data['leadCategory'];
        // this.sourceEnquiry= data['sourceEnquiry'];
        //this.leads = data;
        // this.leads['leadNo'] = data['leadNo'];
        // this.leads['studentName'] = data['leadName'];
        // this.leads['fatherName'] = data['fatherName'];
        // this.leads['motherName'] = data['motherName'];
        // this.leads['fatherEmailId'] = data['fatherEmailId'];
        // this.leads['motherEmailId'] = data['motherEmailId'];
        // this.leads['bloodGroup'] = data['bloodGroup'];
        // this.leads['address'] = data['address'];
        // this.leads['telephone'] = data['telephone'];
        // this.leads['cell1'] = data['cell1'];
        // this.leads['cell2'] = data['cell2'];
        // this.leads['Gender'] = data['Gender'];
        // this.leads['dob'] = data['dob'];
        // this.leads['seekingAdmissionYear'] = data['seekingAdmissionYear'];
        // this.leads['dateForVisit'] = data['dateForVisit'];
        // this.leads['leadOwner'] =this.leadOwner;
        // this.leads['leadCategory'] =this.leadCategory;
        // this.leads['sourceEnquiry'] =this.sourceEnquiry;
        // this.leads['leadDate'] = data['leadDate'];
        // this.leads['description'] = data['description'];
        // this.leads['active'] = data['active'];
      });
  }

  deleteLead(lead: Lead): void {
    this.leadService.deleteLead(lead.id)
      .subscribe( data => {
        this.leads = this.leads.filter(u => u !== lead);
      })
  };

  editLead(lead: Lead): void {
    localStorage.removeItem("editLeadId");
    localStorage.setItem("editLeadId", lead.id.toString());
    this.router.navigate(['edit-lead']);
  };

  addLead(): void {
    this.router.navigate(['add-lead']);
  };
}
