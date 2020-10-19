export function getProgramCats(){
	return progcatagories;
}

const progcatagories = [
	{ id:"$empty", value:"-- Not selected --", $empty:true },
	{ id:"1", value:"MOVIES COMEDY", color:"#8664C6" },
	{ id:"2", value:"MOVIES ROMANCE", color:"#1CA1C1" },
	{ id:"3", value:"MOVIES DRAMA", color:"#F8643F" },
	{ id:"4", value:"MOVIES FAMILY", color:"#F8643F" },
	{ id:"5", value:"MOVIES ACTION", color:"#F8643F" },
	{ id:"6", value:"MOVIES SCI-FI", color:"#F8643F" },
	{ id:"7", value:"MOVIES THRILLER", color:"#F8643F" },
	{ id:"8", value:"MOVIES FACTUAL", color:"#F8643F" },
	{ id:"9", value:"MOVIES ANIMATION", color:"#F8643F" },
	{ id:"10", value:"MOVIES HORROR", color:"#F8643F" },
	{ id:"11", value:"MOVIES UNDEFINED", color:"#F8643F" }
];
