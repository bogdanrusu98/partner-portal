import { Component } from '@angular/core';
import { PartnerTableComponent } from './components/partner-table/partner-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PartnerTableComponent,
    SidebarComponent,
    TopbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partner-portal';

}
