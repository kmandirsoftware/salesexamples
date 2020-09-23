import {plugins} from "webix-jet";
import {JetView} from "webix-jet";

export default class MyView extends JetView{
	config(){

		return{
			
			cols:[
				{
					localId:"navigation",
					view:"sidebar",
					data:[
	{
		"value": "testitem",
		"id": "traffic"
	}
],
					width:250
					
				},
				{$subview:true}
			]
		};
	}
	init(view){

		this.use(plugins.Menu, this.$$("navigation"));
	}
}