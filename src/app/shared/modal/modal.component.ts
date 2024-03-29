import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isOpen: boolean;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.closeModal.emit();
  }
}
