(function() {

  function DateDiff(date1, date2) {
    this.days = null;
    this.hours = null;
    this.minutes = null;
    this.seconds = null;
    this.date1 = date1;
    this.date2 = date2;

    this.init();
	
  }

  DateDiff.prototype.init = function() {
    var data = new DateMeasure(this.date1 - this.date2);
    this.days = data.days;
    this.hours = data.hours;
    this.minutes = data.minutes;
    this.seconds = data.seconds;
  };

  function DateMeasure(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    
    this.days = d;
    this.hours = h;
    this.minutes = m;
    this.seconds = s;
  }
    Date.diff = function(date1, date2) {
    return new DateDiff(date1, date2);
  };

  Date.prototype.diff = function(date2) {
	var ReturnString = '';  
    var DateReturn  = new DateDiff(this, date2);
	console.log(DateReturn.days);
	if(DateReturn.days!=0){
		var day_text = 'Days';
		if(DateReturn.days==1){day_text = 'Day';}
		ReturnString += DateReturn.days+" "+day_text+", "; 
	}
	
	if(DateReturn.hours!=0){
		var hour_text = 'hours';
		if(DateReturn.hours==1){hour_text = 'hour';}
		ReturnString += DateReturn.hours+" "+hour_text+" "; 
	}
	if(DateReturn.minutes!=0){
		var minutes_text = 'minutes';
		if(DateReturn.minutes==1){minutes_text = 'minute';}
		if(DateReturn.hours>0){
			ReturnString += 'and '+DateReturn.minutes+' '+minutes_text+""; 	
		}else{
			ReturnString += DateReturn.minutes+' '+minutes_text+""; 
		}
		
	}
	return ReturnString;
	//return DateReturn;
  };

})();