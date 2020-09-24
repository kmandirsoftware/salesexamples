import {JetView} from "webix-jet";
import {data} from "models/episoderecords";

export default class EpisodesView extends JetView{
	config(){
		return{
			view:"datatable", 
			css:"webix_shadow_medium",
			localId:"grid",
			columns:[
        	{ id:"name",  header:["Episode Name", {content:"textFilter"}] ,fillspace:true, sort:"string", minWidth:250}, 
        	{ id:"shortName", header:["Short Name",{content:"textFilter"}], sort:"string", minWidth:250 },
        	{ id:"id", header:"Id" , minWidth:250},
        	]
		};
	}
	init(view){
		view.parse(data);
	}
}