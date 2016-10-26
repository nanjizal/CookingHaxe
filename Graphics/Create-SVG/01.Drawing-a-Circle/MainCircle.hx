package;
import svgShapes.SvgRoot;
import svgShapes.SvgCircle;

class MainCircle{
    
    public static function main(){
        new MainCircle();
    }
    var svgRoot: SvgRoot;
    
    public function new(){
        svgRoot = new SvgRoot();
        svgRoot.width = 800;
        svgRoot.height = 800;
        createCircle();
    }
    
    public function createCircle(){
        var svgCircle = new SvgCircle();
        svgCircle.cx = 200;
        svgCircle.cy = 200;
        svgCircle.r = 50;
        svgCircle.setFillAndAlpha( 0xff0000, 1 );
        svgRoot.add( svgCircle );
    }
}
