import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
	@Output() select = new EventEmitter<any>();
	@Input() title: string;
	@Input() active = false;

	onSelect(): void {
		this.select.emit()
	}
}
