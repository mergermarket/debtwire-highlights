// ==UserScript==
// @name         Debtwire Highlights
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        https://www.debtwire.com/intelligence/view/*
// @grant          GM_addStyle
// @updateURL    https://raw.githubusercontent.com/mergermarket/debtwire-highlights/master/debtwire-highlights.tamper.js
// @downloadURL  https://raw.githubusercontent.com/mergermarket/debtwire-highlights/master/debtwire-highlights.tamper.js
// ==/UserScript==
GM_addStyle(`
button[data-balloon] {
  overflow: visible;
}
[data-balloon] {
  position: relative;
}
[data-balloon]:before,
[data-balloon]:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -khtml-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.18s ease-out 0.18s;
  transition: all 0.18s ease-out 0.18s;
  bottom: 100%;
  left: 50%;
  position: absolute;
  z-index: 10;
  -webkit-transform: translate(-50%, 10px);
  -ms-transform: translate(-50%, 10px);
  transform: translate(-50%, 10px);
  -webkit-transform-origin: top;
  -ms-transform-origin: top;
  transform-origin: top;
}
[data-balloon]:after {
  background: rgba(17, 17, 17, 0.9);
  border-radius: 4px;
  color: #fff;
  content: attr(data-balloon);
  font-size: 12px;
  padding: .5em 1em;
  white-space: nowrap;
  margin-bottom: 11px;
}
[data-balloon]:before {
  background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;
  background-size: 100% auto;
  height: 6px;
  width: 18px;
  content: "";
  margin-bottom: 5px;
}
[data-balloon]:hover:before,
[data-balloon][data-balloon-visible]:before,
[data-balloon]:hover:after,
[data-balloon][data-balloon-visible]:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  -khtml-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
  pointer-events: auto;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
[data-balloon].font-awesome:after {
  font-family: FontAwesome;
}
[data-balloon][data-balloon-break]:after {
  white-space: pre;
}
[data-balloon-pos="down"]:before,
[data-balloon-pos="down"]:after {
  bottom: auto;
  left: 50%;
  top: 100%;
  -webkit-transform: translate(-50%, -10px);
  -ms-transform: translate(-50%, -10px);
  transform: translate(-50%, -10px);
}
[data-balloon-pos="down"]:after {
  margin-top: 11px;
}
[data-balloon-pos="down"]:before {
  background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;
  background-size: 100% auto;
  height: 6px;
  width: 18px;
  margin-top: 5px;
  margin-bottom: 0;
}
[data-balloon-pos="down"]:hover:before,
[data-balloon-pos="down"][data-balloon-visible]:before,
[data-balloon-pos="down"]:hover:after,
[data-balloon-pos="down"][data-balloon-visible]:after {
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
[data-balloon-pos="left"]:before,
[data-balloon-pos="left"]:after {
  bottom: auto;
  left: auto;
  right: 100%;
  top: 50%;
  -webkit-transform: translate(10px, -50%);
  -ms-transform: translate(10px, -50%);
  transform: translate(10px, -50%);
}
[data-balloon-pos="left"]:after {
  margin-right: 11px;
}
[data-balloon-pos="left"]:before {
  background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;
  background-size: 100% auto;
  height: 18px;
  width: 6px;
  margin-right: 5px;
  margin-bottom: 0;
}
[data-balloon-pos="left"]:hover:before,
[data-balloon-pos="left"][data-balloon-visible]:before,
[data-balloon-pos="left"]:hover:after,
[data-balloon-pos="left"][data-balloon-visible]:after {
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
[data-balloon-pos="right"]:before,
[data-balloon-pos="right"]:after {
  bottom: auto;
  left: 100%;
  top: 50%;
  -webkit-transform: translate(-10px, -50%);
  -ms-transform: translate(-10px, -50%);
  transform: translate(-10px, -50%);
}
[data-balloon-pos="right"]:after {
  margin-left: 11px;
}
[data-balloon-pos="right"]:before {
  background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;
  background-size: 100% auto;
  height: 18px;
  width: 6px;
  margin-bottom: 0;
  margin-left: 5px;
}
[data-balloon-pos="right"]:hover:before,
[data-balloon-pos="right"][data-balloon-visible]:before,
[data-balloon-pos="right"]:hover:after,
[data-balloon-pos="right"][data-balloon-visible]:after {
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
[data-balloon-length]:after {
  white-space: normal;
}
[data-balloon-length="small"]:after {
  width: 80px;
}
[data-balloon-length="medium"]:after {
  width: 150px;
}
[data-balloon-length="large"]:after {
  width: 260px;
}
[data-balloon-length="xlarge"]:after {
  width: 90vw;
}
@media screen and (min-width: 768px) {
  [data-balloon-length="xlarge"]:after {
    width: 380px;
  }
}
[data-balloon-length="fit"]:after {
  width: 100%;
}
            `);
(function() {
    'use strict';
    
    // SCRIPT BELOW THIS LINE----------------------------------------------------------------
var urlHash = window.location.hash !== ''
var hashParts = (urlHash && splitHash(window.location.hash.substr(1))) || {'highlight':[]}
var highlightedRegister = hashParts['highlight'].length && JSON.parse(atob(hashParts['highlight'])) || []
window.highlightedRegister = highlightedRegister
var intelArticles = document.querySelectorAll('.headline-card.intel-article')

if(highlightedRegister.length === 0){
  intelArticles.forEach(function(articleTag) {
    var o = Object.assign({}, {
      intelId: 0
    })
    o.intelId = articleTag.querySelector('.headline-card__main h1').id.split('-')[2]
    highlightedRegister.push(o)
  })
} else {
  highlightedRegister.forEach(function(hl) {
      if (!hl.start || !hl.len) return
      var article = document.getElementById(hl.intelId).firstElementChild
      highlight(article,hl.start, hl.len, hl.comment, hl.id )
  })
}

document.addEventListener('mouseup', function() {  
    if (!window.getSelection) return false
    var selection = window.getSelection()
    if (!selection.toString().length) return
    toggleHighlight(selection) 

    updateUrl();
}, false);

function updateUrl() {
    hashParts['highlight'] = btoa(JSON.stringify(highlightedRegister))
    //console.log(hashParts)
    //console.log(`#${joinHash(hashParts)}`)
    window.location.hash = `#${joinHash(hashParts)}`
      console.log('url', highlightedRegister)
}
    
function getSelectedText() {
  if (window.getSelection) {
    var selection = window.getSelection();
    return {
      text: selection.toString(),
      containingElement: selection.baseNode,
      baseOffset: selection.baseOffset,
      focusOffset: selection.focusOffset
    };
  }
  return null;
}

function splitHash(url) {
  var components = {}
  var hashParts = url.split('&')
  
  var keysValues = hashParts.filter(function(kv){
    var kvArr = kv.split('=')
    var key = kvArr[0]
    var value = kvArr[1]
    components[key] = value
  })
  return components
}

function joinHash(o) {
  return Object.keys(o).map(k => `${k}=${o[k]}`).join('&');
}

function getDomPath(el) {
  if (!el) {
    return;
  }
  var stack = [];
  while (el.parentNode != null) {
    // console.log(el.nodeName);
    var sibCount = 0;
    var sibIndex = 0;
    // get sibling indexes
    for ( var i = 0; i < el.parentNode.childNodes.length; i++ ) {
      var sib = el.parentNode.childNodes[i];
      if ( sib.nodeName == el.nodeName ) {
        if ( sib === el ) {
          sibIndex = sibCount;
        }
        sibCount++;
      }
    }
    var nodeName = el.nodeName.toLowerCase();
    if ( sibCount > 1 ) {
      stack.unshift(nodeName + ':nth-of-type(' + (sibIndex + 1) + ')');
    } else {
      stack.unshift(nodeName);
    }
    el = el.parentNode;
  }
  stack.splice(0,1); // removes the html element
  return stack.join(' > ');
}

function toggleHighlight(selection) {
  var el = selection.baseNode
  var intelId = getClosest(el.parentNode, 'article').querySelector('.headline-card__main h1').id.split('-')[2]
  var hl = highlightSelection(selection)

  highlightedRegister.push({intelId: intelId, start: hl.start, len: hl.len, comment: hl.comment, id: hl.id})

  return null
}

function togglePath(o, path) {
  var index = o.highlightedParagraphPaths.indexOf(path)
  if(index === -1) {
    o.highlightedParagraphPaths.push(path)
  } else {
    o.highlightedParagraphPaths.splice(index)
  }
}

function toggleHighlightElement(el) {
  el.innerHTML = el.firstChild.tagName === 'MARK' ? el.firstChild.innerHTML : "<mark>"+el.innerHTML+"</mark>"
}

function getClosest( elem, selector ) {

  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // Get closest match
  for ( ; elem && elem !== document; elem = elem.parentNode ) {
    if ( elem.matches( selector ) ) {
      return elem;
    }
  }

  return null;

};
    
    
    
    
    // Custom highlight
    
function highlight(element, start, len, comment, id) {
    var html = element.innerHTML
    var updatedHtml = ''
    var inTag = false
    var inMark = false
    var count = 0
    var i = 0
    while (i < html.length) {
        var current = getNextChar(html, i)
        switch (current) {
            case '<': 
                inTag = true
                if (isInSelection()) {
                    endMark()
                }
                break
            case '>': inTag = false; break
            default: 
                if (inTag) break;

                count++
                if (isInSelection() && !inMark) {
                    startMark()
                }

                if (count === start + len + 1) {
                    if (!comment.length) {
                        updatedHtml += '<input id=' + id + ' value=""/>'
                    }
                    endMark()
                }

                break;
        }
       

        function getNextChar() {
            var current = html[i]
            if (current === '&' && !inTag) {
                var special = ['&nbsp;', '&amp;']
                for (var j = 0; j < special.length; j++) {
                    if (html.slice(i).indexOf(special[j]) === 0) {
                        current = ''
                        updatedHtml += special[j]
                        i += special[j].length - 1
                    }
                }
            }
            return current 
        }

        function isInSelection() {
            return count > start && count < start + len + 1
        }

        function startMark() {
            updatedHtml += '<mark class="' + id + '" data-balloon-length="xlarge" data-balloon="' + comment + '">'
            inMark = true
        }

        function endMark() {
            updatedHtml += '</mark>'
            inMark = false
        }
        
        updatedHtml += current
        i++
    }
    //console.log('updated: ', updatedHtml)
    element.innerHTML = updatedHtml
    var inputbox = document.getElementById(id)
    console.log('inupt', inputbox)
    if (!inputbox) return
    
    inputbox.addEventListener ("keydown", onKeyDown, false);
    function onKeyDown() {
        if(event.keyCode == 13){
            document.querySelectorAll('.' + id + '').forEach(function(el) { 
                el.dataset.balloon=event.target.value; });
            event.target.parentNode.removeChild(event.target);
            highlightedRegister.filter(function(r) {
                return r.id === id
            }).forEach(function(r) {
                r.comment = event.target.value + ' ' 
            });
            updateUrl();
        }
    }
}

function findAncestor (el, cls) {
    while ((el = el.parentNode) && (!el.className || el.className.indexOf(cls) < 0));
    return el;
}

function getStartInParent(selectedRange, parent) {
    var rangeFromStart = selectedRange.cloneRange()
    rangeFromStart.selectNodeContents(parent)
    rangeFromStart.setEnd(selectedRange.startContainer, selectedRange.startOffset)
    var offsetFromStart = rangeFromStart.toString().length
    return offsetFromStart
} 

function highlightSelection (selection) {
    var range = selection.getRangeAt(0)
    var article = findAncestor(range.startContainer, 'headline-card')
    var start = getStartInParent(range, article)
    var len = range.toString().length
    var comment = '' 
    var id = 'm' + new Date().getTime()
    
    highlight(article, start, len, comment, id)

    return {intelId: 1, start: start, len: len, comment: comment, id: id}
}
    
window.saveComment = function saveComment(event) {

}
// SCRIPT ABOVE THIS LINE----------------------------------------------------------------
})();
