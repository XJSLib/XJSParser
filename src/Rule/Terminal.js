/*
** Rule > Terminal
*/
function Terminal( ) {
    var string;
    var args = Array.toArray( arguments ).filter( function ( arg ) {
        if ( getTypeOf( arg ) === 'string' ) {
            if ( string !== undefined ) {
                throw new Error( );
            }
            string = arg;
            return false;
        } else {
            return true;
        }
    } );
    this.string = string;
    Rule.apply( this, args );
    return this;
}
Terminal.inherits( Rule );
Object.defineProperties( Terminal.prototype, {
    exec: {
        value: function ( iterator, options ) {
            var string = this.string;
            var length = string.length;
            if ( iterator.string.substr( iterator.index, length ) === string ) {
                iterator.index += length;
                return [ new XJSToken( string ) ];
            } else {
                return null;
            }
        }
    }
} );