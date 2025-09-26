export interface Lead {
  id: number;
  companyName: string;
  contactName: string;
  opportunityName: string;
  contactEmail: string;
  contactPhone: string;
  amount?: number; // Optional, as some leads might not have a specified amount
  status: 'New' | 'Qualified' | 'Proposition' | 'Won' | 'Lost';
  stageInsertedAt?: number;
  remarks?: {
    New?: string;
    Qualified?: string;
    Proposition?: string;
  };
}