"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var creatures_1 = require("../creatures");
var formatting_1 = require("../formatting");
var cheshire = new creatures_1.CheshireCat();
var whiteRabbit = new creatures_1.WhiteRabbit();
function initialWonderland() {
    console.log(chalk_1.default.bgBlue(chalk_1.default.whiteBright("This is Wonderland!")));
    console.log(chalk_1.default.bgMagenta("Now all creatures introduce themselves:"));
    // creatures say hello
    console.log(chalk_1.default.bgGreen(chalk_1.default.black("1. ".concat((0, formatting_1.formatNameAndSound)(cheshire)))));
    console.log(chalk_1.default.bgWhite(chalk_1.default.black("2. ".concat((0, formatting_1.formatNameAndSound)(whiteRabbit)))));
    console.log(chalk_1.default.bgWhite(chalk_1.default.black("2. ".concat((0, formatting_1.formatNameAndSound)(whiteRabbit)))));
    console.log(chalk_1.default.bgWhite(chalk_1.default.black("2. ".concat((0, formatting_1.formatNameAndSound)(whiteRabbit)))));
    console.log(chalk_1.default.bgWhite(chalk_1.default.black("2. ".concat((0, formatting_1.formatNameAndSound)(whiteRabbit)))));
}
initialWonderland();
//# sourceMappingURL=initial-wonderland.js.map