# jsondiffpatch-for-react
jsondiffpatch for react简单封装

#1. install

    npm install jsondiffpatch-for-react

#2. usage

    import React from 'react';
    import JsonDiffReact from 'jsondiffpatch-for-react';

    <JsonDiffReact
        right: PropTypes.any,
        left: PropTypes.any,
        show: PropTypes.bool,
        annotated: PropTypes.bool,
        tips: PropTypes.string,
    />

#3. component props

* `left` (array, object, string)
* `right` (array, object, string)
* `show` (array, object, string)

    you can show/hide unchanged values

* `annotated` (array, object, string)

    This will render the original JSON delta in html, with annotations aside explaining the meaning of each part. This attempts to make the JSON delta format self-explained.
