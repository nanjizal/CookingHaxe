package;
import java.lang.System;
import java.javax.swing.JPanel;
import java.javax.swing.JFrame;
import java.awt.Container;
import Sprite;// our custom JPanel
import java.awt.Graphics2D;
import java.awt.Color;
class MainCircle extends JFrame {
    
    public static function main(){ 
        new MainCircle(); 
    } 
    
    public function new(){
        // The view windows title.
        super('Java Swing Circle Example');
        // Specify to use Hardware rendering.
        System.setProperty("sun.java2d.opengl","True");
        // Set window size to 700 pixels wide by 500 pixels high.
        setSize( 700, 500 );
        // Add a close button to window.
        setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE );
        // Set the background to black.
        setBackground( Color.black );
        // Centre the view window in centre of users screen.
        setLocationRelativeTo(null);
        // add a JPanel and draw a circle on it.
        createCircle(); 
        // Show the view window.
        setVisible( true );
    }
    function createCircle(){
        var drawCircle = function( g2D: Graphics2D ){
                    // set drawing color
                    g2D.setColor(Color.red);
                    // draw a fill oval, x, y, wide, hi
                    g2D.fillOval( 300, 120, 150, 150 );
        }
        var circle = new Sprite( drawCircle );
        var container = getContentPane();
        container.add( circle );
    }
}
