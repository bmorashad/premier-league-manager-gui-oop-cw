import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
	@Input() icon: string;
	@Output() click = new EventEmitter<Event>();

	onClick(event: Event): void {
		this.click.emit(event);
	}
}
