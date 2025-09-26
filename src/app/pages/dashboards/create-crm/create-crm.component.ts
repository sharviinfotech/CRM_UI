import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lead } from './lead.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-crm',
  templateUrl: './create-crm.component.html',
  styleUrls: ['./create-crm.component.css']
})
export class CreateCrmComponent implements OnInit, OnDestroy {
  leads: Lead[] = [];
  selectedLead: Lead | null = null;
  showLeadDetails = false;
  addFormTab: string | null = null;
  private readonly STAGES: Lead['status'][] = ['New', 'Qualified', 'Proposition', 'Won', 'Lost'];

  // Remark handling
  currentRemark: string = '';

  // Won image display
  showWonAnimation: boolean = false;
  private animationTimeout: any;

  constructor() {}

  ngOnInit(): void {
    this.leads = [];
  }

  ngOnDestroy(): void {
    if (this.animationTimeout) clearTimeout(this.animationTimeout);
  }

  // Get leads by status (latest first)
  getLeadsByStatus(status: Lead['status']): Lead[] {
    return this.leads
      .filter(lead => lead.status === status)
      .sort((a, b) => (b.stageInsertedAt || 0) - (a.stageInsertedAt || 0));
  }

  // Calculate total amount by status
  getTotalAmountByStatus(status: Lead['status']): number {
    return this.leads
      .filter(lead => lead.status === status && lead.amount)
      .reduce((sum, lead) => sum + (lead.amount || 0), 0);
  }

  // Select a lead to view details
  onSelectLead(lead: Lead): void {
    this.selectedLead = lead;
    this.showLeadDetails = true;
    this.showWonAnimation = false;

    // Load current stage remark
    this.currentRemark = lead.remarks?.[lead.status] || '';

    if (this.animationTimeout) clearTimeout(this.animationTimeout);
  }

  // Update lead status
  onUpdateStatus(newStatus: Lead['status']): void {
    if (!this.selectedLead) return;

    const currentIndex = this.STAGES.indexOf(this.selectedLead.status);
    const newIndex = this.STAGES.indexOf(newStatus);

    if (newIndex !== currentIndex + 1 && newStatus !== 'Lost') return;

    this.saveRemark();
    this.selectedLead.status = newStatus;
    this.selectedLead.stageInsertedAt = Date.now();

    if (newStatus === 'Won') {
      this.showWonAnimation = true;

      this.animationTimeout = setTimeout(() => {
        this.showWonAnimation = false;
        this.showLeadDetails = false;
        this.selectedLead = null;
        this.animationTimeout = null;
      }, 2000);

    } else if (newStatus === 'Lost') {
      this.showWonAnimation = false;
      this.animationTimeout = setTimeout(() => {
        this.showLeadDetails = false;
        this.selectedLead = null;
        this.animationTimeout = null;
      }, 2000);

    } else {
      this.currentRemark = this.selectedLead.remarks?.[newStatus] || '';
      this.showLeadDetails = false;
    }
  }

  // Back to list
  onBackToList(): void {
    this.showLeadDetails = false;
    this.selectedLead = null;
    this.showWonAnimation = false;
    if (this.animationTimeout) clearTimeout(this.animationTimeout);
  }

  // Toggle New Lead form
  onNewLeadFormToggle(tab: string): void {
    this.addFormTab = this.addFormTab === tab ? null : tab;
  }

  // Save new lead in New tab
  onSaveLead(form: NgForm): void {
    if (!form.valid) return;

    const newLead: Lead = {
      id: this.leads.length ? Math.max(...this.leads.map(l => l.id)) + 1 : 1,
      companyName: form.value.companyName,
      contactName: form.value.contactName,
      opportunityName: form.value.opportunityName,
      contactEmail: form.value.contactEmail,
      contactPhone: form.value.contactPhone,
      amount: form.value.amount,
      status: 'New',
      stageInsertedAt: Date.now(),
      remarks: {}
    };
    this.leads.push(newLead);
    this.addFormTab = null;
    form.resetForm();
  }

  // Save new lead and move to next stage
  onSaveAndNextLead(form: NgForm): void {
    if (!form.valid) return;

    const nextStatus = this.getNextStatus('New');
    const newLead: Lead = {
      id: this.leads.length ? Math.max(...this.leads.map(l => l.id)) + 1 : 1,
      companyName: form.value.companyName,
      contactName: form.value.contactName,
      opportunityName: form.value.opportunityName,
      contactEmail: form.value.contactEmail,
      contactPhone: form.value.contactPhone,
      amount: form.value.amount,
      status: nextStatus,
      stageInsertedAt: Date.now(),
      remarks: {}
    };
    this.leads.push(newLead);
    this.addFormTab = null;
    form.resetForm();
  }

  // Save current remark
  saveRemark(): void {
    if (!this.selectedLead) return;
    if (!this.selectedLead.remarks) this.selectedLead.remarks = {};
    this.selectedLead.remarks[this.selectedLead.status] = this.currentRemark;
  }

  // Save remark and move to next stage
  saveAndNext(): void {
    this.saveRemark();
    if (!this.selectedLead) return;
    const nextStatus = this.getNextStatus(this.selectedLead.status);
    this.onUpdateStatus(nextStatus);
  }

  // Get next pipeline stage
  private getNextStatus(currentStatus: Lead['status']): Lead['status'] {
    const stages: Lead['status'][] = ['New', 'Qualified', 'Proposition', 'Won'];
    const currentIndex = stages.indexOf(currentStatus);
    return currentIndex !== -1 && currentIndex < stages.length - 1
      ? stages[currentIndex + 1]
      : currentStatus;
  }
}
