Password Validator
==========

A small library that check if a password is valide. 
It checks only if the length of the password is betweeen 8 and 15.

## Installation
`npm install @okba18/password-validator`

## Usage

    var validator = require('@okba18/password-validator');

    var isPassValid = validator.validate(457);

    console.log(isPassValid) should output false

    isPassValid = validator.validate(1234abcd);

    console.log(isPassValid) should output true

    isPassValid = validator.validate(123456789045);

    console.log(isPassValid) should output true

    isPassValid = validator.validate(123456789abcdef);

    console.log(isPassValid) should output true

    isPassValid = validator.validate(123456789abcdefg);

    console.log(isPassValid) should output false


## Tests
    `npm test`

## Contributing
Be free to contribute