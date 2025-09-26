import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lead } from './lead.model';
import { NgForm } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie'; // <-- Corrected import statement

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

  // Lottie animation properties
  showWonAnimation: boolean = false;
  lottieOptions: AnimationOptions = {
    path: '/assets/rocket-launch.json',
    loop: false,
    autoplay: false
  };
  private animationItem: any | null = null; // <-- Changed type to `any`
  private animationTimeout: any;

  constructor() { }

  ngOnInit(): void {
    this.leads = [];
  }

  ngOnDestroy(): void {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }

  // Called when the Lottie animation player is ready
  animationCreated(animationItem: any): void { // <-- Changed type to `any`
    this.animationItem = animationItem;
    this.animationItem.setSpeed(1.5);
    console.log('Lottie animation created:', animationItem);
  }

  // Optional: Called when the animation completes one loop
  animationLoopComplete(): void {
    console.log('Lottie animation loop complete.');
  }

  getLeadsByStatus(status: Lead['status']): Lead[] {
    return this.leads.filter(lead => lead.status === status);
  }

  onSelectLead(lead: Lead): void {
    this.selectedLead = lead;
    this.showLeadDetails = true;
    this.showWonAnimation = false;
    if (this.animationItem) {
      this.animationItem.stop();
    }
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }

  onUpdateStatus(newStatus: Lead['status']): void {
    if (this.selectedLead) {
      this.selectedLead.status = newStatus;

      if (newStatus === 'Won') {
        this.showWonAnimation = true;
        if (this.animationItem) {
          this.animationItem.play();
        }

        this.animationTimeout = setTimeout(() => {
          this.showWonAnimation = false;
          this.showLeadDetails = false;
          this.selectedLead = null;
          if (this.animationItem) {
            this.animationItem.stop();
          }
          this.animationTimeout = null;
        }, 2000);
      } else {
        this.showLeadDetails = false;
        this.selectedLead = null;
        this.showWonAnimation = false;
        if (this.animationItem) {
          this.animationItem.stop();
        }
        if (this.animationTimeout) {
          clearTimeout(this.animationTimeout);
          this.animationTimeout = null;
        }
      }
    }
  }

  onBackToList(): void {
    this.showLeadDetails = false;
    this.selectedLead = null;
    this.showWonAnimation = false;
    if (this.animationItem) {
      this.animationItem.stop();
    }
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
      this.animationTimeout = null;
    }
  }

  onNewLeadFormToggle(tab: string): void {
    console.log('tab', tab);
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
        amount: form.value.amount,
        status: this.addFormTab as Lead['status']
      };
      this.leads.push(newLead);
      this.addFormTab = null;
      form.resetForm();
    }
  }
}
