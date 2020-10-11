export function getFacilities(){
	return facilities;
}

const facilities = [
	{ id:"$empty", value:"-- Not selected --", $empty:true },
	{ id:"1", value:"Admin", color:"#8664C6" },
	{ id:"2", value:"Power User", color:"#1CA1C1" },
	{ id:"3", value:"Normal User", color:"#F8643F" }
];
