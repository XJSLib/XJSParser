/*
** Rule > Operator
*/
function Operator( ) {
    var operands;
    var args = Array.toArray( arguments ).filter( function ( arg ) {
        if ( Array.isArray( arg ) ) {
            if ( operands !== undefined ) {
                throw new Error( );
            }
            operands = arg.map( function ( operand ) {
                return getTypeOf( operand ) === 'string' ? new Terminal( operand ) : operand;
            } );
            return false;
        } else {
            return true;
        }
    }, this );
    this.operands = operands;
    Rule.apply( this, args );
    return this;
}
Operator.inherits( Rule );