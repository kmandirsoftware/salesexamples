import {JetView} from "webix-jet";

export default class SettingsView extends JetView{
	config(){

		const locale = this.app.getService("locale");
		const _ = locale._;

		const langs = {
			view:"segmented",
			localId:"lang",
			label:_("AppsLanguage"), labelWidth:200,
			options:[
				{ id:"en", value:"English" },
				{ id:"de", value:"Deutsche"}
			],
			optionWidth:100,
			click:() => {
				const value = this.$$("lang").getValue();
				locale.setLang(value);
			},
			value:locale.getLang()
		};



		return {
			type:"clean", rows:[
				{ type:"header", template:"Settings"},
				{ type:"form", rows:[langs] },
/*wjet::Settings*/
				{ template:"Place app's seetings here" }
			]
		}
	}
}