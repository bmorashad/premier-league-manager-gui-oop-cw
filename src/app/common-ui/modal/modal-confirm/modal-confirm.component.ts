import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
	selector: 'modal-confirm',
	templateUrl: './modal-confirm.component.html',
	styleUrls: ['./modal-confirm.component.css', '../modal.component.css']
})
export class ModalConfirmComponent extends ModalComponent {

	onResponse(event: Event) {
		if(event.target == document.getElementById("confirm")) {
			this.onConfirm();
		} else if(event.target == document.getElementById("cancel")) {
			this.onCloseResponse();
		} else if(event.target == document.querySelector(".modal-container")) {
			this.onCloseResponse();
		}
	}
	onConfirm() {
		this.response.emit(true)
	}

}
