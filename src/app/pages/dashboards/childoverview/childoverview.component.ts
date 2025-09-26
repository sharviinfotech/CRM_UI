import { Component } from '@angular/core';
import Chart from 'chart.js/auto'; // Import Chart.js

@Component({
  selector: 'app-childoverview',
  templateUrl: './childoverview.component.html',
  styleUrl: './childoverview.component.css'
})
export class ChildoverviewComponent {
   // Placeholder for KPI data
  // Metric Data
  totalSales = 5.2;
  winRate = 16.92;
  closeRate = 14.47;
  avgDaysToClose = 60.7;
  pipelineValue = 77.8;
  openDeals = 1600;
  weightedValue = 35.6;
  avgOpenDealAge = 201.67;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderWonDealsChart();
    this.renderDealsProjectionChart();
    this.renderSalesPipelineChart();
    this.renderDealLossChart();
  }

  renderWonDealsChart() {
    new Chart("wonDealsChart", {
      type: 'line',
      data: {
        labels: ['Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025'],
        datasets: [
          {
            label: 'Closed Value',
            data: [600, 400, 700, 300, 200, 350, 600, 500, 480, 300, 580],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0,123,255,0.2)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Won Deals',
            data: [8, 5, 9, 3, 4, 5, 8, 6, 5, 4, 7],
            borderColor: '#28a745',
            backgroundColor: 'rgba(40,167,69,0.2)',
            tension: 0.4,
            fill: true
          }
        ]
      }
    });
  }

  renderDealsProjectionChart() {
    new Chart("dealsProjectionChart", {
      type: 'line',
      data: {
        labels: ['Oct 2025', 'Nov 2025', 'Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026', 'Jul 2026', 'Aug 2026', 'Sep 2026'],
        datasets: [
          {
            label: 'Projected Value',
            data: [2000, 4000, 3500, 3000, 3100, 3200, 2800, 2600, 3100, 2900, 2700, 2200],
            borderColor: '#ffc107',
            backgroundColor: 'rgba(255,193,7,0.2)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Deals Due',
            data: [100, 180, 150, 140, 130, 150, 160, 120, 140, 130, 120, 100],
            borderColor: '#17a2b8',
            backgroundColor: 'rgba(23,162,184,0.2)',
            tension: 0.4,
            fill: true
          }
        ]
      }
    });
  }

  renderSalesPipelineChart() {
    new Chart("salesPipelineChart", {
      type: 'doughnut',
      data: {
        labels: ['Lead In', 'Contact Made', 'Interview', 'Proposal', 'Negotiation', 'Closed Lost'],
        datasets: [{
          data: [26.85, 18.46, 14.86, 9.84, 5.06, 21.32],
          backgroundColor: ['#007bff', '#6610f2', '#6f42c1', '#e83e8c', '#fd7e14', '#dc3545']
        }]
      }
    });
  }

  renderDealLossChart() {
    new Chart("dealLossChart", {
      type: 'doughnut',
      data: {
        labels: ['Feature limitations', 'Budget constraints', 'Price too high', 'Better alternative', 'Lack of urgency'],
        datasets: [{
          data: [32.97, 21.1, 18.46, 14.07, 13.41],
          backgroundColor: ['#dc3545', '#ffc107', '#fd7e14', '#6f42c1', '#20c997']
        }]
      }
    });
  } 
}