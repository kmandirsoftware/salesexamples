import {JetView} from "webix-jet";
import {multiple_dataset} from "models/area";

export default class StartView extends JetView{
	config(){
		return {

				/*wjet::Settings*/
				  view:"chart",
				  width:600,
				  height:250,
				  type:"stackedArea",
				  alpha:0.7,
				  xAxis:{
				    template:"'#year#"
				  },
				  yAxis:{
				  },
				  legend:{
				    values:[{text:"Type A",color:"#36abee"},{text:"Type B",color:"#a7ee70"},{text:"Type C",color:"#58dccd"}],
				    valign:"middle",
				    align:"right",
				    width:90,
				    layout:"y"
				  },
				  eventRadius: 5,
				  series:[
				    {
				      
				      value:"#sales#",
				      color: "#58dccd",
				      tooltip:{
				        template:"#sales#"
				      }
				    },
				    {
				      
				      value:"#sales2#",
				      color:"#a7ee70",
				      tooltip:{
				        template:"#sales2#"
				      }
				    },
				    {
				      
				      value:"#sales3#",
				      color:"#36abee",
				      tooltip:{
				        template:"#sales3#"
				      }
				    }
				  ],
				  data:multiple_dataset
		}
	}
		init(view){
		view.parse(multiple_dataset);
	}

}