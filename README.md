# Vladiator

![Build Status](http://bamboo.vmlweb.co.uk:8085/plugins/servlet/wittified/build-status/OPEN-MEAN2)(http://bamboo.vmlweb.co.uk:8085/plugins/servlet/wittified/build-status/OPEN-MEAN2)

Javascript validation and assertion library for checking incoming parameters.

## Getting Started

```javascript
var validate = require('vladiator');

//E-mail address
validate("email@email.com").isRequired().isString().isEmail().didPass();

//Positive number
validate("5").isRequired().isNumber().isPositive().didPass();
```

