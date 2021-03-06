import {JetView} from "webix-jet";
import CustomersData from "views/customersdata";
import CustomersForm from "views/forms/programform"
import {programdata} from "models/records";

var data_value =   {
  "glue": "or",
  "rules": [
    {
      "field": "programmeCategory",
      "includes": [
        "TBA"
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
                              }
                           ]//end elements
                   },
              {
              cols: [
                                                 {
                                view:"query",
                                width:800,
                                on: {
                                    onChange() {
                                    const filter = this.getFilterFunction();
                                    // data-widget to filter data in
                                      $$("gridView").filter(filter);
                                    },
                                    onInit(){
                                    //  const initfilter = this.getFilterFunction();
                                    //const myquery = $$("query");
                                    //const mygrid = $$("gridView");
                                    //console.log(mygrid);
                                    }
                                },
                                id:"query",
                             //   type: "bar",
                                data: field =>
                                   webix
                                      .ajax(`http://localhost:3001/api/data/programdetails/${field}/suggest`)
                                      .then(a => a.json()),
                                fields: [
                                { id:"startDate", value:"Start Date" , type: "date"},
                                { id:"programmeCategory", value:"Program Category", type: "text"},
                                { id:"duration", value:"Duration", type: "number" },
                                { id:"programeType", value:"Program Type", type: "text" }
                                ],
                                value: data_value
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
/*    init(){
          $$("query")
          .getState()
          .$observe("value", v => {
            $$("gridView").filter($$("query").getFilterFunction());
            $$("log").setValue(JSON.stringify(v, "", "\t"));
          });

   }*/

}