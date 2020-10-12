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
				{ view:"button", type:"image" ,
					image:"common/imgs/logo-icon.svg", width:50},
					{ view:"label", type:""}
				, logout
/*wjet::Topbar*/
			]
		};

		const menu_data = [
				{ value:"Sales", id:"start", icon:"wxi-plus-square" , data:[
				   	{ id:"campaignsanddeals", value:"Campaigns \& Deals", data:[
				   		{id:"campaignslistview", value:"Campaign List View"}] },
				   	{ id:"clientsandproducts", value:"Clients \& Products"},
				   	{ id:"inventory", value:"Inventory"},
				   	{ id:"jobs", value:"Jobs"}] 
				},
				{ value:"Traffic", id:"traffic",  icon:"wxi-plus-square", data:[
					{ id:"programmanagement", value:"Program Management"},
					{ id:"testsubviews", value:"Programs"},
					{ id:"episodes", value:"Episodes"}], click:function(id){
						var item = this.getItem(id);
						this.$scope.show(item.route)
						console.log(item+"dd");
					} 
				},
				{ value:"Reporting",  id:"data",  icon:"wxi-pencil" },
				{ value:"Settings", untitledid:"settings",  icon:"wxi-pencil", data:[
					{ id:"locks", value:"Locks"},
					{ id:"mail", value:"Mail"},
					{ id:"roles", value:"Roles"},
					{ id:"salesconfiguraion", value:"Sales Configuration"},
					{ id:"setup", value:"Setup"}]
				},
				{ value: "Admin", id:"admin", icon:"wxi-user", data:[
					{ id: "usermgr", value:"User Configuration" }]
				}
			];

		const ui = {
			rows:[
				{ view: "toolbar", padding:3, elements: [
				   { view: "button", type: "image", image: "common/imgs/logo-icon.svg",
				    	width: 37, align: "left", css: "app_button", click: function(){
				    		$$("$sidebar1").toggle();
				    	}
				    },
				    { view: "label", label: "xGSales"},
				    {},
				    { view: "button", type: "icon", width: 45, css: "app_button", icon: "mdi mdi-comment",  badge:4},
				    { view: "button", type: "icon", width: 45, css: "app_button", icon: "mdi mdi-bell",  badge:10}
				   ]
				},
				{ cols:[
					{
						view: "sidebar",
						data: menu_data,
						on:{
							onAfterSelect: function(id){
								this.$scope.show(this.getItem(id).id);
								//webix.message("Selected: "+this.getItem(id).id)
							}
						}
					},
//					{ template: ""},
					{ $subview:true }
					]
				}
				
				]
		};

		return ui;
	}


	init(){
		//this.use(plugins.Menu, "top:menu");
	}
}