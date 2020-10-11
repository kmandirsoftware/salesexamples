import {JetView} from "webix-jet";
import CustomersData from "views/customersdata";
import CustomersForm from "views/forms/programform"
import {programdata} from "models/records";

var data_value =   {
  "glue": "or",
  "rules": [
    {
      "field": "name",
      "includes": [
        "AGAINST"
      ]
    },
    {
      "glue": "and",
      "rules": [
        {
          "field": "programmeCategory",
          "includes": [
            "TBA"
            ]
        }
      ]
    }
  ]
  };

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
                              { view:"search", align:"center", placeholder:"Search..", id:"search", width:300,
                                on:{
                                  onTimedKeyPress:function(){
                                    var text = this.getValue().toLowerCase();
                                    var table = $$("gridView");
                                    var columns = table.config.columns;
                                    table.filter(function(obj){
                                    var foundone = false;
                                    for (var i=0; i<columns.length; i++){
                                      // first 2 columns are undefined
                                      if( i>1 ){
                                        if ( obj[columns[i].id].toString().toLowerCase().indexOf(text) !== -1) {
                                          foundone = true;
                                        }
                                      }
                                    }
                                    return foundone;
                                    })
                                  }
                                }
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
                              },
                              {
                                view:"query",
                                width:800,
                                on: {
                                    onChange() {
                                    const filter = this.getFilterFunction();
                                    // data-widget to filter data in
                                    $$("gridView").filter(filter);
                                    }
                                },
                                id:"query",
                                type: "bar",
                                data: programdata,
                                fields: [
                                { id:"name", value:"Name" , type: "text"},
                                { id:"programmeCategory", value:"Program Category", type: "text"}
                                ],
                                value: data_value
                              }
                           ]//end elements
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
//       $$("search").attachEvent("onTimedKeyPress",function(){ 
//          var value = this.getValue().toLowerCase(); 
//          $$("gridView").filter(function(obj){ 
//            return obj.title.toLowerCase().indexOf(value)!=-1;
//          })
//        });

}