import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PartnerTableComponent } from './components/partner-table/partner-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PartnerTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'partner-portal';
}
