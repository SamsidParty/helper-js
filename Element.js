Element.prototype.createBinding = function(itemToBind) {
    var binding = new DataBinding(this, itemToBind);
    return binding;
}