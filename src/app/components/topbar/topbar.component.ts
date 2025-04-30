import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import moment from 'moment';
import { MY_FORMATS } from '../../material-date-formats';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ErrorModalComponent } from '../error-modal.component';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [
    provideMomentDateAdapter(MY_FORMATS),
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  constructor(private dialog: MatDialog) {}
  openErrorModal() {
    this.dialog.open(ErrorModalComponent);
  }

  start = new FormControl(moment('2022-07-06'));
  end = new FormControl(moment('2022-08-05'));

}
