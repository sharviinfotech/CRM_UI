import { Component, OnInit } from '@angular/core';
import { Lead } from './lead.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-crm',
  templateUrl: './create-crm.component.html',
  styleUrls: ['./create-crm.component.css']
})
export class CreateCrmComponent implements OnInit {
  leads: Lead[] = [];
  selectedLead: Lead | null = null;
  showLeadDetails = false;
  addFormTab: string | null = null;

  constructor() { }

  ngOnInit(): void {
    // For demonstration, populate with some initial data
    this.leads = [
      { id: 1, companyName: 'ABC Company', contactName: 'John Doe', opportunityName: 'ABC\'s opportunity', contactEmail: 'john@abc.com', contactPhone: '123-456-7890', status: 'New' },
      { id: 2, companyName: 'DCB Company', contactName: 'Jane Smith', opportunityName: 'DCB\'s opportunity', contactEmail: 'jane@dcb.com', contactPhone: '987-654-3210', amount: 1000, status: 'Qualified' },
      { id: 3, companyName: 'XYZ Corp', contactName: 'Peter Jones', opportunityName: 'XYZ\'s opportunity', contactEmail: 'peter@xyz.com', contactPhone: '555-123-4567', amount: 20000, status: 'Won' },
    ];
  }

  getLeadsByStatus(status: Lead['status']): Lead[] {
    return this.leads.filter(lead => lead.status === status);
  }

  onSelectLead(lead: Lead): void {
    this.selectedLead = lead;
    this.showLeadDetails = true;
  }

  onUpdateStatus(newStatus: Lead['status']): void {
    if (this.selectedLead) {
      this.selectedLead.status = newStatus;
      this.showLeadDetails = false;
      this.selectedLead = null;
    }
  }

  onBackToList(): void {
    this.showLeadDetails = false;
    this.selectedLead = null;
  }

  onNewLeadFormToggle(tab: string): void {
    console.log('tab',tab);
    this.addFormTab = this.addFormTab === tab ? null : tab;

  }

  onAddLead(form: NgForm): void {
    if (form.valid) {
      const newLead: Lead = {
        id: this.leads.length > 0 ? Math.max(...this.leads.map(l => l.id)) + 1 : 1,
        companyName: form.value.companyName,
        contactName: form.value.contactName,
        opportunityName: form.value.opportunityName,
        contactEmail: form.value.contactEmail,
        contactPhone: form.value.contactPhone,
        amount: form.value.amount, // <-- This is the missing line
        status: this.addFormTab as Lead['status']
      };
      this.leads.push(newLead);
      this.addFormTab = null;
      form.resetForm();
    }
  }
}