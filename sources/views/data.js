import {JetView} from "webix-jet";
import {programdata} from "models/records";

export default class DataView extends JetView{
	config(){
		return { view:"datatable", autoConfig:true };
	}
	init(view){
		view.parse(programdata);
	}
}