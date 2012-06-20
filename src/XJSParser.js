function XJSParser( language ) {
    if ( getTypeOf( language ) !== 'string' ) {
        throw new TypeError( );
    }
    this.language = language;
    var syntax = this.syntax = XJSParser.syntaxes[ language ];
    if ( ! ( syntax instanceof ProductionSet ) ) {
        throw new TypeError( );
    }
    return this;
}
XJSParser.syntaxes = Object.create( null );
Object.defineProperties( XJSParser.prototype, {
    parse: {
        value: function ( src ) {
            var syntax = this.syntax;
            return syntax.exec.apply( syntax, arguments );
        }
    }
} );