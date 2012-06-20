// ++
var operators = {
    Or:function(){return Or.apply(Object.create(Or.prototype),arguments)},
    And: function(){return And.apply(Object.create(And.prototype),arguments)},
    Repeat: function(){return Repeat.apply(Object.create(Repeat.prototype),arguments)},
    Optionnal: function(){return Optionnal.apply(Object.create(Optionnal.prototype),arguments)}
}