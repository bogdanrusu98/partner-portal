import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [MatDialogModule],
  template: `
    <div class="p-6 text-center">
      <h2 class="text-lg font-semibold text-red-600 mb-2">Error</h2>
      <p>This action is unavailable</p>
    </div>
  `
})
export class ErrorModalComponent {}
