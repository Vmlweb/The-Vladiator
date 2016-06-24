# Vladiator

<a href="http://bamboo.vmlweb.co.uk:8085/browse/OPEN-MEAN2" target="_blank">
<img src="http://bamboo.vmlweb.co.uk:8085/plugins/servlet/wittified/build-status/OPEN-MEAN2">
</a>

Javascript validation and assertion library for checking incoming parameters.

## Getting Started

```javascript
var validate = require('vladiator');

//E-mail address
validate("email@email.com").isRequired().isString().isEmail().didPass();

//Positive number
validate("5").isRequired().isNumber().isPositive().didPass();
```

