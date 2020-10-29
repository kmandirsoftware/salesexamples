import {JetView} from "webix-jet";
import {getFacilities} from "models/facilities";

export default class UserConfigView extends JetView{
	config(){
		const main_info = {
			                rows:[
				{
					view:"text", name:"fname",
					label:"First name", labelPosition:"top",
					placeholder:"First name",
					invalidMessage:"A name is required",
					tooltip:"Client's name is " + "#value#"
				},
				{
					view:"text", name:"lname",
					label:"Last name", labelPosition:"top",
					placeholder:"Last name",
					tooltip:"Client's last name is " + "#value#"
				},
				{
					view:"text", name:"uname",
					label:"User name", labelPosition:"top",
					placeholder:"User name",
					tooltip:"Client's user name is " + "#value#"
				},
				{
					view:"text", name:"password",
					label:"Password", labelPosition:"top", type:"password",
					placeholder:"Password"
				},				
				{
					view:"text", name:"rpassword",
					label:"Retype Password", labelPosition:"top", type:"password",
					placeholder:"Password"
				},				
				{
					view:"richselect", name:"position",
					localId:"position:combo",
					label:"Role", labelPosition:"top",
					placeholder:"Click to select",
					options:getFacilities(),
					tooltip:obj => {
						return obj.value ? "The position that client occupies within their company" : "<span class='notselected'>" + "Not selected" + "</span>";
					}
				}]
			};
		const buttons = {
			margin:10,
			cols:[
				{},
				{
					view:"button", value:"Reset", autowidth:true,
					click:() => {
						this.$$("form").clear();
					},
					tooltip:"Click to clean the form"
				},
				{
					view:"button", value:"Save", type:"form", autowidth:true,
					tooltip:"Save changes",
					click:() => {
						if (this.$$("form").validate()){
							webix.message("Saved (not really)!", "success");
						}
					}
				}
			]
		};

	   return {
	   			rows:[
				{ template:"Profile information", type:"header" },
				{
					view:"form", localId:"form", padding:24,
					rows:[
						main_info,
						{
							view:"textarea", label:"Notes", labelPosition:"top", placeholder:"Type text"	
						},
						buttons
					]
				}
	   			]
		};
	}
}
