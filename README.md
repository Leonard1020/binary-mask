# binary-mask
Creates a binary mask based on the differences of two arrays

[![Build Status](https://travis-ci.org/Leonard1020/binary-mask.svg)](https://travis-ci.org/Leonard1020/binary-mask)

### Installation
<pre><code>npm install binary-mask</code></pre>

### Usage
<pre><code>
var mask = require('binary-mask');

var first = [1, 2, 3];
var second = [1, 5, '3'];

var final = mask(first, second); // [0, 1, 1]
</code></pre>
