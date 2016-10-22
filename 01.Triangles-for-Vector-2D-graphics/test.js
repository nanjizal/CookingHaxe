// Generated by Haxe 3.3.0
(function ($global) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var ColorTriangle = function(color_,ax_,ay_,bx_,by_,cx_,cy_,depth_) {
	this.ax = ColorTriangle.scaleX * (ax_ - ColorTriangle.offsetX);
	this.ay = ColorTriangle.scaleY * (ay_ - ColorTriangle.offsetY);
	this.bx = ColorTriangle.scaleX * (bx_ - ColorTriangle.offsetX);
	this.by = ColorTriangle.scaleY * (by_ - ColorTriangle.offsetY);
	this.cx = ColorTriangle.scaleX * (cx_ - ColorTriangle.offsetX);
	this.cy = ColorTriangle.scaleY * (cy_ - ColorTriangle.offsetY);
	this.depth = depth_;
	this.a = 1.0;
	this.r = (color_ >> 16 & 255) / 255;
	this.g = (color_ >> 8 & 255) / 255;
	this.b = (color_ & 255) / 255;
};
ColorTriangle.__name__ = true;
ColorTriangle.prototype = {
	__class__: ColorTriangle
};
var Test = function() {
	this.matrix32Array = new Float32Array([1.0,0.0,0.0,0.0,0.0,1.1,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0]);
	this.modelViewProjection = new linearAlgebra_Matrix4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
	this.theta = 0.0;
	this.colors = [];
	this.indices = [];
	this.vertices = [];
	this.gl = this.createWebGl(500,500);
	var gl = this.gl;
	var shader = gl.createShader(35633);
	gl.shaderSource(shader,"attribute vec3 pos;" + "attribute vec4 color;" + "varying vec4 vcol;" + "uniform mat4 modelViewProjection;" + "void main(void) {" + " gl_Position = modelViewProjection * vec4(pos, 1.0);" + " vcol = color;" + "}");
	gl.compileShader(shader);
	var gl1 = this.gl;
	var shader1 = gl1.createShader(35632);
	gl1.shaderSource(shader1,"precision mediump float;" + "varying vec4 vcol;" + "void main(void) {" + " gl_FragColor = vcol;" + "}");
	gl1.compileShader(shader1);
	var gl2 = this.gl;
	var program = gl2.createProgram();
	gl2.attachShader(program,shader);
	gl2.attachShader(program,shader1);
	gl2.linkProgram(program);
	gl2.useProgram(program);
	this.program = program;
	ColorTriangle.offsetX = 64;
	ColorTriangle.offsetY = 64;
	ColorTriangle.scaleX = 0.01015625;
	ColorTriangle.scaleY = 0.01015625;
	this.setTriangles([new ColorTriangle(16225310,16,64,64,16,64,112,0),new ColorTriangle(16225310,64,16,64,112,112,64,0),new ColorTriangle(16627731,16,64,64,16,0,0,0),new ColorTriangle(16426522,64,112,16,64,0,128,0),new ColorTriangle(15953697,112,64,64,112,128,128,0),new ColorTriangle(16089632,64,16,112,64,128,0,0),new ColorTriangle(16763656,0,0,64,16,32,0,0),new ColorTriangle(16773632,0,0,0,32,16,64,0),new ColorTriangle(16773632,0,128,16,64,0,96,0),new ColorTriangle(16023868,0,128,32,128,64,112,0),new ColorTriangle(16225310,128,128,64,112,96,128,0),new ColorTriangle(15816994,128,128,128,96,112,64,0),new ColorTriangle(15816994,128,0,112,64,128,32,0),new ColorTriangle(16763656,128,0,96,0,64,16,0)]);
	this.injectCSSenterFrame();
};
Test.__name__ = true;
Test.main = function() {
	new Test();
};
Test.prototype = {
	injectCSSenterFrame: function() {
		var s = window.document.createElement("style");
		s.innerHTML = "@keyframes spin { from { transform:rotate( 0deg ); } to { transform:rotate( 360deg ); } }";
		window.document.getElementsByTagName("head")[0].appendChild(s);
		s.animation = "spin 1s linear infinite";
		this.loop(60.0);
	}
	,loop: function(tim) {
		window.requestAnimationFrame($bind(this,this.loop));
		this.onFrame();
		return true;
	}
	,onFrame: function() {
		var alpha = this.theta += Math.PI / 100;
		var ca = Math.cos(alpha);
		var sa = Math.sin(alpha);
		var _this__10 = -sa;
		var _this__20 = 0;
		var _this__30 = 0;
		var _this__21 = 0;
		var _this__31 = 0;
		var _this__02 = 0;
		var _this__12 = 0;
		var _this__22 = 1;
		var _this__32 = 0;
		var _this__03 = 0;
		var _this__13 = 0;
		var _this__23 = 0;
		var _this__33 = 1;
		var alpha1 = this.theta;
		var ca1 = Math.cos(alpha1);
		var sa1 = Math.sin(alpha1);
		var m__10 = 0;
		var m__30 = 0;
		var m__01 = 0;
		var m__11 = 1;
		var m__21 = 0;
		var m__31 = 0;
		var m__02 = -sa1;
		var m__12 = 0;
		var m__32 = 0;
		var m__03 = 0;
		var m__13 = 0;
		var m__23 = 0;
		var m__33 = 1;
		this.modelViewProjection = new linearAlgebra_Matrix4(ca * ca1 + _this__10 * m__01 + _this__20 * m__02 + _this__30 * m__03,ca * m__10 + _this__10 * m__11 + _this__20 * m__12 + _this__30 * m__13,ca * sa1 + _this__10 * m__21 + _this__20 * ca1 + _this__30 * m__23,ca * m__30 + _this__10 * m__31 + _this__20 * m__32 + _this__30 * m__33,sa * ca1 + ca * m__01 + _this__21 * m__02 + _this__31 * m__03,sa * m__10 + ca * m__11 + _this__21 * m__12 + _this__31 * m__13,sa * sa1 + ca * m__21 + _this__21 * ca1 + _this__31 * m__23,sa * m__30 + ca * m__31 + _this__21 * m__32 + _this__31 * m__33,_this__02 * ca1 + _this__12 * m__01 + _this__22 * m__02 + _this__32 * m__03,_this__02 * m__10 + _this__12 * m__11 + _this__22 * m__12 + _this__32 * m__13,_this__02 * sa1 + _this__12 * m__21 + _this__22 * ca1 + _this__32 * m__23,_this__02 * m__30 + _this__12 * m__31 + _this__22 * m__32 + _this__32 * m__33,_this__03 * ca1 + _this__13 * m__01 + _this__23 * m__02 + _this__33 * m__03,_this__03 * m__10 + _this__13 * m__11 + _this__23 * m__12 + _this__33 * m__13,_this__03 * sa1 + _this__13 * m__21 + _this__23 * ca1 + _this__33 * m__23,_this__03 * m__30 + _this__13 * m__31 + _this__23 * m__32 + _this__33 * m__33);
		this.render();
	}
	,createWebGl: function(width_,height_) {
		this.canvas = window.document.createElement("canvas");
		this.canvas.width = 500;
		this.canvas.height = 500;
		var style = this.canvas.style;
		style.paddingLeft = "0px";
		style.paddingTop = "0px";
		style.left = "0px";
		style.top = "0px";
		style.position = "absolute";
		window.document.body.appendChild(this.canvas);
		return js_html__$CanvasElement_CanvasUtil.getContextWebGL(this.canvas,null);
	}
	,setTriangles: function(triangles) {
		var tri;
		var count = 0;
		var _g1 = 0;
		var _g = triangles.length;
		while(_g1 < _g) {
			tri = triangles[_g1++];
			this.vertices.push(tri.ax);
			this.vertices.push(tri.ay);
			this.vertices.push(tri.depth);
			this.vertices.push(tri.bx);
			this.vertices.push(tri.by);
			this.vertices.push(tri.depth);
			this.vertices.push(tri.cx);
			this.vertices.push(tri.cy);
			this.vertices.push(tri.depth);
			var _g2 = 0;
			while(_g2 < 3) {
				++_g2;
				this.colors.push(tri.r);
				this.colors.push(tri.g);
				this.colors.push(tri.b);
				this.colors.push(tri.a);
				this.indices.push(count++);
			}
		}
		var gl = this.gl;
		gl.bindBuffer(34962,gl.createBuffer());
		gl.bufferData(34962,new Float32Array(this.vertices),35044);
		var flo = gl.getAttribLocation(this.program,"pos");
		gl.vertexAttribPointer(flo,3,5126,false,0,0);
		gl.enableVertexAttribArray(flo);
		gl.bindBuffer(34962,null);
		var gl1 = this.gl;
		gl1.bindBuffer(34963,gl1.createBuffer());
		gl1.bufferData(34963,new Uint16Array(this.indices),35044);
		gl1.bindBuffer(34963,null);
		var gl2 = this.gl;
		gl2.bindBuffer(34962,gl2.createBuffer());
		gl2.bufferData(34962,new Float32Array(this.colors),35044);
		var flo1 = gl2.getAttribLocation(this.program,"color");
		gl2.vertexAttribPointer(flo1,4,5126,false,0,0);
		gl2.enableVertexAttribArray(flo1);
		gl2.bindBuffer(34962,null);
	}
	,render: function() {
		this.gl.clearColor(0.5,0.5,0.5,0.9);
		this.gl.enable(2929);
		this.gl.clear(16384);
		this.gl.viewport(0,0,this.canvas.width,this.canvas.height);
		var modelViewProjectionID = this.gl.getUniformLocation(this.program,"modelViewProjection");
		var m = this.modelViewProjection;
		this.matrix32Array.set([m._00,m._10,m._20,m._30,m._01,m._11,m._21,m._31,m._02,m._12,m._22,m._32,m._03,m._13,m._23,m._33]);
		this.gl.uniformMatrix4fv(modelViewProjectionID,false,this.matrix32Array);
		this.gl.drawArrays(4,0,this.indices.length);
	}
	,__class__: Test
};
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = true;
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) {
		return 0.0;
	}
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) {
		return 0;
	}
	var af = f < 0?-f:f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) {
		exp = -127;
	} else if(exp > 128) {
		exp = 128;
	}
	return (f < 0?-2147483648:0) | exp + 127 << 23 | Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js__$Boot_HaxeError(val);
	}
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = intf[_g1++];
			if(i == cl || js_Boot.__interfLoop(i,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		if((o instanceof Array)) {
			return o.__enum__ == null;
		} else {
			return false;
		}
		break;
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return true;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return (o|0) === o;
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					return true;
				}
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class && o.__name__ != null) {
			return true;
		}
		if(cl == Enum && o.__ename__ != null) {
			return true;
		}
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_html__$CanvasElement_CanvasUtil = function() { };
js_html__$CanvasElement_CanvasUtil.__name__ = true;
js_html__$CanvasElement_CanvasUtil.getContextWebGL = function(canvas,attribs) {
	var _g = 0;
	var _g1 = ["webgl","experimental-webgl"];
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		var ctx = canvas.getContext(name,attribs);
		if(ctx != null) {
			return ctx;
		}
	}
	return null;
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g1 = 0;
		var _g = len;
		while(_g1 < _g) this.a[_g1++] = 0;
		this.byteLength = len;
	}
};
js_html_compat_ArrayBuffer.__name__ = true;
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	new Uint8Array(result).set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_Float32Array = function() { };
js_html_compat_Float32Array.__name__ = true;
js_html_compat_Float32Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		var _g2 = [];
		var _g21 = 0;
		var _g11 = arr.length << 2;
		while(_g21 < _g11) {
			var i1 = _g21++;
			_g2.push(0);
		}
		arr.buffer = new js_html_compat_ArrayBuffer(_g2);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset >> 2;
		}
		arr = [];
		var _g12 = 0;
		var _g3 = length;
		while(_g12 < _g3) {
			var i2 = _g12++;
			var val = buffer.a[offset++] | buffer.a[offset++] << 8 | buffer.a[offset++] << 16 | buffer.a[offset++] << 24;
			arr.push(haxe_io_FPHelper.i32ToFloat(val));
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		var buffer1 = [];
		var _g4 = 0;
		while(_g4 < arr.length) {
			var f = arr[_g4];
			++_g4;
			var i3 = haxe_io_FPHelper.floatToI32(f);
			buffer1.push(i3 & 255);
			buffer1.push(i3 >> 8 & 255);
			buffer1.push(i3 >> 16 & 255);
			buffer1.push(i3 >>> 24);
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(buffer1);
	} else {
		throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js_html_compat_Float32Array._subarray;
	arr.set = js_html_compat_Float32Array._set;
	return arr;
};
js_html_compat_Float32Array._set = function(arg,offset) {
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js__$Boot_HaxeError("TODO");
	}
};
js_html_compat_Float32Array._subarray = function(start,end) {
	var a = js_html_compat_Float32Array._new(this.slice(start,end));
	a.byteOffset = start * 4;
	return a;
};
var js_html_compat_Uint8Array = function() { };
js_html_compat_Uint8Array.__name__ = true;
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset;
		}
		if(offset == 0) {
			arr = buffer.a;
		} else {
			arr = buffer.a.slice(offset,offset + length);
		}
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else {
		throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js__$Boot_HaxeError("TODO");
	}
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var a = js_html_compat_Uint8Array._new(this.slice(start,end));
	a.byteOffset = start;
	return a;
};
var linearAlgebra_Matrix4 = function(_00,_10,_20,_30,_01,_11,_21,_31,_02,_12,_22,_32,_03,_13,_23,_33) {
	this._00 = _00;
	this._10 = _10;
	this._20 = _20;
	this._30 = _30;
	this._01 = _01;
	this._11 = _11;
	this._21 = _21;
	this._31 = _31;
	this._02 = _02;
	this._12 = _12;
	this._22 = _22;
	this._32 = _32;
	this._03 = _03;
	this._13 = _13;
	this._23 = _23;
	this._33 = _33;
};
linearAlgebra_Matrix4.__name__ = true;
linearAlgebra_Matrix4.prototype = {
	__class__: linearAlgebra_Matrix4
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
}
var Float32Array = $global.Float32Array || js_html_compat_Float32Array._new;
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
js_Boot.__toStr = { }.toString;
js_html_compat_Float32Array.BYTES_PER_ELEMENT = 4;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
Test.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
