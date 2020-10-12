import {JetView} from "webix-jet";

export default class StartView extends JetView{
	config(){

var data = [	
    { id:1, country:'Germany'	   , code: "DE", area:357,  population:83 },
    { id:2, country:'United States', code: "US", area:9834, population:323 },
    { id:3, country:'Brazil'       , code: "BR", area:8516, population:207 },
    { id:4, country:'Canada'       , code: "CA", area:9985, population:36 },
    { id:5, country:'France'       , code: "FR", area:644,  population:67 },
    { id:6, country:'Russia'       , code: "RU", area:17100,population:144 },
    { id:7, country:'China'        , code: "CN", area:9597, population:1379 },
    { id:8, country:'Australia'    , code: "AU", area:7692, population:24 },
    { id:9, country:'Algeria'      , code: "DZ", area:2382, population:41 },
    { id:10, country:'South Africa', code: "ZA", area:1220, population:56 },
    { id:11, country:'Sudan'       , code: "SD", area:1886, population:40 },
    { id:12, country:'India'       , code: "IN", area:3287, population:1324 },
    { id:13, country:'Belarus'     , code: "BY", area:208,  population:10  }
];

var datas = [
	{ id:1, country:'Germany', code: "DE", sales:357, visitors:83 },
	{ id:2, country:'United States', code: "US", sales:9834, visitors:323 },
	{ id:3, country:'Brazil', code: "BR", sales:8516, visitors:207 },
	{ id:4, country:'Canada', code: "CA", sales:9985, visitors:36 },
	{ id:5, country:'France', code: "FR", sales:644, visitors:67 },
	{ id:6, country:'Russia', code: "RU", sales:17100,visitors:144 },
	{ id:7, country:'China', code: "CN", sales:9597, visitors:137 },
	{ id:8, country:'Australia', code: "AU", sales:7692, visitors:24 },
	{ id:9, country:'Algeria', code: "DZ", sales:2382, visitors:41 },
	{ id:10, country:'South Africa'	, code: "ZA", sales:1220, visitors:56 },
	{ id:11, country:'Sudan', code: "SD", sales:1886, visitors:40 },
	{ id:12, country:'India', code: "IN", sales:3287, visitors:132 },
	{ id:13, country:'Belarus', code: "BY", sales:208, visitors:10  }
];

		const grid = {
  			view:"dashboard", id:"grid",
  			gridColumns:5, gridRows:4,
  			cells:[
    			{
      				view:"panel",
      				x:0, y:0, dx:1, dy:1,
      				padding:18, margin:18,
      				header:"Visitors",
      				body:{
        			template:"<p class='title'>1.234K</p>", css:"draft"
      				}
    			},
    {
      view:"panel",
      x:1, y:0, dx:1, dy:1,
      padding:18, margin:18,
      header:"Sales",
      body:{
        template:"<p class='title'>23.45K</p>", css:"draft"
      }
    },
    {
      view:"panel",
      x:2, y:0, dx:1, dy:1,
      padding:18, margin:18,
      header:"New Visitors",
      body:{
        template:"<p class='title'>234</p>", css:"draft"                       
      }
    },
    {
      view:"panel",
      x:3, y:0, dx:1, dy:1,
      padding:18, margin:18,
      header:"Active Visitors",
      body:{
        template:"<p class='title'>1.09K</p>", css:"draft"
      }
    },
    {
      view:"panel",
      x:4, y:0, dx:1, dy:1,
      padding:18, margin:18,
      header:"Revenue",
      body:{
        template:"<p class='title'>100K</p>", css:"draft"
      }
    },

    {
      view:"panel",
      x:0, y:1, dx:2, dy:2,
      resize:true,
      header:"Sales",
      body:{
        view:"chart",type:"pie",
        data:webix.copy(datas), value:"#sales#",
        legend:{
                template:"#code#",
                align:"right",
                valign:"middle"
                },
        shadow:true
        }
    },
    {
      view:"panel",
      x:2, y:1, dx:3, dy:2, resize:true,
      header:"Area",
      body:{
        view:"chart", type:"bar",
        data:webix.copy(data), value:"#area#",
        xAxis:{
          template:"#code#"
        },
        yAxis:{
          title:"People, mln",
          template:function(obj){
            return (obj%20?"":obj)
          }
        }
      }
    }
  ]
};
	const toolbar = {
  		view:"toolbar", elements:[
    		{ view:"label", label:"Sales Dashboard" }
  		]
	};

		return {
  			rows:[
      			toolbar,
      			grid
  			]
  		};

	}


}