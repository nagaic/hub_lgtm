import {Image} from './components/image'

import socket from './socket'

$(function() {
  // measure of Safari and IE cache
  $.ajaxSetup({
    cache: false
  });

  // initialize load
  Image.renderLGTM();

  // initialize tooltip
  $('button').tooltip('destroy');

  // copy button handler
  $(".lgtm_img_copy").each((i, obj) => {
    Image.setHandler(i, obj);
  });

  socket()
});