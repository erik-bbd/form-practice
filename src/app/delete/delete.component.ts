import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Input() item?: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onDelete.emit(this.item)
  }

}
