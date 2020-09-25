import {JetView} from "webix-jet";
import {programdata} from "models/records";

export default class CustomersForm extends JetView{
	config(){
		return {
			view:"form", paddingY:20, paddingX:30,
			elementsConfig:{ labelWidth:100 },
			elements:[
				{ type:"header", height:45, template:"Program Editor"},
				{ view:"text", name: "shortName", label:"Program Short Name"},
				{ view:"text", name:"name", label:"Program Name"},
				{
				margin:10,
				cols:[
					{ view:"button", value:"<< Back", align:"center", width:120,
 					click:() => {
 						this.getBack();
 					}
				    },
					{view:"button", value:"Save", type:"form", align:"center", width:120},
					{
						click:() => {
							const form = this.getRoot();
							if (form.validate()) {
								//save values
								this.saveCustomer(form.getValues());
								this.getBack();
							}
						}
					}
				]
				}
			],
			rules:{
				name:webix.rules.isNotEmpty
			}
		};
	}
	urlChange(form){
		programdata.waitData.then(()=>{
			const id = this.getParam("id");
			if(id && programdata.exists(id)) {
				form.setValues(programdata.getItem(id));
			}
		});
	}
	saveCustomer(values){
		const id = values.id;
		if(id)
			programdata.updateItem(id,values);
	}
	getBack(){
		//clear values and validation
		const form = this.getRoot();
		form.clear();
		form.clearValidation();
		//show grid
		this.show("programmanagement");
	}
}