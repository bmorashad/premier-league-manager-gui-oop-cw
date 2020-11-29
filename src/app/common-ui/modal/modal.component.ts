import { Input, Component,  QueryList, Output, EventEmitter, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
// import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
// import { ModalErrorComponent } from './modal-error/modal-error.component';
import { ModalService } from './modal.service';
import { ModalAction } from './types';

@Component({
	selector: 'modals',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent  implements OnInit{
	@Output() response = new EventEmitter<boolean>();
	@Input() title: string
	@Input() _id: string = 'modal'
	status: Observable<ModalAction>;
	show: boolean = false;
	// @ContentChildren("modal-container") modals: QueryList<ModalErrorComponent | ModalConfirmComponent>

	onCloseResponse() {
		this.response.emit(false);
		this.modalService.close(this._id);
	}
	ngOnInit() : void {
		this.status = this.modalService._watch();
		this.status.subscribe(action => {
			if(action[0] == 'open' && action[1] == this._id) {
				this.show = true;
			} else if(action[0] == 'close' && action[1] == this._id) {
				this.show = false;
			} else if(action[0] == 'toggle' && action[1] == this._id) {
				this.show = !this.show;
			}
		})
	}

	constructor(private modalService: ModalService) { }
	// ngAfterContentInit() { }


}
