import {JetView} from "webix-jet";
import {dataObj} from "models/dataobj";

export default class CampaignListView extends JetView{
	config(){
		return{
			view:"form", 
			id : "form1", width : 1000, height : 920,
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
                //{ view : "icon", icon: "envelope", align : "left" },
                { view:"panel", type:"space", css: "top", header:"Widget with header", 
     				x:1, y:1, dx:3, dy:2, resize:true, body:{
      			 template: "I can put something else in here!"
     			}}

              ] },
              /* Column 2 */
              { },
              /* Column 3 */
              { width : 520, rows : [
              //  { view : "radio", label : "radio", value : "1", options : dataObj }
                //{ view : "radio", label : "radio", value : "1", options : dataObj },
/*                { view : "rangeslider", label : "rangeslider" },*/
                { view : "richselect", label : "richselect", value : "2", options : dataObj },
                { view : "richtext", label : "richtext", height : 150 },
                { view : "search", label : "search" },
                { view : "segmented", label : "segmented", value : "3", options : dataObj },
                { view : "select", label : "select", value : "1", options : dataObj },
                { view : "slider", label : "slider" },
                { view : "text", id : "myText", name : "myText", label : "text", validate : webix.rules.isNumber,
                  invalidMessage : "Must be a number", bottomPadding : 20,
                  on : {
                    onBlur : function() { $$("form1").validate() }
                  }
                },
                { view : "textarea", label : "textarea", height : 220 },
                { view : "toggle", onLabel : "toggle ON", offLabel : "toggle",
                  width : 100, align : "right"
                }


              ] }

            ]
          } ]
       
		};
	}
	init(view){
		view.parse(dataObj);
	}
}