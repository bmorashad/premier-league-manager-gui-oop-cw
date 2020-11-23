import { Input, Component, ContentChildren, AfterViewInit, AfterContentInit, QueryList } from '@angular/core';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';

@Component({
	selector: 'modals',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent  implements AfterContentInit{
	@Input() title: string
	@Input() _id: string = 'modal'
	@ContentChildren("modal-container") modals: QueryList<ModalErrorComponent | ModalConfirmComponent>


	constructor() { }
	ngAfterContentInit() {

	}


}
