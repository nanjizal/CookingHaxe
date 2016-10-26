package svgShapes;

import js.Browser;
import js.html.svg.SVGElement;

abstract SvgCircle( SVGElement ) from SVGElement to SVGElement {
    inline public static var svgNameSpace: String = "http://www.w3.org/2000/svg" ;
    public inline function new( ?e: SVGElement ){
        if( e == null ){
            this = create();
        } else {
            this = e;
        }
    }
    inline static public function create(): SvgCircle {
        var svgCircle: SVGElement = cast Browser.document.createElementNS( svgNameSpace, 'circle' );
        return svgCircle;
    }
    public var cx( get, set ): Float;
    inline public function set_cx( cx_: Float ):Float {
        this.setAttribute( "cx", Std.string( cx_ ) );
        return( cx_ );
    }
    inline public function get_cx(): Float {
        return Std.parseFloat( this.getAttribute( "cx" ) );
    }
    public var cy( get, set ): Float;
    inline public function set_cy( cy_: Float ):Float {
        this.setAttribute( "cy", Std.string( cy_ ) );
        return( cy_ );
    }
    inline public function get_cy(): Float {
        return Std.parseFloat( this.getAttribute( "cy" ) );
    }
    public var r( get, set ): Float;
    inline public function set_r( r_: Float ):Float {
        this.setAttribute( "r", Std.string( r_ ) );
        return( r_ );
    }
    inline public function get_r(): Float {
        return Std.parseFloat( this.getAttribute( "r" ) );
    }
    public var strokeWidth( get, set ): Float;
    inline public function set_strokeWidth( strokeWidth_: Float ):Float {
        this.setAttribute( "stroke-width", Std.string( strokeWidth_ ) );
        return( strokeWidth_ );
    }
    inline public function get_strokeWidth(): Float {
        return Std.parseFloat( this.getAttribute( "stroke-width" ) );
    }
    
    public var fill( get, set ): String;
    inline public function set_fill( fill_: String ): String {
        this.setAttribute( "fill", fill_ );
        return fill_;
    }
    inline public function get_fill():String {
        return this.getAttribute( "fill" );
    }
    
    inline public function setFillAndAlpha( col: Int, ?alpha: Float ): Void {
        fill = getColor( col, alpha );
    }
    public var strokeFill( get, set ): String;
    inline public function set_strokeFill( fill_: String ): String {
        this.setAttribute( "stroke", fill_ );
        return fill_;
    }
    inline public function get_strokeFill():String {
        return this.getAttribute( "stroke" );
    }
    inline public function setStrokeFillAndAlpha( col: Int, ?alpha: Float ): Void {
        strokeFill = getColor( col, alpha );
    }
    public static inline function getColor( col: Int, ?alpha: Float ):String{
		if( alpha != null && alpha != 1.0 ){
			var r = (col >> 16) & 0xFF;
			var g = (col >> 8) & 0xFF;
			var b = (col) & 0xFF;
			 return 'rgba($r,$g,$b,$alpha)';
		} else {
			return '#' + StringTools.hex( col, 6 );
		}
	}
}
