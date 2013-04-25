/**
 * Expose `sort`.
 */

exports = module.exports = sort;

/**
 * Sort `el`'s children with the given `fn(a, b)`.
 * Optionally specify `els` to sort instead of `el`'s children
 *
 * @param {Element} el
 * @param {Elements} els
 * @param {Function} fn
 * @api public
 */

function sort(el, els, fn) {
  if (!fn) {
    fn = els;
    els = el.children;
  }
  if (!els) els = el.children;
  var arr = [].slice.call(els).sort(fn);
  var frag = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    frag.appendChild(arr[i]);
  }
  el.appendChild(frag);
};

/**
 * Sort descending.
 *
 * @param {Element} el
 * @param {Function} fn
 * @api public
 */

exports.desc = function(el, els, fn){
  sort(el, els, function(a, b){
    return ~fn(a, b) + 1;
  });
};

/**
 * Sort ascending.
 */

exports.asc = sort;
