package;
import java.javax.swing.JPanel;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.RenderingHints;

class Sprite extends JPanel {
    // drawing function set externally to the JPanel
    public var paintFunction:   Graphics2D -> Void;
    public function new( paintFunction_: Graphics2D -> Void ){ 
      super( true );
      paintFunction = paintFunction_;
    }
    
    @:overload
    override public function paintComponent( g: Graphics ){
        // magic used to stop flickering when redrawing for animation later.        
        super.paintComponent( g );
        // Strange but we need to cast so we can paint        
        var g2D: Graphics2D = cast g;
        // make drawing antialias so smooth not pixelated edges        
        g2D.setRenderingHint( RenderingHints.KEY_ANTIALIASING
                            , RenderingHints.VALUE_ANTIALIAS_ON );
        g2D.setRenderingHint( RenderingHints.KEY_RENDERING
                            , RenderingHints.VALUE_RENDER_QUALITY );
        paintFunction( g2D );
        // release memory of Graphics2D after finished drawing with it.        
        g2D.dispose();
    }
  
}
