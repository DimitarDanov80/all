(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.A1_ = function() {
	this.initialize(img.A1_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,660);


(lib.A1frontBush = function() {
	this.initialize(img.A1frontBush);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,128);


(lib.A1rocket1 = function() {
	this.initialize(img.A1rocket1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,169);


(lib.A1rocket1Blured = function() {
	this.initialize(img.A1rocket1Blured);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,206);


(lib.A1rocket2 = function() {
	this.initialize(img.A1rocket2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,190);


(lib.A1rocket2Blured = function() {
	this.initialize(img.A1rocket2Blured);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,231);


(lib.A1Txt15x = function() {
	this.initialize(img.A1Txt15x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,139);


(lib.A2backGr = function() {
	this.initialize(img.A2backGr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,660);


(lib.A2Girl = function() {
	this.initialize(img.A2Girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,566);


(lib.A2Txt15x = function() {
	this.initialize(img.A2Txt15x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,515,138);


(lib.A3 = function() {
	this.initialize(img.A3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,660);


(lib.A3Dot1 = function() {
	this.initialize(img.A3Dot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,11);


(lib.a3Dot2 = function() {
	this.initialize(img.a3Dot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.a3Dot3 = function() {
	this.initialize(img.a3Dot3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.A3Front = function() {
	this.initialize(img.A3Front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,522);


(lib.A3Txt15x = function() {
	this.initialize(img.A3Txt15x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,136);


(lib.A4 = function() {
	this.initialize(img.A4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,660);


(lib.A4MaskLight = function() {
	this.initialize(img.A4MaskLight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,94);


(lib.A4Txt15x = function() {
	this.initialize(img.A4Txt15x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,136);


(lib.A5 = function() {
	this.initialize(img.A5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,660);


(lib.A5MaskLight = function() {
	this.initialize(img.A5MaskLight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,184);


(lib.A5Txt15x = function() {
	this.initialize(img.A5Txt15x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,608,136);


(lib.backGrTexture = function() {
	this.initialize(img.backGrTexture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1080);


(lib.hl15x = function() {
	this.initialize(img.hl15x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,95);


(lib.logoTop = function() {
	this.initialize(img.logoTop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,188);


(lib.topWhite = function() {
	this.initialize(img.topWhite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,100);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txtA5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A5Txt15x();
	this.instance.parent = this;
	this.instance.setTransform(-202.65,-57.3,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtA5, new cjs.Rectangle(-202.6,-57.3,405.29999999999995,90.69999999999999), null);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A4Txt15x();
	this.instance.parent = this;
	this.instance.setTransform(-197.7,-57.8,0.7149,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4, new cjs.Rectangle(-197.7,-57.8,395.4,90.69999999999999), null);


(lib.rocket2Blured = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1rocket1Blured();
	this.instance.parent = this;
	this.instance.setTransform(-53.5,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket2Blured, new cjs.Rectangle(-53.5,-103,107,206), null);


(lib.rocket2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1rocket1();
	this.instance.parent = this;
	this.instance.setTransform(-45,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket2, new cjs.Rectangle(-45,-84.5,90,169), null);


(lib.rocket1Blured = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1rocket2Blured();
	this.instance.parent = this;
	this.instance.setTransform(-40,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket1Blured, new cjs.Rectangle(-40,-115.5,80,231), null);


(lib.rocket1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1rocket2();
	this.instance.parent = this;
	this.instance.setTransform(-38.5,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket1, new cjs.Rectangle(-38.5,-95,77,190), null);


(lib.carousellArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB569B").s().p("AjcILIhohrQgMgNAAgRQAAgRAMgNIFUlfQADgDAAgCQAAgCgEgDIlRlcQgOgPAAgRQAAgRANgOIBqhtQANgNASAAQAQgBANAOICFCJIFYFjQAiAhgiAiInaHpQgQAQgRAAQgRAAgQgQg");
	this.shape.setTransform(33.7365,53.9241);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.carousellArrow, new cjs.Rectangle(0.1,0,67.30000000000001,107.9), null);


(lib.arrowNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjcILIhohrQgMgNAAgRQAAgRAMgNIFUlfQADgDAAgCQAAgCgEgDIlRlcQgOgPAAgRQAAgRANgOIBqhtQANgNASAAQAQgBANAOICFCJIFYFjQAiAhgiAiInaHpQgQAQgRAAQgRAAgQgQg");
	this.shape.setTransform(33.7365,53.9241);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowNew, new cjs.Rectangle(0.1,0,67.30000000000001,107.9), null);


(lib.carousellBtnOver = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB569B").s().p("AhnD1IgwgyQgGgGAAgIQAAgIAGgGICfilIABgCIgCgCIieijQgGgHAAgIQAAgIAGgHIAygzQAGgGAIAAQAIAAAGAGIA+BBIChCmQAQAPgQAQIjdDlQgIAHgIABQgIAAgIgIg");
	this.shape.setTransform(188.05,10.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE6BA8").s().p("AhnD1IgwgyQgGgGAAgIQAAgIAGgGICfilIABgCIgCgCIieijQgGgHAAgIQAAgIAGgHIAygzQAGgGAIAAQAIAAAGAGIA+BBIChCmQAQAPgQAQIjdDlQgIAHgIABQgIAAgIgIg");
	this.shape_1.setTransform(188.05,10.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F080B4").s().p("AhnD1IgwgyQgGgGAAgIQAAgIAGgGICfilIABgCIgCgCIieijQgGgHAAgIQAAgIAGgHIAygzQAGgGAIAAQAIAAAGAGIA+BBIChCmQAQAPgQAQIjdDlQgIAHgIABQgIAAgIgIg");
	this.shape_2.setTransform(188.05,10.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F395C1").s().p("AhnD1IgwgyQgGgGAAgIQAAgIAGgGICfilIABgCIgCgCIieijQgGgHAAgIQAAgIAGgHIAygzQAGgGAIAAQAIAAAGAGIA+BBIChCmQAQAPgQAQIjdDlQgIAHgIABQgIAAgIgIg");
	this.shape_3.setTransform(188.05,10.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5ABCD").s().p("AhnD1IgwgyQgGgGAAgIQAAgIAGgGICfilIABgCIgCgCIieijQgGgHAAgIQAAgIAGgHIAygzQAGgGAIAAQAIAAAGAGIA+BBIChCmQAQAPgQAQIjdDlQgIAHgIABQgIAAgIgIg");
	this.shape_4.setTransform(188.05,10.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8C0DA").s().p("AhnD1IgwgyQgGgGAAgIQAAgIAGgGICfilIABgCIgCgCIieijQgGgHAAgIQAAgIAGgHIAygzQAGgGAIAAQAIAAAGAGIA+BBIChCmQAQAPgQAQIjdDlQgIAHgIABQgIAAgIgIg");
	this.shape_5.setTransform(188.05,10.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAD5E6").s().p("AhnD1IgwgyQgGgGAAgIQAAgIAGgGICfilIABgCIgCgCIieijQgGgHAAgIQAAgIAGgHIAygzQAGgGAIAAQAIAAAGAGIA+BBIChCmQAQAPgQAQIjdDlQgIAHgIABQgIAAgIgIg");
	this.shape_6.setTransform(188.05,10.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDEAF3").s().p("AhnD1IgwgyQgGgGAAgIQAAgIAGgGICfilIABgCIgCgCIieijQgGgHAAgIQAAgIAGgHIAygzQAGgGAIAAQAIAAAGAGIA+BBIChCmQAQAPgQAQIjdDlQgIAHgIABQgIAAgIgIg");
	this.shape_7.setTransform(188.05,10.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhnD1IgwgyQgGgGAAgIQAAgIAGgGICfilIABgCIgCgCIieijQgGgHAAgIQAAgIAGgHIAygzQAGgGAIAAQAIAAAGAGIA+BBIChCmQAQAPgQAQIjdDlQgIAHgIABQgIAAgIgIg");
	this.shape_8.setTransform(188.05,10.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// under
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.647)").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape_9.setTransform(180.425,9.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDEAF3").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape_10.setTransform(180.425,9.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAD5E6").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape_11.setTransform(180.425,9.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8C0DA").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape_12.setTransform(180.425,9.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5ABCD").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape_13.setTransform(180.425,9.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F395C1").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape_14.setTransform(180.425,9.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F080B4").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape_15.setTransform(180.425,9.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EE6BA8").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape_16.setTransform(180.425,9.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EB569B").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape_17.setTransform(180.425,9.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.9,-54.8,69.1,128.3);


(lib.confetti3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.a3Dot3();
	this.instance.parent = this;
	this.instance.setTransform(-6,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.confetti3, new cjs.Rectangle(-6,-6,12,12), null);


(lib.confetti2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A3Dot1();
	this.instance.parent = this;
	this.instance.setTransform(-5.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.confetti2, new cjs.Rectangle(-5.5,-5.5,11,11), null);


(lib.confetti1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.a3Dot2();
	this.instance.parent = this;
	this.instance.setTransform(-6,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.confetti1, new cjs.Rectangle(-6,-6,12,12), null);


(lib.carousellBtnUnder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AidHEQi8i8AAkKQAAkJC8i7QC6i7EIAAQAbAAAaACIAAT/QgaACgbAAQkIAAi6i+g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.carousellBtnUnder, new cjs.Rectangle(-34.5,-64.1,69.1,128.3), null);


(lib.buttonAll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,102,0.498)").s().p("EhdvA2sMAAAhtXMC7fAAAMAAABtXg");
	this.shape.setTransform(606.3,350.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1206.3,700.1);


(lib.babyFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A3Front();
	this.instance.parent = this;
	this.instance.setTransform(-237,-261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.babyFront, new cjs.Rectangle(-237,-261,474,522), null);


(lib.a5MaskOverLight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A5MaskLight();
	this.instance.parent = this;
	this.instance.setTransform(-148,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a5MaskOverLight, new cjs.Rectangle(-148,-92,296,184), null);


(lib.A5in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.A5();
	this.instance.parent = this;
	this.instance.setTransform(-127.6,230.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A5in, new cjs.Rectangle(-127.6,230.4,636,660), null);


(lib.a4MaskLightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A4MaskLight();
	this.instance.parent = this;
	this.instance.setTransform(-300.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a4MaskLightIn, new cjs.Rectangle(-300.5,-47,601,94), null);


(lib.A4in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.A4();
	this.instance.parent = this;
	this.instance.setTransform(-127.55,230.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A4in, new cjs.Rectangle(-127.5,230.4,636,660), null);


(lib.A3Txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A3Txt15x();
	this.instance.parent = this;
	this.instance.setTransform(-166.3,-72.55,0.7263,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A3Txt, new cjs.Rectangle(-166.3,-72.5,344.3,90.6), null);


(lib.A3in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.A3();
	this.instance.parent = this;
	this.instance.setTransform(-126.7,228.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A3in, new cjs.Rectangle(-126.7,228.4,636,660), null);


(lib.A2Txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A2Txt15x();
	this.instance.parent = this;
	this.instance.setTransform(-183.55,-59.6,0.7129,0.6861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A2Txt, new cjs.Rectangle(-183.5,-59.6,367.1,94.7), null);


(lib.A2in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.A2backGr();
	this.instance.parent = this;
	this.instance.setTransform(-128.35,229.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A2in, new cjs.Rectangle(-128.3,229.9,636,660), null);


(lib.A2Girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A2Girl();
	this.instance.parent = this;
	this.instance.setTransform(-189,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A2Girl_1, new cjs.Rectangle(-189,-283,378,566), null);


(lib.A1Txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1Txt15x();
	this.instance.parent = this;
	this.instance.setTransform(-201.3,-58.55,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A1Txt, new cjs.Rectangle(-201.3,-58.5,402.6,92.6), null);


(lib.A1FrontBush = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A1frontBush();
	this.instance.parent = this;
	this.instance.setTransform(-53,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A1FrontBush, new cjs.Rectangle(-53,-64,106,128), null);


(lib.А1in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.A1_();
	this.instance.parent = this;
	this.instance.setTransform(-48.6,100.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.А1in, new cjs.Rectangle(-48.6,100.5,636,660), null);


(lib.Symbol29copy5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.carousellArrow();
	this.instance.parent = this;
	this.instance.setTransform(188.05,10,0.4686,0.4686,0,0,0,33.7,53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// under
	this.instance_1 = new lib.carousellBtnUnder();
	this.instance_1.parent = this;
	this.instance_1.setTransform(180.4,9.3);
	this.instance_1.alpha = 0.6484;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29copy5, new cjs.Rectangle(145.9,-54.8,69.1,128.3), null);


(lib.BTN = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29copy5();
	this.instance.parent = this;
	this.instance.setTransform(22.1,22.1,1,1,0,0,0,22.1,22.1);

	this.instance_1 = new lib.carousellBtnOver();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.1,22.1,1,1,0,0,0,22.1,22.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("AoBK7IAA10IQDAAIAAV0g");
	this.shape.setTransform(190.625,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139.3,-63.7,102.69999999999999,139.7);


(lib.B = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.BTN = new lib.BTN();
	this.BTN.name = "BTN";
	this.BTN.parent = this;
	this.BTN.setTransform(1.3,21.8,0.6787,0.6787,0,0,0,183.8,12.6);
	new cjs.ButtonHelper(this.BTN, 0, 1, 2, false, new lib.BTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN).wait(1));

}).prototype = getMCSymbolPrototype(lib.B, new cjs.Rectangle(-24.4,-24,46.9,87.2), null);


(lib.А2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{open:6,close:44});

	// timeline functions:
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_38 = function() {
		this.stop()
	}
	this.frame_74 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(35).call(this.frame_38).wait(36).call(this.frame_74).wait(1));

	// A2Txt
	this.instance = new lib.A2Txt();
	this.instance.parent = this;
	this.instance.setTransform(-634.75,898.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// maskIt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("EhKxA70MAAAhmvMBi5AAAMAAABmvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:-478.6,y:382.7684}).wait(57));

	// A2Girl
	this.instance_1 = new lib.A2Girl_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-428.55,1066.85);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(1).to({x:-465.8493,y:953.0281},0).wait(1).to({x:-499.8083,y:849.3993},0).wait(1).to({x:-530.4271,y:755.9634},0).wait(1).to({x:-557.7057,y:672.7206},0).wait(1).to({x:-581.644,y:599.6707},0).wait(1).to({x:-602.2421,y:536.8139},0).wait(1).to({x:-619.5,y:484.15},0).wait(1).to({x:-620.9972,y:483.6306},0).wait(1).to({x:-622.2222,y:483.2056},0).wait(1).to({x:-623.175,y:482.875},0).wait(1).to({x:-623.8556,y:482.6389},0).wait(1).to({x:-624.2639,y:482.4972},0).wait(1).to({x:-624.4,y:482.45},0).wait(13).to({x:-625.95,alpha:0},10).wait(21));

	// pict2
	this.instance_2 = new lib.A2in();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-625.15,462.3,1,1,0,0,0,205.2,586.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-958.7,0,958.7,933.6);


(lib.А1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"open":55,"close":94});

	// timeline functions:
	this.frame_49 = function() {
		this.stop()
	}
	this.frame_87 = function() {
		this.stop()
	}
	this.frame_125 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(38).call(this.frame_87).wait(38).call(this.frame_125).wait(1));

	// A1FrontBush
	this.instance = new lib.A1FrontBush();
	this.instance.parent = this;
	this.instance.setTransform(-755.15,316.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},10).wait(10).to({_off:true},11).wait(7).to({_off:false,alpha:0},0).to({alpha:1},10).wait(27).to({alpha:0},10).wait(22));

	// rocket2Blured
	this.instance_1 = new lib.rocket2Blured();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-733.1,275.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(15).to({x:-666.1,y:146.85,alpha:1},4).to({x:-509.8,y:-152.8},11).to({_off:true},1).wait(7).to({_off:false,x:-733.1,y:275.3,alpha:0},0).wait(15).to({x:-666.1,y:146.85,alpha:1},4).to({x:-509.8,y:-152.8},11).wait(39));

	// rocket2
	this.instance_2 = new lib.rocket2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-733.1,275.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({alpha:1},10).wait(5).to({x:-666.1,y:146.85,alpha:0},4).to({x:-509.8,y:-152.8,alpha:1},11).to({_off:true},1).wait(7).to({_off:false,x:-733.1,y:275.3,alpha:0},0).to({alpha:1},10).wait(5).to({x:-666.1,y:146.85,alpha:0},4).to({x:-509.8,y:-152.8,alpha:1},11).wait(39));

	// rocket1Blured
	this.instance_3 = new lib.rocket1Blured();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-390,209.85);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(15).to({y:99.75,alpha:1},4).to({y:-157.1},11).to({_off:true},1).wait(7).to({_off:false,y:209.85,alpha:0},0).wait(15).to({y:99.75,alpha:1},4).to({y:-157.1},11).wait(39));

	// rocket1
	this.instance_4 = new lib.rocket1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-390,209.85);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({alpha:1},10).wait(5).to({y:99.75,alpha:0},4).to({y:-157.1,alpha:1},11).to({_off:true},1).wait(7).to({_off:false,y:209.85,alpha:0},0).to({alpha:1},10).wait(5).to({y:99.75,alpha:0},4).to({y:-157.1,alpha:1},11).wait(39));

	// A1Txt
	this.instance_5 = new lib.A1Txt();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-610.3,828.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({alpha:1},10).wait(10).to({_off:true},11).wait(7).to({_off:false},0).wait(37).to({alpha:0},10).wait(22));

	// pict1
	this.instance_6 = new lib.А1in();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-602.5,481.45,1,1,0,0,0,282.2,547.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({alpha:1},10).to({_off:true},21).wait(7).to({_off:false,alpha:0},0).to({alpha:1},10).wait(27).to({alpha:0},10).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-933.3,-272.6,933.3,1135);


(lib.ctaBtnUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrowNew();
	this.instance.parent = this;
	this.instance.setTransform(121,1.4,0.2132,0.2132,0,0,0,34,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Jetzt entdecken
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxhCMIAAgdQAMACAJAAQAdABAAglIAAjOIAjAAIAADNQAAAhgPASQgQARgeAAQgOAAgKgEgAMzBBQgWgWAAgnQAAgmAUgXQAUgXAiAAQAgAAATAUQATATAAAiIAAASIhsAAQAAAXAMANQAMAMAWAAQAPABAMgDQAMgCAPgHIAAAcQgNAGgNADQgNACgQAAQgmAAgVgWgANNgrQgKAKgCAUIBKAAQgBgUgJgKQgJgLgRAAQgQAAgKALgAHwBCQgTgWAAgoQAAgoAUgWQAUgWAmAAQAaAAAUAKIgKAcQgWgJgOAAQgqAAAAA3QAAAbAKANQALAOAUAAQAXAAAUgLIAAAeQgJAFgKADQgLACgPAAQglAAgTgVgAFGBBQgWgWAAgnQAAgmAUgXQAUgXAiAAQAgAAATAUQATATAAAiIAAASIhsAAQAAAXAMANQAMAMAWAAQAPABAMgDQAMgCAPgHIAAAcQgNAGgNADQgNACgQAAQgmAAgVgWgAFggrQgKAKgCAUIBKAAQgBgUgJgKQgJgLgRAAQgQAAgKALgACGBBQgRgWAAgnQAAgnARgXQASgWAeAAQAgAAARAXIABAAQgCgRAAgKIAAg7IAjAAIAADjIgbAAIgGgVIgCAAQgRAYggAAQgeAAgRgWgACiglQgJAOAAAbQAAAbAJAOQAKAOATAAQAVAAAKgMQAJgMABgbIAAgEQAAgegKgNQgKgNgWAAQgSAAgKAPgAAMAjIAAhWIgVAAIAAgPIAXgNIALgiIAWAAIAAAkIAuAAIAAAaIguAAIAABWQAAAMAGAGQAGAGAKAAQANAAAMgEIAAAaQgFACgJADQgJABgKAAQgxAAAAg0gAlWBBQgVgWAAgnQAAgmATgXQAUgXAjAAQAgAAASAUQATATAAAiIAAASIhsAAQABAXAMANQAMAMAWAAQAOABANgDQAMgCAOgHIAAAcQgNAGgMADQgNACgRAAQgmAAgVgWgAk7grQgKAKgCAUIBJAAQAAgUgJgKQgKgLgQAAQgRAAgJALgAoiAjIAAhWIgXAAIAAgPIAYgNIAMgiIAVAAIAAAkIAuAAIAAAaIguAAIAABWQAAAMAGAGQAHAGAKAAQAMAAANgEIAAAaQgGACgJADQgJABgJAAQgxAAAAg0gAsoAjIAAhWIgWAAIAAgPIAYgNIALgiIAWAAIAAAkIAuAAIAAAaIguAAIAABWQAAAMAGAGQAGAGAKAAQANAAAMgEIAAAaQgFACgJADQgJABgKAAQgxAAAAg0gAvMBBQgWgWAAgnQAAgmAUgXQAUgXAiAAQAgAAATAUQATATAAAiIAAASIhsAAQAAAXAMANQAMAMAWAAQAPABAMgDQAMgCAPgHIAAAcQgNAGgNADQgNACgQAAQgmAAgVgWgAuygrQgKAKgCAUIBKAAQgBgUgJgKQgJgLgRAAQgQAAgKALgARABUIAAhiQAAgUgIgIQgHgKgRAAQgWAAgKANQgKANAAAeIAABQIgiAAIAAihIAbAAIAFAVIABAAQAIgLANgHQAOgGAQAAQA6AAAAA7IAABpgALkBUIg0hHIgTAQIAAA3IgiAAIAAjjIAiAAIgBCOIABAAIBEhMIAoAAIhBBGIBFBbgAhJBUIAAhiQAAgUgHgIQgIgKgQAAQgWAAgKANQgKANAAAeIAABQIgjAAIAAihIAbAAIAFAVIACAAQAHgLAOgHQANgGARAAQA6AAAAA7IAABpgArEBUIAAgVIBShxIhNAAIAAgbIB0AAIAAAYIhQBvIBSAAIAAAag");
	this.shape.setTransform(-14.375,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// under
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#178FCF").s().rr(-233.45,-27.9,466.9,55.8,12);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaBtnUp, new cjs.Rectangle(-233.4,-27.9,466.9,55.8), null);


(lib.ctaBtnOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// arrow
	this.instance = new lib.arrowNew();
	this.instance.parent = this;
	this.instance.setTransform(121,1.4,0.2132,0.2132,0,0,0,34,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:131},9,cjs.Ease.get(1)).wait(1));

	// Jetzt entdecken
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxhCMIAAgdQAMACAJAAQAdABAAglIAAjOIAjAAIAADNQAAAhgPASQgQARgeAAQgOAAgKgEgAMzBBQgWgWAAgnQAAgmAUgXQAUgXAiAAQAgAAATAUQATATAAAiIAAASIhsAAQAAAXAMANQAMAMAWAAQAPABAMgDQAMgCAPgHIAAAcQgNAGgNADQgNACgQAAQgmAAgVgWgANNgrQgKAKgCAUIBKAAQgBgUgJgKQgJgLgRAAQgQAAgKALgAHwBCQgTgWAAgoQAAgoAUgWQAUgWAmAAQAaAAAUAKIgKAcQgWgJgOAAQgqAAAAA3QAAAbAKANQALAOAUAAQAXAAAUgLIAAAeQgJAFgKADQgLACgPAAQglAAgTgVgAFGBBQgWgWAAgnQAAgmAUgXQAUgXAiAAQAgAAATAUQATATAAAiIAAASIhsAAQAAAXAMANQAMAMAWAAQAPABAMgDQAMgCAPgHIAAAcQgNAGgNADQgNACgQAAQgmAAgVgWgAFggrQgKAKgCAUIBKAAQgBgUgJgKQgJgLgRAAQgQAAgKALgACGBBQgRgWAAgnQAAgnARgXQASgWAeAAQAgAAARAXIABAAQgCgRAAgKIAAg7IAjAAIAADjIgbAAIgGgVIgCAAQgRAYggAAQgeAAgRgWgACiglQgJAOAAAbQAAAbAJAOQAKAOATAAQAVAAAKgMQAJgMABgbIAAgEQAAgegKgNQgKgNgWAAQgSAAgKAPgAAMAjIAAhWIgVAAIAAgPIAXgNIALgiIAWAAIAAAkIAuAAIAAAaIguAAIAABWQAAAMAGAGQAGAGAKAAQANAAAMgEIAAAaQgFACgJADQgJABgKAAQgxAAAAg0gAlWBBQgVgWAAgnQAAgmATgXQAUgXAjAAQAgAAASAUQATATAAAiIAAASIhsAAQABAXAMANQAMAMAWAAQAOABANgDQAMgCAOgHIAAAcQgNAGgMADQgNACgRAAQgmAAgVgWgAk7grQgKAKgCAUIBJAAQAAgUgJgKQgKgLgQAAQgRAAgJALgAoiAjIAAhWIgXAAIAAgPIAYgNIAMgiIAVAAIAAAkIAuAAIAAAaIguAAIAABWQAAAMAGAGQAHAGAKAAQAMAAANgEIAAAaQgGACgJADQgJABgJAAQgxAAAAg0gAsoAjIAAhWIgWAAIAAgPIAYgNIALgiIAWAAIAAAkIAuAAIAAAaIguAAIAABWQAAAMAGAGQAGAGAKAAQANAAAMgEIAAAaQgFACgJADQgJABgKAAQgxAAAAg0gAvMBBQgWgWAAgnQAAgmAUgXQAUgXAiAAQAgAAATAUQATATAAAiIAAASIhsAAQAAAXAMANQAMAMAWAAQAPABAMgDQAMgCAPgHIAAAcQgNAGgNADQgNACgQAAQgmAAgVgWgAuygrQgKAKgCAUIBKAAQgBgUgJgKQgJgLgRAAQgQAAgKALgARABUIAAhiQAAgUgIgIQgHgKgRAAQgWAAgKANQgKANAAAeIAABQIgiAAIAAihIAbAAIAFAVIABAAQAIgLANgHQAOgGAQAAQA6AAAAA7IAABpgALkBUIg0hHIgTAQIAAA3IgiAAIAAjjIAiAAIgBCOIABAAIBEhMIAoAAIhBBGIBFBbgAhJBUIAAhiQAAgUgHgIQgIgKgQAAQgWAAgKANQgKANAAAeIAABQIgjAAIAAihIAbAAIAFAVIACAAQAHgLAOgHQANgGARAAQA6AAAAA7IAABpgArEBUIAAgVIBShxIhNAAIAAgbIB0AAIAAAYIhQBvIBSAAIAAAag");
	this.shape.setTransform(-14.375,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// under
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#178FCF").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F89C9").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4682C3").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E7CBE").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7576B8").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D6FB2").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A469AC").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC63A7").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D35CA1").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB569B").s().p("EgimAEXQh3AAgBh4IAAk9QABh4B3AAMBFNAAAQB3AAABB4IAAE9QgBB4h3AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.4,-27.9,466.9,55.8);


(lib.ctaBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ctaBtnUp();
	this.instance.parent = this;

	this.instance_1 = new lib.ctaBtnOver();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("EglGAEsIAApXMBKNAAAIAAJXg");
	this.shape.setTransform(1.525,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.9,-28.9,474.9,60);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function urlOpen() {
			function getUrlVars(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(r,a,n){e[a]=n});return e}
				
			var urlVars = getUrlVars();
					
			if (urlVars.clickTag !== 'undefined') {
				window.open(decodeURIComponent(urlVars.clickTag));
			}
		}
		this.ctaBtn.addEventListener("click", urlOpen.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ctaBtn = new lib.ctaBtn();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.parent = this;
	new cjs.ButtonHelper(this.ctaBtn, 0, 1, 2, false, new lib.ctaBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-233.4,-27.9,466.9,55.8), null);


(lib.confettiCopy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(85).call(this.frame_85).wait(1));

	// confetti2
	this.instance = new lib.confetti2();
	this.instance.parent = this;
	this.instance.setTransform(225,-443,0.7549,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({x:211.9,y:457.85},60,cjs.Ease.get(1)).wait(1));

	// confetti1
	this.instance_1 = new lib.confetti1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.05,-452.25,1,0.3958,-53.4725);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({x:202.6,y:411.1},65,cjs.Ease.get(1)).wait(14));

	// confetti3
	this.instance_2 = new lib.confetti3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40,-423.9,0.5542,1,32.4822);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:0.298,rotation:90.1967,x:62.55,y:478.85},64,cjs.Ease.get(1)).wait(7));

	// confetti1
	this.instance_3 = new lib.confetti1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18.05,-421.1,0.6167,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.3873,rotation:-86.9684,x:-10.95,y:493.95},67,cjs.Ease.get(1)).wait(19));

	// confetti2
	this.instance_4 = new lib.confetti2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23.1,-483.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.3,x:49.55,y:483.75},59,cjs.Ease.get(1)).wait(27));

	// confetti1
	this.instance_5 = new lib.confetti1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(96.6,-459.35,1,0.4917);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({scaleY:0.3728,x:77.5,y:490.8},65,cjs.Ease.get(1)).wait(12));

	// confetti3
	this.instance_6 = new lib.confetti3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(169.4,-515.5,0.7125,1,-35.7111,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-1.4,regY:1.6,scaleX:0.337,rotation:-87.413,x:145.15,y:429.95},47,cjs.Ease.get(1)).wait(39));

	// confetti1
	this.instance_7 = new lib.confetti1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-11.15,-313.65,1,0.6792);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.3985,x:-43.9,y:491.45},65,cjs.Ease.get(1)).wait(21));

	// confetti3
	this.instance_8 = new lib.confetti3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(116.9,-322.1,0.3949,1,29.9435,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0.1,scaleX:0.1003,rotation:88.0972,x:163.6,y:432.45},55).wait(31));

	// confetti1
	this.instance_9 = new lib.confetti1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(114.4,-265.85,0.65,1,-47.486,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0,scaleX:0.4082,rotation:-95.6826,x:94.35,y:487.15},65).wait(21));

	// confetti1
	this.instance_10 = new lib.confetti1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(198.3,-354.7,1,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:242.1,y:431.2},61).wait(25));

	// confetti3
	this.instance_11 = new lib.confetti3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(137.7,-367.25,0.7791,1,-28.741);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).to({x:153.7,y:484.9},54).wait(16));

	// confetti1
	this.instance_12 = new lib.confetti1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(182.2,-284.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:213.2,y:473.55},41).wait(45));

	// confetti3
	this.instance_13 = new lib.confetti3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-8.55,-360.35);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({scaleY:0.4083,x:6.75,y:494.5},60).wait(20));

	// confetti2
	this.instance_14 = new lib.confetti2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(54.3,-368.75,1,0.8128,-50.9708);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:0.1,regY:0.4,scaleX:0.9352,scaleY:0.2661,rotation:-0.7458,x:21.65,y:488},46).wait(40));

	// confetti1
	this.instance_15 = new lib.confetti1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(103.8,-405.8,0.5542,1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).to({regY:0.1,scaleX:0.2491,rotation:-90.5184,x:137.85,y:479.25},51).wait(27));

	// confetti3
	this.instance_16 = new lib.confetti3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(33.55,-196.85,0.4333,1,-112.2558);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({_off:false},0).to({rotation:-100.2602,x:25.85,y:512.05},60).wait(24));

	// confetti2
	this.instance_17 = new lib.confetti2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(59.75,-304.65,1,0.5091,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:59.05,y:499.95},37).wait(49));

	// confetti1
	this.instance_18 = new lib.confetti1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-13.4,-266.75,0.8265,1,42.9533,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:0,regY:0,scaleX:0.3444,scaleY:0.9915,rotation:87.1613,x:-28.45,y:499.45},55).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-522.8,298,1038.5);


(lib.confettiCopy1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(85).call(this.frame_85).wait(1));

	// confetti2
	this.instance = new lib.confetti2();
	this.instance.parent = this;
	this.instance.setTransform(225,-443,0.7549,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({x:205.9,y:382.85},60,cjs.Ease.get(1)).wait(1));

	// confetti1
	this.instance_1 = new lib.confetti1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.05,-452.25,1,0.3958,-53.4725);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({x:202.6,y:336.1},65,cjs.Ease.get(1)).wait(14));

	// confetti3
	this.instance_2 = new lib.confetti3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40,-423.9,0.5542,1,32.4822);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({x:44.6,y:251.85},64,cjs.Ease.get(1)).wait(7));

	// confetti1
	this.instance_3 = new lib.confetti1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18.05,-421.1,0.6167,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.3873,rotation:-86.9684,x:-12.8,y:407.9},67,cjs.Ease.get(1)).wait(19));

	// confetti2
	this.instance_4 = new lib.confetti2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23.1,-483.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.3,x:49.55,y:396.25},59,cjs.Ease.get(1)).wait(27));

	// confetti1
	this.instance_5 = new lib.confetti1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(96.6,-459.35,1,0.4917);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({scaleY:0.3728,x:77.5,y:403.3},65,cjs.Ease.get(1)).wait(12));

	// confetti3
	this.instance_6 = new lib.confetti3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(169.4,-515.5,0.7125,1,-35.7111,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:145.05,y:353.15},47,cjs.Ease.get(1)).wait(39));

	// confetti1
	this.instance_7 = new lib.confetti1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-11.15,-313.65,1,0.6792);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.3985,x:-46.35,y:391.1},65,cjs.Ease.get(1)).wait(21));

	// confetti3
	this.instance_8 = new lib.confetti3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(116.9,-322.1,0.3949,1,29.9435,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:163.55,y:357.35},55).wait(31));

	// confetti1
	this.instance_9 = new lib.confetti1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(114.4,-265.85,0.65,1,-47.486,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:82.3,y:398.15},65).wait(21));

	// confetti1
	this.instance_10 = new lib.confetti1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(198.3,-354.7,1,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:242.1,y:356.2},61).wait(25));

	// confetti3
	this.instance_11 = new lib.confetti3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(137.7,-367.25,0.7791,1,-28.741);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).to({x:153.7,y:409.9},54).wait(16));

	// confetti1
	this.instance_12 = new lib.confetti1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(182.2,-284.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:201.2,y:398.55},41).wait(45));

	// confetti3
	this.instance_13 = new lib.confetti3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-8.55,-360.35);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({scaleY:0.4083,x:6.75,y:389},60).wait(20));

	// confetti2
	this.instance_14 = new lib.confetti2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(54.3,-368.75,1,0.8128,-50.9708);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:0.1,regY:0.4,scaleX:0.9352,scaleY:0.2661,rotation:-0.7458,x:21.65,y:413},46).wait(40));

	// confetti1
	this.instance_15 = new lib.confetti1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(103.8,-405.8,0.5542,1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).to({x:137.7,y:402.4},51).wait(27));

	// confetti3
	this.instance_16 = new lib.confetti3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(33.55,-196.85,0.4333,1,-112.2558);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({_off:false},0).to({x:25.9,y:437},60).wait(24));

	// confetti2
	this.instance_17 = new lib.confetti2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(59.75,-304.65,1,0.5091,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:59.05,y:424.95},37).wait(49));

	// confetti1
	this.instance_18 = new lib.confetti1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-13.4,-266.75,0.8265,1,42.9533,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:0,regY:0,scaleX:0.3444,scaleY:0.9915,rotation:87.1613,x:-28.45,y:424.45},55).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-522.8,300.4,964.5);


(lib.confetti = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_68 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(68).call(this.frame_68).wait(1));

	// confetti2
	this.instance = new lib.confetti2();
	this.instance.parent = this;
	this.instance.setTransform(225,-443,0.7549,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:205.9,y:382.85},48,cjs.Ease.get(1)).wait(1));

	// confetti1
	this.instance_1 = new lib.confetti1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.05,-452.25,1,0.3958,-53.4725);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:202.6,y:336.1},52,cjs.Ease.get(1)).wait(11));

	// confetti3
	this.instance_2 = new lib.confetti3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40,-423.9,0.5542,1,32.4822);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:44.6,y:251.85},51,cjs.Ease.get(1)).wait(6));

	// confetti1
	this.instance_3 = new lib.confetti1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18.05,-421.1,0.6167,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.3873,rotation:-86.9684,x:-12.8,y:407.9},54,cjs.Ease.get(1)).wait(15));

	// confetti2
	this.instance_4 = new lib.confetti2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23.1,-483.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.3,x:49.55,y:396.25},47,cjs.Ease.get(1)).wait(22));

	// confetti1
	this.instance_5 = new lib.confetti1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(96.6,-459.35,1,0.4917);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({scaleY:0.3728,x:77.5,y:403.3},52,cjs.Ease.get(1)).wait(10));

	// confetti3
	this.instance_6 = new lib.confetti3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(169.4,-515.5,0.7125,1,-35.7111,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:136.5,y:258.75},38,cjs.Ease.get(1)).wait(31));

	// confetti1
	this.instance_7 = new lib.confetti1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-11.15,-313.65,1,0.6792);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.3985,x:-46.35,y:391.1},52,cjs.Ease.get(1)).wait(17));

	// confetti3
	this.instance_8 = new lib.confetti3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(116.9,-322.1,0.3949,1,29.9435,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:163.55,y:357.35},44).wait(25));

	// confetti1
	this.instance_9 = new lib.confetti1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(114.4,-265.85,0.65,1,-47.486,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:82.3,y:350.15},52).wait(17));

	// confetti1
	this.instance_10 = new lib.confetti1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(198.3,-354.7,1,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:242.1,y:356.2},49).wait(20));

	// confetti3
	this.instance_11 = new lib.confetti3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(137.7,-367.25,0.7791,1,-28.741);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({x:153.7,y:409.9},43).wait(13));

	// confetti1
	this.instance_12 = new lib.confetti1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(182.2,-284.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:201.2,y:398.55},33).wait(36));

	// confetti3
	this.instance_13 = new lib.confetti3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-8.55,-360.35);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).to({scaleY:0.4083,x:6.75,y:389},48).wait(16));

	// confetti2
	this.instance_14 = new lib.confetti2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(54.3,-368.75,1,0.8128,-50.9708);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:0.1,regY:0.4,scaleX:0.9352,scaleY:0.2661,rotation:-0.7458,x:21.65,y:413},37).wait(32));

	// confetti1
	this.instance_15 = new lib.confetti1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(103.8,-405.8,0.5542,1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({_off:false},0).to({x:137.7,y:402.4},41).wait(22));

	// confetti3
	this.instance_16 = new lib.confetti3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(33.55,-196.85,0.4333,1,-112.2558);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({_off:false},0).to({x:25.9,y:437},48).wait(19));

	// confetti2
	this.instance_17 = new lib.confetti2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(59.75,-304.65,1,0.5091,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:59.05,y:424.95},30).wait(39));

	// confetti1
	this.instance_18 = new lib.confetti1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-13.4,-266.75,0.8265,1,42.9533,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:0,regY:0,scaleX:0.3444,scaleY:0.9915,rotation:87.1613,x:-28.45,y:424.45},44).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-522.8,300.4,964.5);


(lib.ButtonMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function urlOpen() {
			function getUrlVars(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(r,a,n){e[a]=n});return e}
				
			var urlVars = getUrlVars();
					
			if (urlVars.clickTag !== 'undefined') {
				window.open(decodeURIComponent(urlVars.clickTag));
			}
		}
		this.ButtonAll.addEventListener("click", urlOpen.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ButtonAll = new lib.buttonAll();
	this.ButtonAll.name = "ButtonAll";
	this.ButtonAll.parent = this;
	this.ButtonAll.setTransform(-0.3,6.8,1.0609,1.7427,0,0,0,606,353.9);
	new cjs.ButtonHelper(this.ButtonAll, 0, 1, 2, false, new lib.buttonAll(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ButtonAll).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonMC, new cjs.Rectangle(-636.5,-609.9,1273,1219.9), null);


(lib.a5MaskLIght = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_73 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(1));

	// maskIt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A53PuIAA/bMAzvAAAIAAfbg");
	var mask_graphics_6 = new cjs.Graphics().p("A53N5IAA7xMAzvAAAIAAbxg");
	var mask_graphics_13 = new cjs.Graphics().p("A53PbIAA+1MAzvAAAIAAe1g");
	var mask_graphics_19 = new cjs.Graphics().p("A53M2IAA5rMAzvAAAIAAZrg");
	var mask_graphics_25 = new cjs.Graphics().p("A53LjIAA3FMAzvAAAIAAXFg");
	var mask_graphics_31 = new cjs.Graphics().p("A53KPIAA0dMAzvAAAIAAUdg");
	var mask_graphics_37 = new cjs.Graphics().p("A53IPIAAxgMAzvAAAIAARgg");
	var mask_graphics_43 = new cjs.Graphics().p("A53DpIAAs6MAzvAAAIAAM6g");
	var mask_graphics_49 = new cjs.Graphics().p("A53AiIAApzMAzvAAAIAAJzg");
	var mask_graphics_54 = new cjs.Graphics().p("A53keIAAkzMAzvAAAIAAEzg");
	var mask_graphics_61 = new cjs.Graphics().p("A53lOIAAkzMAzvAAAIAAEzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.275,y:1.3}).wait(6).to({graphics:mask_graphics_6,x:-1.275,y:-10.4}).wait(7).to({graphics:mask_graphics_13,x:-1.275,y:-36.8}).wait(6).to({graphics:mask_graphics_19,x:-1.275,y:-36.8}).wait(6).to({graphics:mask_graphics_25,x:-1.275,y:-45.05}).wait(6).to({graphics:mask_graphics_31,x:-1.275,y:-53.45}).wait(6).to({graphics:mask_graphics_37,x:-1.275,y:-59.4497}).wait(6).to({graphics:mask_graphics_43,x:-1.275,y:-59.4453}).wait(6).to({graphics:mask_graphics_49,x:-1.275,y:-59.4322}).wait(5).to({graphics:mask_graphics_54,x:-1.275,y:-59.4206}).wait(7).to({graphics:mask_graphics_61,x:-1.275,y:-64.2206}).wait(13));

	// light
	this.instance = new lib.a5MaskOverLight();
	this.instance.parent = this;
	this.instance.alpha = 0.5508;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-92,296,184);


(lib.a4MaskLight = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer_1
	this.instance = new lib.a4MaskLightIn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},16,cjs.Ease.get(1)).wait(7).to({alpha:1},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.5,-47,601,94);


(lib.Land = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		var _this = this;
		
		if(typeof window.initVer2==="undefined"){
			var _this = this;
			
		
			//_this.A1.xInit = this.A1.x
		
			//_this.A1.yInit = this.A1.y					 
		 
		
		
					
		
			window.initVer2 = _this;
		} else {
			var _this = window.initVer2;
		}
		
		
		
		
		
		var ReCenter2 = (function () {
			var dpr = window.devicePixelRatio;
			var w3 = window.innerWidth;
			var w4 = (stage.canvas.width / dpr);
			var coef3 = 1200 / w4
			var wscale2 = w3 / 1200 * coef3;
			
			var h3 = window.innerHeight;
			var h4 = (stage.canvas.height / dpr);
			var coef4 = 1080 / h4
			var hscale2 = h3 / 1080 * coef4;
		
			
		
			//_this.A1.x = _this.A1.xInit + ((w4 - w3) * coef3) / 2
			//_this.A1.y = _this.A1.yInit + ((h4 - h3) * coef4) / 2
			
			//_this.A1.scaleX = wscale2;
			//_this.A1.scaleY = wscale2;
			
			
			
		
			
			
		
			
		});
		ReCenter2();
		window.addEventListener('resize', ReCenter2);
		
		
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(1));

	// ButtonAll
	this.instance = new lib.ButtonMC();
	this.instance.parent = this;
	this.instance.setTransform(3.8,2.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.btnR = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer_1
	this.B2 = new lib.B();
	this.B2.name = "B2";
	this.B2.parent = this;
	this.B2.setTransform(139.25,2.25,1,1,0,0,0,15.8,15.5);
	this.B2.alpha = 0;
	this.B2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.B2).wait(42).to({_off:false},0).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37.2,146,87.1);


(lib.btnL = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer_1
	this.B1 = new lib.B();
	this.B1.name = "B1";
	this.B1.parent = this;
	this.B1.setTransform(139.25,2.25,1,1,0,0,0,15.8,15.5);
	this.B1.alpha = 0;
	this.B1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.B1).wait(42).to({_off:false},0).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37.2,146,87.1);


(lib.А5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"open":6,"close":44});

	// timeline functions:
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_38 = function() {
		this.stop()
	}
	this.frame_74 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(35).call(this.frame_38).wait(36).call(this.frame_74).wait(1));

	// a5MaskLIght
	this.instance = new lib.a5MaskLIght();
	this.instance.parent = this;
	this.instance.setTransform(-675.8,443.55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// txtA5
	this.instance_1 = new lib.txtA5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-635.05,898.85,1.0774,1,0,0,0,-0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// pict2
	this.instance_2 = new lib.A5in();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-625.15,462.3,1,1,0,0,0,205.2,586.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-957.9,0,957.9,932.1);


(lib.А4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"open":6,"close":44});

	// timeline functions:
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_38 = function() {
		this.stop()
	}
	this.frame_74 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(35).call(this.frame_38).wait(36).call(this.frame_74).wait(1));

	// a4MaskLight
	this.instance = new lib.a4MaskLight();
	this.instance.parent = this;
	this.instance.setTransform(-621.55,330);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// text4
	this.instance_1 = new lib.text4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-633.45,897.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// pict2
	this.instance_2 = new lib.A4in();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-625.15,462.3,1,1,0,0,0,205.2,586.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-957.9,0,957.9,930.4);


(lib.А3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"open":6,"close":44});

	// timeline functions:
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_38 = function() {
		this.stop()
	}
	this.frame_74 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(35).call(this.frame_38).wait(36).call(this.frame_74).wait(1));

	// babyFront
	this.instance = new lib.babyFront();
	this.instance.parent = this;
	this.instance.setTransform(-540.8,510.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// confetti copy 2
	this.instance_1 = new lib.confettiCopy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-874.25,180.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// confetti copy
	this.instance_2 = new lib.confettiCopy1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-653.75,229.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// confetti
	this.instance_3 = new lib.confetti();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-748.75,286.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// txt
	this.instance_4 = new lib.A3Txt();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-639.65,913.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

	// pict2
	this.instance_5 = new lib.A3in();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-625.15,462.3,1,1,0,0,0,205.2,586.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({alpha:1},10).wait(26).to({alpha:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-957,-342,957,1274);


(lib.carousellPort = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var _this = this;
		
		if(!this.started)
			
		{
			_this.food = 1;
			_this.food2 = 1;
		
			_this.btnLPort.B1.BTN.addEventListener("click", fl_MouseClickHandlerL.bind(_this));
			_this.btnRPort.B2.BTN.addEventListener("click", fl_MouseClickHandlerR.bind(_this));
			this.started = true; 
			
			var auto = setTimeout(fl_MouseClickHandlerR.bind(_this), 6000)
		}
		
		function fl_MouseClickHandlerL() {
			
			clearTimeout(auto);
			
			console.log(_this.food)
			
			
			if (_this.food == "5") {
				_this.A5.gotoAndPlay("close")
				_this.A4.gotoAndPlay("open")
			
				console.log("Pict5 to Pict4")
				
				_this.food2 = "4";
			}
			
			
			if (_this.food == "4") {
				_this.A4.gotoAndPlay("close")
				_this.A3.gotoAndPlay("open")
			
				console.log("Pict4 to Pict3")
				
					_this.food2 = "3";
			}
		
			
			if (_this.food == "3") {
				_this.A3.gotoAndPlay("close")
				_this.A2.gotoAndPlay("open")
			
				console.log("Pict3 to Pict2")
				
					_this.food2 = "2";
			}
			
			
			if (_this.food == "2") {
				_this.A2.gotoAndPlay("close")
				_this.A1.gotoAndPlay("open")
				
				console.log("Pict2 to Pict1")
				
				_this.food2 = "1";
			}
			
			
			if (_this.food == "1") {
				_this.A1.gotoAndPlay("close")
				_this.A5.gotoAndPlay("open")
				
				console.log("Pict1 to Pict5")
				9
				_this.food2 = "5";
			}
			
				console.log(_this.food2);
			
				_this.food = _this.food2
			
			
			auto = setTimeout(fl_MouseClickHandlerR.bind(_this), 6000)
			
		}
			
			
			
			
		
			
		
			function fl_MouseClickHandlerR() {
				
				clearTimeout(auto);
				
				console.log(_this.food)
		
				if (_this.food == "1") {
		
					_this.A1.gotoAndPlay("close")
					_this.A2.gotoAndPlay("open")
					
					console.log("Pict1 to Pict2")
		
					
					_this.food2 = "2";
				}
				if (_this.food == "2") {
					_this.A2.gotoAndPlay("close")
					_this.A3.gotoAndPlay("open")
					
					console.log("Pict2 to Pict3")
					
					_this.food2 = "3";
				}
		
				if (_this.food == "3") {
					_this.A3.gotoAndPlay("close")
					_this.A4.gotoAndPlay("open")
				
					console.log("Pict3 to Pict4")
					
					_this.food2 = "4";
				}
				
				if (_this.food == "4") {
					_this.A4.gotoAndPlay("close")
					_this.A5.gotoAndPlay("open")
				
					console.log("Pict4 to Pict5")
					
					_this.food2 = "5";
				}
				
				if (_this.food == "5") {
					_this.A5.gotoAndPlay("close")
					_this.A1.gotoAndPlay("open")
				
					console.log("Pict5 to Pict1")
					
					_this.food2 = "1";
				}
				
		
				
				console.log(_this.food2)
		
				_this.food = _this.food2
				
			
				auto = setTimeout(fl_MouseClickHandlerR.bind(_this), 6000)
			}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// butL
	this.btnLPort = new lib.btnL();
	this.btnLPort.name = "btnLPort";
	this.btnLPort.parent = this;
	this.btnLPort.setTransform(230.95,151.6,1.2856,1.2856,180,0,0,125.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.btnLPort).wait(2));

	// butR
	this.btnRPort = new lib.btnR();
	this.btnRPort.name = "btnRPort";
	this.btnRPort.parent = this;
	this.btnRPort.setTransform(816.75,155.25,1.2219,1.2219,0,0,0,125,9);

	this.timeline.addTween(cjs.Tween.get(this.btnRPort).wait(2));

	// hl
	this.instance = new lib.hl15x();
	this.instance.parent = this;
	this.instance.setTransform(272.55,-138,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// A1
	this.A1 = new lib.А1();
	this.A1.name = "A1";
	this.A1.parent = this;
	this.A1.setTransform(533.15,156.95,1,1,0,0,0,-605.6,370.7);

	this.timeline.addTween(cjs.Tween.get(this.A1).wait(2));

	// A2
	this.A2 = new lib.А2();
	this.A2.name = "A2";
	this.A2.parent = this;
	this.A2.setTransform(531.3,143.55,1,1,0,0,0,-632.2,426.9);

	this.timeline.addTween(cjs.Tween.get(this.A2).wait(2));

	// A3
	this.A3 = new lib.А3();
	this.A3.name = "A3";
	this.A3.parent = this;
	this.A3.setTransform(531.3,143.55,1,1,0,0,0,-632.2,426.9);

	this.timeline.addTween(cjs.Tween.get(this.A3).wait(2));

	// A4
	this.A4 = new lib.А4();
	this.A4.name = "A4";
	this.A4.parent = this;
	this.A4.setTransform(531.3,143.55,1,1,0,0,0,-632.2,426.9);

	this.timeline.addTween(cjs.Tween.get(this.A4).wait(2));

	// A5
	this.A5 = new lib.А5();
	this.A5.name = "A5";
	this.A5.parent = this;
	this.A5.setTransform(531.3,143.55,1,1,0,0,0,-632.2,426.9);

	this.timeline.addTween(cjs.Tween.get(this.A5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(204.4,-179.1,638.1,827.7);


(lib.Port = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		var _this = this;
		
		if(typeof window.initVer==="undefined"){
			var _this = this;
		
		
		
			//_this.A.xInit = this.A.x
		
			//_this.A.yInit = this.A.y
			
			
		
		
			window.initVer = _this;
		} else {
			var _this = window.initVer;
		}
		
		
		
		
		
		var ReCenter2 = (function () {
			var dpr = window.devicePixelRatio;
			var w1 = window.innerWidth;
			var w2 = (stage.canvas.width / dpr) ;
			var coef = 1200 / w2;
			var wscale = w1 / 1200 * coef ;
			
			
			
			var h1 = window.innerHeight;
			var h2 = (stage.canvas.height / dpr);
			var coef2 = 1080 / h2
			var hscale = h1 / 1080 * coef2;
			
			
			
			//_this.A.x = _this.A.xInit + ((w2 - w1) * coef) / 2;
			//_this.A.y = _this.A.yInit + ((h2 - h1) * coef2) / 2
			
			//_this.A.scaleX = hscale;
			//_this.A.scaleY = hscale;
			
			
			
			
		
			
		
			
		});
		ReCenter2();
		window.addEventListener('resize', ReCenter2);
		
		
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(1));

	// ctaL
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(-2.65,451.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(2));

	// anima
	this.instance_1 = new lib.hl15x();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-246.35,-413.6,0.6666,0.6666);

	this.instance_2 = new lib.logoTop();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-88.5,-541,0.6666,0.6666);

	this.instance_3 = new lib.topWhite();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-598.45,-540.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},2).wait(2));

	// caroussel
	this.carousell = new lib.carousellPort();
	this.carousell.name = "carousell";
	this.carousell.parent = this;
	this.carousell.setTransform(-1.45,-91.1,1,1,0,0,0,520.1,183.6);
	this.carousell._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carousell).wait(1).to({_off:false},0).to({_off:true},2).wait(2));

	// ButtonAll
	this.instance_4 = new lib.ButtonMC();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.8,2.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},3).wait(2));

	// bkg
	this.instance_5 = new lib.backGrTexture();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-600,-541.45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600,-541.4,1201.6,1080);


// stage content:
(lib.scroller = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var orientation = null;
		_this = this;
		window.addEventListener('resize', function () {
			FIX()
		}, true);
		
		
		var FIX = (function () {
			var winW = window.innerWidth * 0.9 ;
			var winH = window.innerHeight;
			//change now
			if (winW > winH ) {
				if (orientation !== "l") {
					orientation = "l";
					_this.Land.gotoAndPlay(2);
					_this.Port.gotoAndPlay(4);
					console.log("here L");
		
					
				}
			} else {
				if (orientation !== "p") {
					orientation = "p";
					_this.Port.gotoAndPlay(2);
					_this.Land.gotoAndPlay(4);
					console.log("here P");
				}
			}
		});
		
		FIX();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Port
	this.Port = new lib.Port();
	this.Port.name = "Port";
	this.Port.parent = this;
	this.Port.setTransform(599.25,541.7);

	this.timeline.addTween(cjs.Tween.get(this.Port).wait(2));

	// Land
	this.Land = new lib.Land();
	this.Land.name = "Land";
	this.Land.parent = this;
	this.Land.setTransform(593.05,527.35,1,1,0,0,0,-6.2,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.Land).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,472.1,1194.3,608.3000000000001);
// library properties:
lib.properties = {
	id: 'D146C12FF91949469EEB0AF3280EF132',
	width: 1200,
	height: 1080,
	fps: 24,
	color: "#08A7BA",
	opacity: 0.00,
	manifest: [
		{src:"images/A1_.jpg", id:"A1_"},
		{src:"images/A1frontBush.png", id:"A1frontBush"},
		{src:"images/A1rocket1.png", id:"A1rocket1"},
		{src:"images/A1rocket1Blured.png", id:"A1rocket1Blured"},
		{src:"images/A1rocket2.png", id:"A1rocket2"},
		{src:"images/A1rocket2Blured.png", id:"A1rocket2Blured"},
		{src:"images/A1Txt15x.png", id:"A1Txt15x"},
		{src:"images/A2backGr.jpg", id:"A2backGr"},
		{src:"images/A2Girl.png", id:"A2Girl"},
		{src:"images/A2Txt15x.png", id:"A2Txt15x"},
		{src:"images/A3.jpg", id:"A3"},
		{src:"images/A3Dot1.png", id:"A3Dot1"},
		{src:"images/a3Dot2.png", id:"a3Dot2"},
		{src:"images/a3Dot3.png", id:"a3Dot3"},
		{src:"images/A3Front.png", id:"A3Front"},
		{src:"images/A3Txt15x.png", id:"A3Txt15x"},
		{src:"images/A4.jpg", id:"A4"},
		{src:"images/A4MaskLight.png", id:"A4MaskLight"},
		{src:"images/A4Txt15x.png", id:"A4Txt15x"},
		{src:"images/A5.jpg", id:"A5"},
		{src:"images/A5MaskLight.png", id:"A5MaskLight"},
		{src:"images/A5Txt15x.png", id:"A5Txt15x"},
		{src:"images/backGrTexture.jpg", id:"backGrTexture"},
		{src:"images/hl15x.png", id:"hl15x"},
		{src:"images/logoTop.png", id:"logoTop"},
		{src:"images/topWhite.png", id:"topWhite"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D146C12FF91949469EEB0AF3280EF132'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;