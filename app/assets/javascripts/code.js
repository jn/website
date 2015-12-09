$(document).on("page:change", function(){

  (function() {
      var pre = document.getElementsByTagName('pre'),
          pl = pre.length;
      for (var i = 0; i < pl; i++) {
          if (pre[i].innerHTML.indexOf("<code>") == -1) {
            pre[i].innerHTML = "<code>" + pre[i].innerHTML + "</code>";
          }
          pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
          var num = pre[i].innerHTML.split(/\n/).length - 1;
          for (var j = 0; j < num; j++) {
              var line_num = pre[i].getElementsByTagName('span')[0];
              line_num.innerHTML += '<span>' + (j + 1) + '</span>';
          }
      }
  })();

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

});
