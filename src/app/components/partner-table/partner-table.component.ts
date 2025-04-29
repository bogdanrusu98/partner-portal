import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../services/partner.service';
import { Partner } from '../../models/partner.model';
import { NgIf, NgFor, NgClass } from '@angular/common';
@Component({
  selector: 'app-partner-table',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
  ],
  templateUrl: './partner-table.component.html',
  styleUrls: ['./partner-table.component.css']
})

export class PartnerTableComponent implements OnInit {
  partners: Partner[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe({
      next: (data) => {
        this.partners = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }
  partnersPerPage = 15;
currentPage = 1;

get paginatedPartners(): Partner[] {
  const start = (this.currentPage - 1) * this.partnersPerPage;
  const end = this.currentPage * this.partnersPerPage;
  return this.partners.slice(start, end);
}

get totalPages(): number {
  return Math.ceil(this.partners.length / this.partnersPerPage);
}

get showingFrom(): number {
  return (this.currentPage - 1) * this.partnersPerPage + 1;
}

get showingTo(): number {
  return Math.min(this.currentPage * this.partnersPerPage, this.partners.length);
}


setPage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
  }
}

// Sort
sortColumn: string = '';
sortDirection: 'asc' | 'desc' = 'asc';

setSort(column: keyof Partner) {
  if (this.sortColumn === column) {
    // Toggle asc/desc
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortColumn = column;
    this.sortDirection = 'asc';
  }

  this.partners.sort((a, b) => {
    const aVal = a[column];
    const bVal = b[column];

    if (aVal === bVal) return 0;

    if (this.sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });
}


}