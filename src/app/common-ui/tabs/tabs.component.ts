import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

	// contentChildren are set
	ngAfterContentInit() {
		// get all active tabs
		let activeTabs = this.tabs.filter((tab)=>tab.active);

		// if there is no active tab set, activate the first
		if(activeTabs.length === 0) {
			this.selectTab(this.tabs.first);
		}
	}

	selectTab(tab: TabComponent){
		tab.onSelect()
		this.tabs.toArray().forEach(tab => tab.active = false);
		tab.active = true;
	}
}

