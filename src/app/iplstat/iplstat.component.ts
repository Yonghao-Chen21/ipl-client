import { Component, OnInit } from '@angular/core'
import { GoogleChartInterface, GoogleChartType, Ng2GoogleChartsModule } from 'ng2-google-charts'
import { IplstatService } from './service/iplstat.service'
import { ChartSelectEvent } from 'ng2-google-charts';


@Component({
  selector: 'app-iplstat',
  templateUrl: './iplstat.component.html',
  styleUrls: ['./iplstat.component.css']
})
export class IplstatComponent implements OnInit {

  constructor(private iplstatService: IplstatService) { }
  teamAmountChartData: any[] = []
  roleAmountPieChartData: any[] = []
  players: any[] = []
  Label:any[] = []
  ngOnInit(): void {
    this.loadBarChart()
  }
  
  public select(event: ChartSelectEvent) {
    this.Label = event.selectedRowValues
    this.roleAmountPieChartData.splice(0,this.roleAmountPieChartData.length)
    this.loadPieChart()
    this.players.splice(0,this.players.length)
    this.loadPlayers()
  }

  loadPlayers(){
    this.iplstatService.getPlayers(this.Label[0]).subscribe(data=>{
      data.forEach(ele => {
        this.players = data
      })

    })
  }

  loadBarChart() {
    this.iplstatService.getTeamAmountDetails().subscribe(data => {
      this.teamAmountChartData.push(["label", "amount"])
      data.forEach(ele => {
        this.teamAmountChartData.push([ele['label'], ele['amount']])
      })
    })
  }

  loadPieChart() {
    this.iplstatService.getRoleAmountDetails(this.Label[0]).subscribe(data => {
      this.roleAmountPieChartData.push(["role", "amount"])
      data.forEach(ele => {
        this.roleAmountPieChartData.push([ele['role'], ele['amount']])
      })
    })
  }

  public columnChart: GoogleChartInterface = {  // use :any or :GoogleChartInterface
    chartType: 'ColumnChart',
    dataTable: this.teamAmountChartData,
    options: { title: 'Label' }
  };

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: this.roleAmountPieChartData,
    //firstRowIsData: true,
    options: { 'title': 'Role' },
  }

}