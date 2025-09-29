import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { registerables } from 'chart.js';
import { Router, RouterModule } from '@angular/router';
Chart.register(...registerables);
import { ChartOptions, ChartType, ChartDataset ,Chart} from 'chart.js';

@Component({
  selector: 'app-smart-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule, RouterModule],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  activeTab: string = 'childoverview';
  OverviewCard:boolean= true;
  agentcard: boolean;
  dealscard: boolean;
  // --- KPI Card Data ---
  totalSales = '$5.2M';
  winRate = '16.92%';
  closeRate = '14.47%';
  avgDaysToClose = '60.70';
  pipelineValue = '$77.8M';
  openDeals = '1.6K';
  weightedValue = '$35.6M';
  avgOpenDealAge = '201.67';

  // --- Line Chart Data: Won deals (last 12 months) ---
  wonDealsChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  wonDealsChartLabels: string[] = ['Oct 24', 'Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'Mar 25', 'Apr 25', 'May 25', 'Jun 25', 'Jul 25', 'Aug 25', 'Sep 25'];
  wonDealsChartType: ChartType = 'line';
  wonDealsChartData: ChartDataset[] = [
    {
      data: [350, 420, 500, 410, 550, 600, 520, 480, 550, 650, 700, 680],
      label: 'Closed value',
      borderColor: '#4d87f5',
      backgroundColor: 'rgba(77, 135, 245, 0.2)',
      fill: true
    },
    {
      data: [5, 6, 8, 7, 9, 10, 8, 7, 9, 11, 12, 11],
      label: 'Won deals',
      borderColor: '#1e3c72',
      backgroundColor: 'rgba(30, 60, 114, 0.2)',
      fill: true
    }
  ];

  // --- Line Chart Data: Deals projection (future 12 months) ---
  dealsProjectionChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  dealsProjectionChartLabels: string[] = ['Sep 25', 'Oct 25', 'Nov 25', 'Dec 25', 'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26', 'May 26', 'Jun 26', 'Jul 26', 'Aug 26'];
  dealsProjectionChartType: ChartType = 'line';
  dealsProjectionChartData: ChartDataset[] = [
    {
      data: [2500, 2800, 3100, 3000, 3300, 3500, 3200, 3000, 3400, 3600, 3800, 3500],
      label: 'Projected value',
      borderColor: '#48c9b0',
      backgroundColor: 'rgba(72, 201, 176, 0.2)',
      fill: true
    },
    {
      data: [150, 160, 180, 170, 190, 200, 180, 170, 190, 210, 220, 200],
      label: 'Deals due',
      borderColor: '#2e8b57',
      backgroundColor: 'rgba(46, 139, 87, 0.2)',
      fill: true
    }
  ];

  // --- Donut Chart Data: Sales pipeline ---
salesPipelineChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'right' }
  }
};
  salesPipelineChartLabels: string[] = ['Lead in', 'Contact Made', 'Interview', 'Negotiation', 'Proposal', 'Closed Lost', 'Closed Won'];
  salesPipelineChartData: ChartDataset[] = [
    {
      data: [28.65, 16.46, 14.85, 5.86, 9.84, 21.32, 3.02],
      backgroundColor: ['#48c9b0', '#cd6155', '#e67e22', '#9b59b6', '#3498db', '#34495e', '#2ecc71']
    }
  ];
  salesPipelineChartType: ChartType = 'doughnut';

  // --- Donut Chart Data: Deal loss reasons ---
   dealLossChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'right' }
    }
  };
  dealLossChartLabels: string[] = ['Lack of urgency', 'Feature limitations', 'Budget constraints', 'Price too high', 'Better offer'];
  dealLossChartData: ChartDataset[] = [
    {
      data: [15.2, 32.87, 21.1, 18.48, 12.35],
      backgroundColor: ['#f1c40f', '#e67e22', '#3498db', '#c0392b', '#7f8c8d']
    }
  ];
  dealLossChartType: ChartType = 'doughnut';



  ngOnInit(): void { }
  constructor(private router: Router) {

  }

  childcomponentNavigate(tab) {
    this.activeTab = tab;
  if (tab === 'childoverview') {
    // this.router.navigate(['childoverview']);
    this.OverviewCard = true
    this.agentcard = false
    this.dealscard = false
  } else if (tab === 'childagents') {
    // this.router.navigate(['childagents']);
     this.OverviewCard = false
    this.agentcard = true
    this.dealscard = false
  } else if (tab === 'childdeals') {
    // this.router.navigate(['childdeals']);
      this.OverviewCard = false
    this.agentcard = false
    this.dealscard = true
  }

  }
}
