import {JetView} from "webix-jet";
import {getFacilities} from "models/facilities";

export default class UserMgrView extends JetView{
	config(){

	   return {
	   			view: "usermanager",
	   			url: "https://docs.webix.com/usermanager-backend/"
		}
	}
}