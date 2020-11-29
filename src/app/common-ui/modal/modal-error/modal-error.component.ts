import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { ModalComponent } from '../modal.component';
import { ModalAction } from '../types';

@Component({
	selector: 'modal-error',
	templateUrl: './modal-error.component.html',
	styleUrls: ['./modal-error.component.css', '../modal.component.css']
})
export class ModalErrorComponent extends ModalComponent implements OnInit{
	status: Observable<ModalAction>; 


	onResponse(event: Event) {
		if(event.target == document.getElementById("close")) {
			this.onCloseResponse();
		} 
		else if(event.target == document.querySelector(".modal-container")) {
			this.onCloseResponse();
		}
	}

}
