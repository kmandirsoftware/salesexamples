import {JetView} from "webix-jet";
import CustomersData from "views/customersdata";
import CustomersForm from "views/forms/programform"

export default class ProgramManagementView extends JetView{
	config(){
	   return {
                rows:[
                   {
                        view:"toolbar", css:"subbar", padding:0,
                           elements:[
                              {
                                height:50, css:"title", borderless:true,
                                template:`<div class='header'>Programs</div>
                                          <div class='details'>( info & editing )</div>`
                              },
                              {
                                view:"button", type:"iconButton",
                                icon:"plus", label:"Export All Fields", width:240, 
                                click:function(){
                                  webix.toExcel($$("gridView"));
                                }
                              },
                              {
                                view:"button", id:"button:add", type:"iconButton",
                                icon:"plus", label:"Add Program", width:140,
                                click:() => this.$$("multi").setValue("formView")
                              }
                           ]
                   },
                   {
                        fitBiggest:true,
                        localId:"multi",
                        cells:[
                                { id:"gridView", $subview:CustomersData },
                                { id:"formView", $subview:CustomersForm }
                        ],
                        on:{
                                onViewChange:(prev)=>{
                                        const button = this.$$("button:add");
                                        if (prev =="gridView")
                                                button.hide();
                                        else
                                                button.show();
                                }
                        }
                   }
                ]
	   };
	}
        urlChange(){
                const id = this.getParam("id");
                if (id)
                        this.$$("multi").setValue("formView");
                else
                        this.$$("multi").setValue("gridView");
        }
}