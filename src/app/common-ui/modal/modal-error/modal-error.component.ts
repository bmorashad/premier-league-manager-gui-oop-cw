import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
	selector: 'modal-error',
	templateUrl: './modal-error.component.html',
	styleUrls: ['./modal-error.component.css', '../modal.component.css']
})
export class ModalErrorComponent extends ModalComponent {

	onResponse(event: any) {
		const isContainer = event.target.classList.contains('modal-container')
		const isWrapper = event.target.classList.contains('modal-wrapper')
		if(event.target == document.getElementById("close")) {
			this.onCloseResponse();
		} 
		else if(isWrapper || isContainer) {
			this.onCloseResponse();
		}
	}

}
