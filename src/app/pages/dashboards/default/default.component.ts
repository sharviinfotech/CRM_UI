import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { RouterModule, Router } from '@angular/router';
import {
  Chart,
  ChartConfiguration,
  ChartDataset,
  ChartOptions,
  ChartType,
  registerables,
  ChartData
} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-smart-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule, RouterModule],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  activeTab: string = 'childoverview';
  OverviewCard = true;
  agentcard = false;
  dealscard = false;

  // --- KPI Card Data ---
  totalSales = '$5.2M';
  winRate = '16.92%';
  closeRate = '14.47%';
  avgDaysToClose = '60.70';
  pipelineValue = '$77.8M';
  openDeals = '1.6K';
  weightedValue = '$35.6M';
  avgOpenDealAge = '201.67';

  // --- Line Chart: Won Deals ---
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025',
      'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025'
    ],
    datasets: [
      {
        data: [600, 450, 700, 300, 500, 650, 400, 550, 500, 350, 600],
        label: 'Closed Value',
        fill: true,
        tension: 0.4,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.2)',
        pointBackgroundColor: '#ef4444',
        pointRadius: 5
      } as ChartDataset<'line'>
      ,
      {
        data: [40, 45, 35, 30, 50, 40, 45, 35, 40, 30, 50],
        label: 'Won Deals',
        fill: false,
        borderColor: '#22c55e',
        backgroundColor: '#22c55e',
        tension: 0.4,
        borderDash: [5, 5]
      } as ChartDataset<'line'>
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { boxWidth: 12 } },
      // MODIFIED: Set display to false to hide the chart title
      title: { display: false }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(200,200,200,0.2)' } }
    }
  };
  // --- Deals Projection Chart ---
  public lineData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Nov 2025', 'Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026',
      'Apr 2026', 'May 2026', 'Jun 2026', 'Jul 2026', 'Aug 2026', 'Sep 2026'
    ],
    datasets: [
      {
        data: [600, 450, 700, 300, 500, 650, 400, 550, 500, 350, 600],
        label: 'Projected value',
        fill: true,
        tension: 0.4,
        borderColor: '#3b82f6',
        backgroundColor: '#33067ce8',
        pointBackgroundColor: '#ef4444',
        pointRadius: 5
      } as ChartDataset<'line'>
      ,
      {
        data: [40, 45, 35, 30, 50, 40, 45, 35, 40, 30, 50],
        label: 'Deals due',
        fill: false,
        borderColor: '#ee0c0ce4',
        backgroundColor: '#ee0c0ce4',
        tension: 0.4,
        borderDash: [5, 5]
      } as ChartDataset<'line'>
    ]
  };

  public lineOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { boxWidth: 12 } },
      title: { display: false } // Change 'display' to false to hide the title
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(200,200,200,0.2)' } }
    }
  };
  // --- Sales Pipeline Donut Chart ---
  doughnutChartLabels: string[] = ['Lead In', 'Contact Made', 'Interview', 'Proposal', 'Negotiation', 'Closed Lost'];
  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
      data: [15, 25, 10, 20, 18, 12],
      backgroundColor: ['#4285F4', '#7E57C2', '#5C6BC0', '#EC407A', '#FFA726', '#EF5350'],
      borderWidth: 2
    }]
  };
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333', font: { size: 12 } } },
      title: { display: true, text: 'Sales Pipeline' }
    }
  };

  // --- Deal Loss Donut Chart ---
  doughnutLabels: string[] = ['Feature Limitations', 'Budget Constraints', 'Price Too High', 'Better Alternative', 'Lack of Urgency'];

  doughnutData: ChartData<'doughnut'> = {
    labels: this.doughnutLabels,
    datasets: [{
      data: [25, 15, 20, 25, 15],
      backgroundColor: [
        '#4285F4', // blue
        '#7E57C2', // purple
        '#5C6BC0', // indigo
        '#EC407A', // pink
        '#FFA726'  // orange
      ],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  };

  doughnutType: ChartType = 'doughnut';

  doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: { size: 12 }
        }
      },
      title: {
        display: true,
        text: 'Deal Loss Reasons',
        font: { size: 14 }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: ${value}%`;
          }
        }
      }
    }
  };


  // --- DOUGHNUT CHART CONFIGURATION ---

  ChartLabels: string[] = [
    'Product Fit',
    'Competative Pricing',
    'Strong Relationship',
    'Quick Response Time',
    // 'Brand Reputation',
    // 'After Sales Support'
  ];

  ChartData: ChartData<'doughnut'> = {
    // Assuming this correctly references the above array
    labels: this.ChartLabels,
    datasets: [{
      data: [30, 20, 35, 15,],
      backgroundColor: ['#4285F4', '#EC407A', '#5C6BC0', '#FFA726'],
      borderWidth: 2
    }]
  };

  ChartType: ChartType = 'doughnut';

  ChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        // Position 'top' tells Chart.js to lay items out horizontally
        position: 'top',
        // Setting 'align' to 'start' (left) often helps control flow
        align: 'start',
        labels: {
          color: '#333',
          font: { size: 12 },
          // You can slightly reduce boxWidth to fit more items on one line
          // boxWidth: 10 
        }
      },
      title: {
        display: true,
        text: 'Deal Won Reasons' // Based on your HTML this is overridden by the <h3>
      }
    }
  };

  // Chart Data
  public salesPipelineData: ChartData<'bar'> = {
    labels: [
      'Zara Khan', 'Lily Nguyen', 'Mia Davis', 'Mohammed Ali',
      'Oliver Kim', 'Amelia Wilson', 'John Smith', 'Antonio Costa',
      'Isabella Rossi', 'Sebastian Müller', 'Sophia Liu', 'Daniel Garcia'
    ],
    datasets: [
      { label: 'Closed Lost', data: [20, 25, 30, 28, 22, 24, 26, 27, 23, 25, 24, 28], backgroundColor: '#0a4ef0' },
      { label: 'Closed Won', data: [10, 15, 18, 14, 12, 13, 10, 11, 14, 12, 11, 13], backgroundColor: '#59b2fc' },
      { label: 'Contact Made', data: [30, 28, 25, 22, 30, 28, 29, 27, 31, 29, 28, 27], backgroundColor: '#6b5b95' },
      { label: 'Interview', data: [25, 20, 22, 24, 26, 25, 23, 20, 21, 22, 24, 23], backgroundColor: '#f7cac9' },
      { label: 'Lead In', data: [35, 32, 28, 30, 33, 31, 29, 34, 32, 33, 30, 31], backgroundColor: '#f7786b' },
      { label: 'Negotiation', data: [15, 18, 12, 14, 13, 11, 15, 12, 14, 13, 12, 11], backgroundColor: '#88d8b0' },
      { label: 'Proposal', data: [20, 15, 18, 17, 16, 15, 19, 18, 17, 16, 15, 14], backgroundColor: '#03c6fc' }
    ]
  };

  // Chart Options
  public salesPipelineOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 12 },
        },
      },
      title: {
        display: true,
        text: 'Sales Pipeline by Agent',
        font: { size: 16 },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { stepSize: 20 },
      },
      y: {
        stacked: true,
      },
    },
  };

  constructor(private router: Router) { }

  childcomponentNavigate(tab: string) {
    this.activeTab = tab;
    this.OverviewCard = tab === 'childoverview';
    this.agentcard = tab === 'childagents';
    this.dealscard = tab === 'childdeals';
  }
}
