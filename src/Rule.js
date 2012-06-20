/*
** Rule
*/
function Rule( ) {
    var label;
    Array.toArray( arguments ).forEach( function ( arg ) {
        switch ( getTypeOf( arg ) ) {
            case 'regexp':
                if ( label !== undefined ) {
                    throw new Error( );
                }
                label = arg.source;
                break;
        }
    }, this );
    this.label = label;
    //delete label;
    return this;
}