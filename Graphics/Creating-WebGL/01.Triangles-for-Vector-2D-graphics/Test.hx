package;
import js.html.Float32Array;
import js.html.CanvasElement;
import js.html.webgl.RenderingContext;
import js.html.webgl.Program;
import js.html.webgl.Shader;
import js.Browser;
import js.html.Uint16Array;
import js.html.StyleElement;
import linearAlgebra.Matrix4; // based on Kha framework maths, provides a transform matrix.
using Test;
class ColorTriangle{
    public static var offsetX: Float;
    public static var offsetY: Float;
    public static var scaleX: Float;
    public static var scaleY: Float;
    public var ax: Float;
    public var ay: Float;
    public var bx: Float;
    public var by: Float;
    public var cx: Float;
    public var cy: Float;
    public var depth: Float;
    public var r: Float;
    public var g: Float;
    public var b: Float;
    public var a: Float;
    public function new(  color_: Int
                        , ax_: Float, ay_: Float
                        , bx_: Float, by_: Float
                        , cx_: Float, cy_: Float
                        , depth_: Float ){
        ax = scaleX * ( ax_ - offsetX );
        ay = scaleY * ( ay_ - offsetY );
        bx = scaleX * ( bx_ - offsetX );
        by = scaleY * ( by_ - offsetY );
        cx = scaleX * ( cx_ - offsetX );
        cy = scaleY * ( cy_ - offsetY );
        depth = depth_;
        a = 1.0;
        r = ((color_ >> 16) & 255) / 255;
        g = ((color_ >> 8) & 255) / 255;
        b = (color_ & 255) / 255;
    }
}

class Test {
    
    public static inline var vertexString: String =
        'attribute vec3 pos;' +
        'attribute vec4 color;' +
        'varying vec4 vcol;' +
        'uniform mat4 modelViewProjection;' +
        'void main(void) {' +
            ' gl_Position = modelViewProjection * vec4(pos, 1.0);' +
            ' vcol = color;' +
        '}';
    
    public static inline var fragmentString: String =
        'precision mediump float;'+
        'varying vec4 vcol;' +
        'void main(void) {' +
            ' gl_FragColor = vcol;' +
        '}';
    
    public static inline function ident(): Array<Float> {
        return [ 1.0, 0.0, 0.0, 0.0,
                 0.0, 1.1, 0.0, 0.0,
                 0.0, 0.0, 1.0, 0.0,
                 0.0, 0.0, 0.0, 1.0
                 ];
    }
    
    // converts from our internal representation of a matrix to the Float32Array that webgl uses.
    public static inline function transferM4_arr32( arr: Float32Array, m: Matrix4 ) {
        arr.set([ m._00, m._10, m._20, m._30, m._01, m._11, m._21, m._31, m._02, m._12, m._22, m._32, m._03, m._13, m._23, m._33 ]);
    }
    
    public static inline function haxeLogoTriangles(): Array<ColorTriangle> {
        var scaleDown = 6.5/10;
        // The logo is 128x128, but for webgl we need it to be within plus and minus 1
        // so we need to offset it by 128/2 making half the image below 0.
        // and then we scale the image to fit within bounds.
        ColorTriangle.offsetX = 64;
        ColorTriangle.offsetY = 64;
        ColorTriangle.scaleX = 1/64 * scaleDown;
        ColorTriangle.scaleY = 1/64 * scaleDown;
        return [    new ColorTriangle( 0xf7941e, 16, 64, 64, 16, 64, 112, 0 )
                ,   new ColorTriangle( 0xf7941e, 64, 16, 64, 112, 112, 64, 0 )
                ,   new ColorTriangle( 0xfdb813, 16, 64, 64, 16, 0, 0, 0 )
                ,   new ColorTriangle( 0xfaa61a, 64, 112, 16, 64, 0, 128, 0 )
                ,   new ColorTriangle( 0xf36f21, 112, 64, 64 ,112, 128, 128, 0 )
                ,   new ColorTriangle( 0xf58220, 64, 16, 112, 64, 128, 0, 0 )
                ,   new ColorTriangle( 0xffcb08, 0, 0, 64, 16, 32, 0, 0 )
                ,   new ColorTriangle( 0xfff200, 0, 0, 0, 32, 16, 64, 0 )
                ,   new ColorTriangle( 0xfff200, 0, 128, 16, 64, 0, 96, 0 )
                ,   new ColorTriangle( 0xf4813c, 0, 128, 32, 128, 64, 112, 0 )
                ,   new ColorTriangle( 0xf7941e, 128, 128, 64, 112, 96, 128, 0 )
                ,   new ColorTriangle( 0xf15922, 128, 128, 128, 96, 112, 64, 0 )
                ,   new ColorTriangle( 0xf15922, 128, 0, 112, 64, 128, 32, 0 )
                ,   new ColorTriangle( 0xffcb08, 128, 0, 96, 0, 64, 16, 0 )
        ];
    }
    
    static function main(){
        new Test();
    }
    
    public static inline var width: Int = 500;
    public static inline var height: Int = 500;
    var canvas: CanvasElement;
    var gl: RenderingContext;
    var program: Program;
    var vertices = new Array<Float>();
    var indices = new Array<Int>();
    var colors = new Array<Float>();
    var theta = 0.0; // Angle in radians
    var modelViewProjection = Matrix4.identity(); // external matrix controlling global 3d position
    var matrix32Array = new Float32Array( ident() ); // internal matrix passed to shader
    
    public function new(){
        gl = createWebGl( width, height );
        // 'using' allows us to put gl in front of the function making the code more descriptive
        var vertex = gl.createShaderFromString( RenderingContext.VERTEX_SHADER, vertexString );
        var fragment = gl.createShaderFromString( RenderingContext.FRAGMENT_SHADER, fragmentString );
        program = gl.createShaderProgram( vertex, fragment );
        setTriangles( haxeLogoTriangles() );
        injectCSSenterFrame();
    }
    
    // rather ugly way to inject add a css enterframe loop for animation into the head of document.
    function injectCSSenterFrame(){
        var s = Browser.document.createStyleElement();
        s.innerHTML = "@keyframes spin { from { transform:rotate( 0deg ); } to { transform:rotate( 360deg ); } }";
        Browser.document.getElementsByTagName("head")[0].appendChild( s );
        (cast s).animation = "spin 1s linear infinite";
        loop( 60.0 );
    }
    
    function loop( tim: Float ): Bool {
        Browser.window.requestAnimationFrame( loop );
        onFrame();
        return true;
    }
    
    // called every frame, sets transform and redraws
    function onFrame(){
        // we can multiply two rotations to get an interesting movement of the static 2D triangles.
        modelViewProjection = Matrix4.rotationZ( theta += Math.PI/100 ).multmat( Matrix4.rotationY( theta ) );
        render();
    }
    
    function createWebGl( width_: Int, height_: Int ): RenderingContext {
        canvas = Browser.document.createCanvasElement();
        canvas.width = width;
        canvas.height = height;
        var dom = cast canvas;
        var style = dom.style;
        style.paddingLeft = "0px";
        style.paddingTop = "0px";
        style.left = '0px';
        style.top = '0px';
        style.position = "absolute";
        Browser.document.body.appendChild( cast canvas );
        return canvas.getContextWebGL();
    }
    
    static inline function createShaderProgram( gl: RenderingContext, vertex: Shader, fragment: Shader ): Program {
        var program = gl.createProgram();
        gl.attachShader( program, vertex );
        gl.attachShader( program, fragment );
        gl.linkProgram( program );
        gl.useProgram( program );
        return program;
    }
    
    // used for generating fragment and vertex shaders from strings
    static inline function createShaderFromString( gl: RenderingContext, shaderType: Int, shaderString: String ): Shader {
        var shader = gl.createShader( shaderType );
        gl.shaderSource( shader, shaderString ); 
        gl.compileShader( shader );
        return shader;
    }
    
    function setTriangles( triangles: Array<ColorTriangle> ) {
        var tri: ColorTriangle;
        var count = 0;
        for( i in 0...triangles.length ){
            tri = triangles[ i ];
            vertices.push( tri.ax );
            vertices.push( tri.ay );
            vertices.push( tri.depth );
            vertices.push( tri.bx );
            vertices.push( tri.by );
            vertices.push( tri.depth );
            vertices.push( tri.cx );
            vertices.push( tri.cy );
            vertices.push( tri.depth );
            for( k in 0...3 ){
                colors.push( tri.r );
                colors.push( tri.g );
                colors.push( tri.b );
                colors.push( tri.a );
                indices.push( count++ );
            }
        } 
        gl.passAttributeToShader( program, 'pos', 3, vertices ); // position data
        gl.passIndicesToShader( indices ); // indices data 
        gl.passAttributeToShader( program, 'color', 4, colors ); // color data
    }
    
    static inline function passIndicesToShader( gl: RenderingContext, indices: Array<Int> ){
        var indexBuffer = gl.createBuffer(); // triangle indicies data 
        gl.bindBuffer( RenderingContext.ELEMENT_ARRAY_BUFFER, indexBuffer );
        gl.bufferData( RenderingContext.ELEMENT_ARRAY_BUFFER, new Uint16Array( indices ), RenderingContext.STATIC_DRAW );
        gl.bindBuffer( RenderingContext.ELEMENT_ARRAY_BUFFER, null );
    }
    
    // generic passing attributes to shader.
    static inline function passAttributeToShader( gl: RenderingContext, program: Program, name: String, att: Int, arr: Array<Float> ){
        var floatBuffer = gl.createBuffer();
        gl.bindBuffer( RenderingContext.ARRAY_BUFFER, floatBuffer );
        gl.bufferData( RenderingContext.ARRAY_BUFFER, new Float32Array( arr ), RenderingContext.STATIC_DRAW );
        var flo = gl.getAttribLocation( program, name );
        gl.vertexAttribPointer( flo, att, RenderingContext.FLOAT, false, 0, 0 ); 
        gl.enableVertexAttribArray( flo );
        gl.bindBuffer( RenderingContext.ARRAY_BUFFER, null );
    }
    
    function render(){
        // setup and clear
        gl.clearColor( 0.5, 0.5, 0.5, 0.9 );
        gl.enable( RenderingContext.DEPTH_TEST );
        gl.clear( RenderingContext.COLOR_BUFFER_BIT );
        gl.viewport( 0, 0, canvas.width, canvas.height );
        // apply transform matrices 
        var modelViewProjectionID = gl.getUniformLocation( program, 'modelViewProjection' );
        transferM4_arr32( matrix32Array, modelViewProjection );    
        gl.uniformMatrix4fv( modelViewProjectionID, false, matrix32Array );
        // draw
        gl.drawArrays( RenderingContext.TRIANGLES, 0, indices.length );
    }
    
}
