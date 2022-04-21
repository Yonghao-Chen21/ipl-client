import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { IplstatService } from '../iplstat/service/iplstat.service';

@Component({
  selector: 'app-ipl-stat-team-role',
  templateUrl: './ipl-stat-team-role.component.html',
  styleUrls: ['./ipl-stat-team-role.component.css']
})
export class IplStatTeamRoleComponent implements OnInit {


  teamAmountChartData:any[] = []
  roleAmountPieChartData:any[]=[]
  
 constructor(private iplstatService:IplstatService) {
  
 }

  
  ngOnInit(): void {
      
      this.drawBarChart();
      this.drawPieChart();
  }

  drawBarChart(){
      this.iplstatService.getTeamAmountDetails().subscribe(data=>{
        this.teamAmountChartData.push(["Label","Amount"]);
        data.forEach(ele=>{
        this.teamAmountChartData.push([ele['name'],ele['amount']]);
      })
     })
      
  }
  drawPieChart(){
    this.iplstatService.getRoleAmountDetails().subscribe(data=>{
      this.roleAmountPieChartData.push(["Role","Amount"]);
      data.forEach(ele=>{
      console.log(ele);  
      this.roleAmountPieChartData.push([ele['role'],ele['amount']]);
    })
   })
  }
  

  public columnChart: GoogleChartInterface = {  
    chartType: 'ColumnChart',
    dataTable: this.teamAmountChartData,
    options: {title: 'Countries'}
};

public pieChart: GoogleChartInterface = {
  chartType: GoogleChartType.PieChart,
  dataTable:this.roleAmountPieChartData,
  //firstRowIsData: true,
  options: {'title': 'Tasks'},
};
  

}