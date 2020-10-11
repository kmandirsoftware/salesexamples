import {JetView} from "webix-jet";
import {programdata} from "models/records";

export default class ProgramManagementView extends JetView{
	config(){
		return {
			view:"datatable", 
            id:"gridView",
            drag:true,
            dragColumn:true,
            resizeColumn:true,
            select:true,
            //scroll:"y",
			css:"webix_shadow_medium",
            scheme:{
                $change:function(item){
                    if (item.startDate > 2008)
                        item.$css = "highlight";
                    if (item.liveBroadcast == "false")
                        item.$css = "highlight";
                }
            },
			columns:[
                        { id:"edit", header:"", width:35, template:"{common.editIcon()}"},
                        { id:"delete", header:"", width:35, template:"{common.trashIcon()}"},
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
                	{ id:"supplier", header:"Supplier" , minWidth:250}
                	] , 
                        onClick:{
                                "wxi-trash":(e, id) => {
                                   webix.confirm({
                                        text:"The program will be deleted. <br/> Are you sure?",
                                        ok:"Yes", cancel:"Cancel",
                                        callback:(res) => {
                                                if(res){
                                                        programdata.remove(id.row);
                                                }
                                        }
                                   });
                                },
                                "wxi-pencil":(e, id) => {
                                        this.show("programmanagement?id="+id.row)
                                }
                        }

		};
	}
	init(view){
                //adding progress bar functionality to it
                var myview = $$("gridView");
               // var myview = $$("datatable");
                webix.extend(myview, webix.ProgressBar);
                myview.disable();
                myview.showProgress({type:"icon"});
                webix.delay(function(){
	               view.sync(programdata);
                        myview.hideProgress();
                        myview.enable();
                }, null, null, 1000)
	}



}