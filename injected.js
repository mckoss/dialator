(function() {
  function patchTimers(global) {
    var realSetTimeout = global.setTimeout;

    function mySetTimeout(fn, ms) {
      realSetTimeout(fn, ms/10);
    }
    mySetTimeout.patched = true;

    if (realSetTimeout && !realSetTimeout.patched) {
      global.setTimeout = mySetTimeout;
    }
  }

  patchTimers(window);
}());
