/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import { Cell, Obj } from '@ephox/katamari';

declare const tinymce: any;

type AttrList = Array<{ name: string, value: string }> & { map: Record<string, string> };

const DOM = tinymce.dom.DOMUtils.DOM;

const addPx = (value: string) => /^[0-9.]+$/.test(value) ? (value + 'px') : value;

const setAttributes = (attrs: AttrList, updatedAttrs: Record<string, any>) => {
  for (const name of Object.keys(updatedAttrs)) {
    const value = '' + updatedAttrs[name];

    if (attrs.map[name]) {
      let i = attrs.length;
      while (i--) {
        const attr = attrs[i];

        if (attr.name === name) {
          if (value) {
            attrs.map[name] = value;
            attr.value = value;
          } else {
            delete attrs.map[name];
            attrs.splice(i, 1);
          }
        }
      }
    } else if (value) {
      attrs.push({
        name,
        value
      });

      attrs.map[name] = value;
    }
  }
};

const updateEphoxEmbed = (data, attrs: AttrList) => {
  const style = attrs.map.style;
  const styleMap = style ? DOM.parseStyle(style) : { };
  styleMap['max-width'] = addPx(data.width);
  styleMap['max-height'] = addPx(data.height);
  setAttributes(attrs, {
    style: DOM.serializeStyle(styleMap)
  });
};

const updateHtml = (html: string, data, updateAll?: boolean): string => {
  const writer = tinymce.html.Writer();
  const isEphoxEmbed = Cell<boolean>(false);
  let sourceCount = 0;
  let hasImage;

  tinymce.html.SaxParser({
    validate: false,
    allow_conditional_comments: true,
    special: 'script,noscript',

    comment (text) {
      writer.comment(text);
    },

    cdata (text) {
      writer.cdata(text);
    },

    text (text, raw) {
      writer.text(text, raw);
    },

    start (name, attrs, empty) {
      if (isEphoxEmbed.get()) {
        // Don't make any changes to children of an EME embed
      } else if (Obj.has(attrs.map, 'data-ephox-embed-iri')) {
        isEphoxEmbed.set(true);
        updateEphoxEmbed(data, attrs);
      } else {
        switch (name) {
          case 'video':
          case 'object':
          case 'embed':
          case 'img':
          case 'iframe':
            if (data.height !== undefined && data.width !== undefined) {
              setAttributes(attrs, {
                width: data.width,
                height: data.height
              });
            }
            break;
        }

        if (updateAll) {
          switch (name) {
            case 'video':
              setAttributes(attrs, {
                poster: data.poster,
                src: ''
              });

              if (data.source2) {
                setAttributes(attrs, {
                  src: ''
                });
              }
              break;

            case 'iframe':
              setAttributes(attrs, {
                src: data.source1
              });
              break;

            case 'source':
              sourceCount++;

              if (sourceCount <= 2) {
                setAttributes(attrs, {
                  src: data['source' + sourceCount],
                  type: data['source' + sourceCount + 'mime']
                });

                if (!data['source' + sourceCount]) {
                  return;
                }
              }
              break;

            case 'img':
              if (!data.poster) {
                return;
              }

              hasImage = true;
              break;
          }
        }
      }

      writer.start(name, attrs, empty);
    },

    end (name) {
      if (!isEphoxEmbed.get()) {
        if (name === 'video' && updateAll) {
          for (let index = 1; index <= 2; index++) {
            if (data['source' + index]) {
              const attrs: any = [];
              attrs.map = {};

              if (sourceCount < index) {
                setAttributes(attrs, {
                  src: data['source' + index],
                  type: data['source' + index + 'mime']
                });

                writer.start('source', attrs, true);
              }
            }
          }
        }

        if (data.poster && name === 'object' && updateAll && !hasImage) {
          const imgAttrs: any = [];
          imgAttrs.map = {};

          setAttributes(imgAttrs, {
            src: data.poster,
            width: data.width,
            height: data.height
          });

          writer.start('img', imgAttrs, true);
        }
      }

      writer.end(name);
    }
  }, tinymce.html.Schema({})).parse(html);

  return writer.getContent();
};

export default {
  updateHtml
};