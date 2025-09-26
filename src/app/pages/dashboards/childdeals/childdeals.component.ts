import { Component } from '@angular/core';

interface Deal {
  id: number;
  title: string;
  owner: string;
  stage: string;
  status: 'won' | 'open' | 'lost'; // Assuming these are the main statuses
  label: string;
  value: string; // Stored as string to keep the 'K'
  probability: string;
  productsCount: number;
  rottenDays: number | null; // null if no rotten days
}
@Component({
  selector: 'app-childdeals',
  templateUrl: './childdeals.component.html',
  styleUrl: './childdeals.component.css'
})
export class ChilddealsComponent {
deals: Deal[] = [
    { id: 4999, title: 'reddit deal', owner: 'Mia Davis', stage: 'Closed Won', status: 'won', label: 'New Business', value: '956.0K', probability: '100.00%', productsCount: 2, rottenDays: null },
    { id: 4817, title: 'Coupler.io deal', owner: 'Hiroshi Tanaka', stage: 'Lead In', status: 'open', label: 'Partnership', value: '368.5K', probability: '50.00%', productsCount: 6, rottenDays: null },
    { id: 4274, title: 'Dell deal', owner: 'John Smith', stage: 'Interview', status: 'open', label: 'Upsell', value: '368.0K', probability: '30.00%', productsCount: 7, rottenDays: 32 },
    { id: 5390, title: 'Uber deal', owner: 'Sophia Liu', stage: 'Lead In', status: 'open', label: 'Lead', value: '363.0K', probability: '30.00%', productsCount: 2, rottenDays: 31 },
    { id: 5993, title: 'IBM deal', owner: 'Mohammed Ali', stage: 'Lead In', status: 'open', label: 'Partnership', value: '363.0K', probability: '40.00%', productsCount: 6, rottenDays: null },
    { id: 1333, title: 'square deal', owner: 'Ahmed Hassan', stage: 'Contact Made', status: 'open', label: 'Partnership', value: '362.5K', probability: '40.00%', productsCount: 7, rottenDays: null },
    { id: 5377, title: 'facebook deal', owner: 'John Smith', stage: 'Contact Made', status: 'open', label: 'Remarketing', value: '354.5K', probability: '40.00%', productsCount: 7, rottenDays: 4 },
    { id: 527, title: 'Dell deal', owner: 'Oliver Kim', stage: 'Lead In', status: 'open', label: 'Partnership', value: '352.0K', probability: '60.00%', productsCount: 4, rottenDays: null },
    { id: 1679, title: 'reddit deal', owner: 'Antonio Costa', stage: 'Proposal', status: 'open', label: 'New Business', value: '350.0K', probability: '30.00%', productsCount: 1, rottenDays: null },
    { id: 3288, title: 'PayPal deal', owner: 'Zara Khan', stage: 'Lead In', status: 'open', label: 'Upsell', value: '348.5K', probability: '60.00%', productsCount: 6, rottenDays: null },
    { id: 740, title: 'PayPal deal', owner: 'Antonio Costa', stage: 'Lead In', status: 'open', label: 'Remarketing', value: '338.5K', probability: '30.00%', productsCount: 6, rottenDays: null },
    { id: 4009, title: 'airbnb deal', owner: 'Zara Khan', stage: 'Lead In', status: 'open', label: 'New Business', value: '330.5K', probability: '50.00%', productsCount: 2, rottenDays: null },
    { id: 2950, title: 'Zoom deal', owner: 'Antonio Costa', stage: 'Contact Made', status: 'open', label: 'Partnership', value: '325.5K', probability: '60.00%', productsCount: 4, rottenDays: null },
    { id: 934, title: 'Oracle deal', owner: 'Sebastian Müller', stage: 'Closed Won', status: 'won', label: 'New Business', value: '321.0K', probability: '100.00%', productsCount: 7, rottenDays: null },
    { id: 901, title: 'slack deal', owner: 'Ahmed Hassan', stage: 'Negotiation', status: 'open', label: 'Remarketing', value: '317.0K', probability: '70.00%', productsCount: 2, rottenDays: null },
    { id: 2434, title: 'google deal', owner: 'John Smith', stage: 'Negotiation', status: 'open', label: 'Remarketing', value: '316.5K', probability: '40.00%', productsCount: 2, rottenDays: 43 },
    { id: 1189, title: 'Etsy deal', owner: 'Mia Davis', stage: 'Contact Made', status: 'open', label: 'Remarketing', value: '313.0K', probability: '60.00%', productsCount: 4, rottenDays: null },
    { id: 5786, title: 'Dell deal', owner: 'Sebastian Müller', stage: 'Lead In', status: 'open', label: 'Remarketing', value: '308.5K', probability: '70.00%', productsCount: 2, rottenDays: null },
    { id: 590, title: 'Cisco deal', owner: 'Emma Chen', stage: 'Closed Won', status: 'won', label: 'Remarketing', value: '304.5K', probability: '100.00%', productsCount: 2, rottenDays: null },
    { id: 4133, title: 'SpaceX deal', owner: 'Hiroshi Tanaka', stage: 'Lead In', status: 'open', label: 'Remarketing', value: '300.0K', probability: '50.00%', productsCount: 6, rottenDays: 52 },
    { id: 284, title: 'PayPal deal', owner: 'Daniel Garcia', stage: 'Interview', status: 'open', label: 'New Business', value: '297.0K', probability: '70.00%', productsCount: 3, rottenDays: 11 },
  ];
}