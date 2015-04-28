(function(){
	Group = function(obj){
		if(!obj.hasOwnProperty('name') && !obj.hasOwnProperty('energyLimit')){
			console.log('Group requires name and energyLimit! Usage: Group({name: ..., energyLimit: ...})');
			return false;
		}
		this.name = obj.name;
		this.energyLimit = obj.energyLimit/1000;
	}
	return Group;
})();
