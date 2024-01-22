function povolania(canvas, enabled, homeDir) {

	this.act = new Activity(canvas, enabled);

	this.act.onDragDrop = function(sprite) {
    	var ciel = sprite.findOverlapped(ciele);
        sprite.placeAt(ciel);
        document.getElementById("vypis").innerHTML = this.getResult();
    }

	this.act.getResult=function() {
		var ok = true;
		var p = 0;
		for (var i = 0; i < ciele.length; i++) {
			if (ciele[i].item == null) p++;
		}
		if (p == ciele.length)
			return "x";
		else {
			for (var i = 0; i < ciele.length; i++) {
				if (ciele[i].item == null) ok = false;
				else
					if (ciele[i].item.name != spravne[i])
						ok = false;
			}
			if (ok)
				return "a";
			else
				return "d";
		}
	}

//nevedel som najst moznost aby obrazky ostali na svojom mieste po tahani (ak taka existuje) 
//preto som pridal jednu elipsu naviac pretoye ak to spravne chapem riesenie potrebuje 2x elipsu

	var cesta = homeDir;
	var pozadie = new Sprite(this.act, cesta + "bg.png", 400, 200);
	var x = 90;
	var y = 345;
	var y2 = 470;
	var ciele = [];
	var usporiadanie = ["p2","p3","p6","p5","p4","p1"]
	var spravne = ["p1","p2","p3","p4","p5","p6"];

	var j = 0;
	for (var i = 0; i < 6; i++) {
		
		if (j == 3){
			y2 = y2 + 110
			j = 0
		}
		var kar = new Sprite(this.act, cesta + usporiadanie[i] + ".png",
		100 + j * x, y2, dragSprite);
		kar.name = usporiadanie[i];
		j += 1;
	}	

	
	for (var j = 0; j < 6; j++) {
		ciele[j] = new Sprite(this.act, cesta + "prazdna.png", 265 + j * 85, y);

	}

};
