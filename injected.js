(function() {
  function patchTimers(global) {
    var realSetTimeout = global.setTimeout;

    function mySetTimeout(fn, ms) {
      realSetTimeout(fn, ms/10);
    }
    mySetTimeout.patched = true;

    if (realSetTimeout && !realSetTimeout.patched) {
      debugger;
      console.log("Patching setTimeout.");
      global.setTimeout = mySetTimeout;
    }
  }

  // TODO: Patch all iframes too.
  patchTimers(window);
  var iframes = document.getElementsByTagName('iframe');
  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i];
    console.log("Iframe: ", iframe);
  }
}());
