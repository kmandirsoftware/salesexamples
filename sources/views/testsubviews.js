import {plugins} from "webix-jet";
import {JetView} from "webix-jet";

export default class MyView extends JetView{
	config(){

		const submenu1 = {
			view:"sidebar", id:"top:menu",
			data:[
			{ value:"testview", id:"testview", icon:"wxi-columns"}
			]
		};
		const uisub = {
			rows:[
				header,
				{ type:"space", cols:[
					menu,
					{ $subview:true } 
				]}
			]
		};

		return uisub;
	}
	init(view){

		this.use(plugins.Menu, this.$$("navigation"));
	}
}