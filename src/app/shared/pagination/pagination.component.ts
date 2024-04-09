import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {ListCar} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() data: ListCar[];
  @Input() pageSize: number = 4;
  @Output() pageChange: EventEmitter<ListCar[]> = new EventEmitter<ListCar[]>();

  totalPages: number = 0;
  currentPage: number = 1;
  visibleItems: ListCar[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['pageSize']) {
      this.totalPages = Math.ceil(this.data.length / this.pageSize);
      this.updateVisibleItems();
    }
  }

  updateVisibleItems(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.data.length);
    this.visibleItems = this.data.slice(startIndex, endIndex);
    this.pageChange.emit(this.visibleItems);
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.updateVisibleItems();
    }
  }

  get totalPagesArray(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
