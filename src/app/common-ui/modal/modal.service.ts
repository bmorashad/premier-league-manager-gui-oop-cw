import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs'
import { ModalAction } from './types'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
	private display: Subject<ModalAction> = new Subject();

	_watch(): Observable<ModalAction> {
		return this.display.asObservable();
	}
	toggle(id: string): void{
		this.display.next(['toggle', id]);
	}
	open(id: string): void{
		this.display.next(['open', id]);
	}
	close(id: string): void {
		this.display.next(['close', id]);
	}
}
