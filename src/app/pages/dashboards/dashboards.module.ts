import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { LeadCaptureComponent } from './lead-capture/lead-capture.component';
import { LeadQualificationComponent } from './lead-qualification/lead-qualification.component';
import { LeadProfileComponent } from './lead-profile/lead-profile.component';
import { LeadAssignmentComponent } from './lead-assignment/lead-assignment.component';
import { OpportunityManagementComponent } from './opportunity-management/opportunity-management.component';
import { CreateCrmComponent } from './create-crm/create-crm.component';





// Standalone components (import them directly)











@NgModule({
  imports: [
    CommonModule,
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

  
    //CreateCrmComponent
  ]
})
export class DashboardsModule {}
