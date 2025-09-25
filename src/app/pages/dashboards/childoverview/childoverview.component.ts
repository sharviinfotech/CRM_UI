import { Component } from '@angular/core';


@Component({
  selector: 'app-childoverview',
  templateUrl: './childoverview.component.html',
  styleUrl: './childoverview.component.css'
})
export class ChildoverviewComponent {
   // Placeholder for KPI data
  kpiData = [
    { label: 'Total sales', value: '5.2M', color: 'purple' },
    { label: 'Win rate', value: '16.92%', color: 'blue' },
    // ... add all other KPI data here
  ];

  // Placeholder for chart data
  salesPipelineData: any;
  wonDealsData: any;
  dealLossReasonsData: any;
  dealsProjectionData: any;

  // Placeholder for filter data (e.g., dropdown options)
  dealOwners: string[] = ['All', 'John Doe', 'Jane Smith'];
  dealStages: string[] = ['All', 'Negotiation', 'Proposal', 'Interview', 'Contact Made'];
  pipelines: string[] = ['All', 'Pipeline A', 'Pipeline B'];
  dealLabels: string[] = ['All', 'Label 1', 'Label 2'];

  constructor() { }

  ngOnInit(): void {
    // In a real application, you would fetch this data from an API
    this.salesPipelineData = this.getSalesPipelineData();
    this.wonDealsData = this.getWonDealsData();
    this.dealLossReasonsData = this.getDealLossReasonsData();
    this.dealsProjectionData = this.getDealsProjectionData();
  }

  // Example functions to simulate data fetching for charts
  private getSalesPipelineData(): any {
    // This would be the data for the donut chart (Sales pipeline)
    return {
      labels: ['Negotiation', 'Proposal', 'Interview', 'Contact Made', 'Closed Lost', 'Lead In'],
      datasets: [{
        data: [5.06, 9.64, 14.89, 18.49, 21.32, 28.63],
        backgroundColor: ['#f8b4a2', '#a2d6f8', '#8f8fdf', '#5d5d8e', '#1c4966', '#3b94d9']
      }]
    };
  }

  private getWonDealsData(): any {
    // This would be the data for the line chart (Won deals)
    return {
      labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025'],
      datasets: [
        {
          label: 'Closed value',
          data: [500000, 300000, 700000, 400000, 550000, 350000, 500000, 800000, 450000, 600000, 500000, 700000],
          borderColor: '#1e90ff',
          fill: false
        },
        {
          label: 'Won deals',
          data: [5, 3, 7, 4, 5.5, 3.5, 5, 8, 4.5, 6, 5, 7],
          borderColor: '#a2d6f8',
          fill: false
        }
      ]
    };
  }

  private getDealLossReasonsData(): any {
    // This would be the data for the donut chart (Deal loss reasons)
    return {
      labels: ['Lack of urgency', 'Better offer', 'Price too high', 'Budget constraints', 'Feature limitations'],
      datasets: [{
        data: [13.41, 14.07, 18.49, 21.1, 32.93],
        backgroundColor: ['#f8b4a2', '#a2d6f8', '#8f8fdf', '#1c4966', '#3b94d9']
      }]
    };
  }

  private getDealsProjectionData(): any {
    // This would be the data for the line chart (Deals projection)
    return {
      labels: ['Sep 2025', 'Nov 2025', 'Jan 2026', 'Mar 2026', 'May 2026', 'Jul 2026', 'Sep 2026'],
      datasets: [
        {
          label: 'Projected value',
          data: [3500, 2500, 4000, 3000, 3500, 2800, 3800],
          borderColor: '#1e90ff',
          fill: false
        },
        {
          label: 'Deals due',
          data: [150, 100, 180, 120, 160, 110, 170],
          borderColor: '#a2d6f8',
          fill: false
        }
      ]
    };
  }

}
