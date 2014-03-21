swAngular - Popover
=====================================

This is an Shopware-AngularJs Component, it can be installed via Bower.

##Installation
Via [bower](http://wwww.bower.io):

	bower install sw-angular-popover
	
##Integrate the Component

###Popover Simple
Its easy to add the Popup for an HTML-Element :

	<span sw-angular-popover="cool popover" class="ng-isolate-scope" data-original-title="" title="">Test Span</span>
	
You only got to add "sw-angular-popover" to get an Popover. The Value of the Attribute will be the Popup-Text.

###Popover with own Template
Its possible to load external Templates. The HTML Elements looks like: 

	<img ng-src="{{picture.url}}" 
		width="200px" 
		sw-angular-popover="" 
		sw-url="/templates/popover/template1.html" 
		sw-options="options" 
		class="ng-isolate-scope" 
		data-original-title="" 
		title="">
	
Beside the "sw-angular-popover" you can add "sw-url". The "sw-url" Attribute gets the Path to the external Template. 

###Options 
Its Possible  to configure the Popover with Options: 


**animation:**<br />
Type: Boolean<br />
default: true<br />
description: apply a CSS fade transition to the popover<br /> 
<br />
**html:**<br />
Type: Boolean<br />
default: false<br />
description: Insert HTML into the popover.<br /> 
If false, jQuery's text method will be used to insert<br />
content into the DOM. Use text if you're worried about XSS attacks.<br />
<br />
**placement:**<br />
Type: string | function<br />
default: 'auto'<br />
description: how to position the popover - top | bottom | left | right | auto.<br />
When "auto" is specified, it will dynamically reorient the popover.<br />
For example, if placement is "auto left", the popover will display to the<br /> 
left when possible, otherwise it will display right.<br />
<br />
**selector:**<br />
Type: string<br />
default: false<br />
description: if a selector is provided, popover objects will be delegated to the specified targets.<br />
In practice, this is used to enable dynamic HTML content to have popovers added.<br />
See this and an informative example.<br />
<br />
**trigger:**<br />
Type: string<br />
default: 'click'<br />
description: how popover is triggered - click | hover | focus | manual<br />
<br />
**title:**<br />
Type: string | function<br />
default: ''<br />
description: default title value if title attribute isn't present<br />
<br />
**delay:**<br />
Type: number | object<br />
default: 0<br />
description: delay showing and hiding the popover (ms) - does not apply to<br />
manual trigger type If a number is supplied, delay is applied to both hide/show<br />
Object structure is: delay: { show: 500, hide: 100 }<br />
<br />
**container:**<br />
Type: string | false<br />
default: false<br />
description: Appends the tooltip to a specific element. Example: container: 'body'<br />


##DEMO
Here is an [Example](http://swangular.shopware.de.cloud2-vm153.de-nserver.de/#/popover)

