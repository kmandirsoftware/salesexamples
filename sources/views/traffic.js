import {JetView} from "webix-jet";


export default class TrafficView extends JetView{
	config(){
		return {
			type:"clean", rows:[
				{ type:"header", template:"Traffic"}
				]
		}
	}
}