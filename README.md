# The Vladiator

Javascript validation and assertion library for checking incoming parameters.

## Getting Started

```javascript
var validate = require('the-vladiator');

//E-mail address
validate("email@email.com").isRequired().isString().isEmail().didPass();

//Positive number
validate("5").isRequired().isNumber().isPositive().didPass();
```

