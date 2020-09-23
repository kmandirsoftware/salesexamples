import {JetView} from "webix-jet";
import {data} from "models/records";

export default class ProgramManagementView extends JetView{
	config(){
		return {
			view:"datatable", 
			css:"webix_shadow_medium",
			localId:"grid",
			columns:[
        	{ id:"name",  header:["Name", {content:"textFilter"}] , sort:"string", minWidth:250}, 
        	{ id:"shortName",  header:["Short Name", {content:"textFilter"}] ,  sort:"string", minWidth:200}, 
        	{ id:"description", header:["Description",{content:"textFilter"}],fillspace:true, sort:"string", minWidth:250 },
        	{ id:"programeType", header:["Program Type", {content:"textFilter"}] , sort:"string",  minWidth:250},
        	{ id:"programmeCategory", header:"Program Category" , sort:"string",  minWidth:250}, 
        	{ id:"categoryShortName", header:"category Short Name" , sort:"string",  minWidth:250}, 
        	{ id:"comment", header:"Comment" ,  minWidth:250},
        	{ id:"startDate", header:["startDate", {content:"textFilter"}] , sort:"string", minWidth:250},
        	{ id:"endDate", header:["endDate", {content:"textFilter"}] ,  minWidth:250}, 
        	{ id:"commercialDuration", header:"Commercial Duration" , minWidth:250},
        	{ id:"duration", header:"Duration" , minWidth:250},
        	{ id:"numberofBreaks", header:{text:"numberofBreaks" , rotate:true} },
        	{ id:"maximumSponsorship", header:"Maximum Sponsorship" , minWidth:250},
        	{ id:"localorNetWork", header:"Local or Network", adjust:true },
        	{ id:"liveBroadcast", header:"Live Broadcast" , sort:"string", minWidth:250},
        	{ id:"supplier", header:"Supplier" , minWidth:250},
        	] 
		};
	}
	init(view){
		view.parse(data);
	}
}