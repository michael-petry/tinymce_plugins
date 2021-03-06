/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import { document, window } from '@ephox/dom-globals';

declare const tinymce: any;

const appendClickRemove = function (link, evt) {
  document.body.appendChild(link);
  link.dispatchEvent(evt);
  document.body.removeChild(link);
};

const open = function (url) {
  // Chrome and Webkit has implemented noopener and works correctly with/without popup blocker
  // Firefox has it implemented noopener but when the popup blocker is activated it doesn't work
  // Edge has only implemented noreferrer and it seems to remove opener as well
  // Older IE versions pre IE 11 falls back to a window.open approach
  if (!tinymce.Env.ie || tinymce.Env.ie > 10) {
    const link = document.createElement('a'); // do not replace with snt-link
    link.target = '_blank';
    link.href = url;
    link.rel = 'noreferrer noopener';

    const evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    appendClickRemove(link, evt);
  } else {
    const win: any = window.open('', '_blank');
    if (win) {
      win.opener = null;
      const doc = win.document;
      doc.open();
      doc.write('<meta http-equiv="refresh" content="0; url=' + tinymce.dom.DOMUtils.DOM.encode(url) + '">');
      doc.close();
    }
  }
};

export default {
  open
};