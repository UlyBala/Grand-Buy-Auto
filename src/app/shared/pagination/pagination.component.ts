import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TypeAuto} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit{
  @Input() data: TypeAuto[]
  @Input() notesOnPage: number
  @Output() eventChange = new EventEmitter<TypeAuto[]>()

  public notes: TypeAuto[];
  get totalPages(): number {
    return Math.ceil(this.data.length / this.notesOnPage);
  }

  get pages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  ngOnInit() {
    this.onChangePage(1)
  }

  onChangePage(pageNum: number) {
    let start = (pageNum - 1) * this.notesOnPage;
    let end = start + this.notesOnPage;
    this.notes = this.data.slice(start, end)

    this.eventChange.emit(this.notes)
  }
}
