import { LeadOwner } from "./lead-owner.model";
import { LeadCategory } from "./lead-category.model";
import { SourceEnquiry } from "./source-enquiry.model";
export class Lead {

  id: number;
  leadNo:number;
  studentName: string;
  fatherName: string;
  motherName: string;
  fatherEmailId: string;
  motherEmailId: string;
  bloodGroup: string;
  address: string;
  telephone: string;
  cell1: string;
  cell2: string;
  Gender: string;
  dob: string;
  seekingAdmissionYear: string;
  dateForVisit: string;
  leadOwner: LeadOwner;
  leadCategory: LeadCategory;
  sourceEnquiry: SourceEnquiry;
  leadDate: string;
  description: string;
  active: boolean
}
