## Introduction

A small script to create headings that automatically use the largest font size possible to fill their parent container while maintaining a single line. 


## Installation/Usage

To install, simply include the fillText.js (along with jQuery) in your document. Then call filText on your element as in the following:

<pre>
$('.element').fillText();
</pre>

To adjust how aggressively the text expands to fill the container, include a parameter. The default parameter is 1. Supplying a smaller parameter will result in smaller text, while a paramater of greater than 1 will result in larger text that more aggressively fills its container. 

<pre>
$('.element').fillText(0.8);
</pre>


## License

MIT License

## Releases

This project is in working Beta.
