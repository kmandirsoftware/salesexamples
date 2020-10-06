import {JetView} from "webix-jet";
import {dataObj} from "models/dataobj";

export default class CampaignListView extends JetView{
	config(){
		return{
			view:"form", 
			id : "form1", width : 1000, height : 820,
          css : { "border" : "2px solid #000000", "margin" : "10px" },
          elementsConfig : { labelWidth : 120 },
          elements : [ {
            cols : [
              /* Column 1 */
              { width : 420, rows : [
                { view : "button", label : "button" },
                { view : "checkbox", label : "checkbox" },
                { view : "colorpicker", label : "colorpicker" },
                { view : "combo", label : "combo", value : "2", options : dataObj, required : true },
                { view : "counter", label : "counter" },
                { view : "datepicker", label : "datepicker" },
                { view : "dbllist", height : 200, value : "1,3",
                  css : { "margin-top" : "10px!important" }, data : dataObj
                },
                { view : "label", label : "This is a label, and below is an icon", align : "center" },
                
                { value:"mail",  label:"Mail",  css:"webix_icon mdi mdi-email"},
                { view : "combo", label : "radio", value : 1, options : dataObj }


              ] },
              /* Column 2 */
              { },
              /* Column 3 */
              { width : 520, rows : [
              //  { view : "radio", label : "radio", value : "1", options : dataObj }

              ] }

            ]
          } ]
       
		};
	}
	init(view){
		view.parse(dataObj);
	}
}