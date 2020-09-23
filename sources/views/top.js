import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView{
	config(){

		const logout = {
			view:"button", label:"Logout", width: 150,
			click: () => this.show("/logout")
		};




		const header = {
			view:"toolbar",
			css:"webix_dark", padding:{ left:8 },
			elements:[
				{ view:"label", label:this.app.config.name }
				, logout
/*wjet::Topbar*/
			]
		};

		const menu = {
			view:"sidebar", id:"top:menu", 
			width:280, layout:"y", select:true,
			template:"<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value:"Sales", id:"start", icon:"wxi-plus-square" },
				{ value:"Traffic", id:"traffic",  icon:"wxi-columns", data:[
					{ id:"programmanagement", value:"Program Management"},
					{ id:"testsubviews", value:"Programs"}] },
				{ value:"Reporting",  id:"data",  icon:"wxi-pencil" },
				{ value:"Settings",  id:"settings",  icon:"wxi-pencil" },

			]
		};

		const ui = {
			rows:[
				header,
				{ type:"space", cols:[
					menu,
					{ $subview:true } 
					
				]}
			]
		};

		return ui;
	}

	init(){
		this.use(plugins.Menu, "top:menu");
	}
}