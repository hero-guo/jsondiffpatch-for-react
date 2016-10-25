/**
 * Created by guoguangyu on 2016/10/25.
 */
import React, { Component, PropTypes } from 'react';
import jsondiffpatch from 'jsondiffpatch/src/main';
import formatters from 'jsondiffpatch/src/main-formatters';

require('jsondiffpatch/public/formatters-styles/html.css');
require('jsondiffpatch/public/formatters-styles/annotated.css');

class JsonDiffReact extends Component {
  static propTypes = {
    right: PropTypes.any,
    left: PropTypes.any,
    show: PropTypes.bool,
    annotated: PropTypes.bool,
    tips: PropTypes.string,
  };
  render() {
    const {right, left, show = true, annotated = false, tips} = this.props;
    const delta = jsondiffpatch.diff(left, right);
    const html = annotated ?
      formatters.annotated.format(delta) : formatters.html.format(delta, left);
    show ? formatters.html.showUnchanged() : formatters.html.hideUnchanged();
    const text = tips || '无差异！';
    return (
      html ?
        <div dangerouslySetInnerHTML={{__html: html}} /> :
          <p style={{fontSize: 12, color: '#999'}}>{text}</p>
    );
  }
}
export default JsonDiffReact;

