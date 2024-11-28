import { Component } from '@angular/core';
import { ScanService } from '../../service/scan.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private readonly service : ScanService){}

getExcel() {
this.service.downloadExcel()
}

}
