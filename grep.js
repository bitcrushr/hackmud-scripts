function(context, args){ //ratiasu.grep {command:#s.a.d, arguments:{}, value:""}

	if(!args.value || !args.command){
		return{ ok:false, msg: "Really? Check your args."}
	}
	var ret = args.command.call(args.arguments);
	var out = [];;
	if(typeof ret == 'object'){
		for(var i = 0; i < ret.length; i++){
			if(ret[i].indexOf(args.value) != -1){
				out.push(ret[i]);
			}
		}
	} else if (typeof ret == 'string'){
		ret = ret.split("\n");
		for(var i = 0; i < ret.length; i++){
                        if(ret[i].indexOf(args.value) != -1){
                                out.push(ret[i]);
                        }
                }

	}
	return out;
}
