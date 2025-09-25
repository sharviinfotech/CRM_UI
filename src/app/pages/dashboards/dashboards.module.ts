import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { LeadCaptureComponent } from './lead-capture/lead-capture.component';
import { LeadQualificationComponent } from './lead-qualification/lead-qualification.component';
import { LeadProfileComponent } from './lead-profile/lead-profile.component';
import { LeadAssignmentComponent } from './lead-assignment/lead-assignment.component';
import { OpportunityManagementComponent } from './opportunity-management/opportunity-management.component';
import { CreateCrmComponent } from './create-crm/create-crm.component';
import { ChildoverviewComponent } from './childoverview/childoverview.component';
import { ChildagentsComponent } from './childagents/childagents.component';
import { ChilddealsComponent } from './childdeals/childdeals.component';






// Standalone components (import them directly)











@NgModule({
  imports: [
    CommonModule,
    FormsModule, // <-- Add this to your imports array
    ReactiveFormsModule,
    DashboardsRoutingModule,
    BsDatepickerModule.forRoot(),
    NgxSpinnerModule,

    // Standalone components go here
    
    
 
   
    
  ],
  providers: [BsDropdownConfig],
  declarations: [
    // CooisComponent
  
    
  
    // Co11Component
  
    
  
    // LeadCaptureComponent
  
    // LeadQualificationComponent
  
    // LeadProfileComponent
  
    // LeadAssignmentComponent
  
    // OpportunityManagementComponent

  
    CreateCrmComponent,
    // ChilddealsComponent,
    // ChildagentsComponent,
    // ChildoverviewComponent,
    
  ]
})
export class DashboardsModule {}
