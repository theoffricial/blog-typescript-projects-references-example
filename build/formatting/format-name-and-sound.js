"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNameAndSound = void 0;
function formatNameAndSound(creature) {
    return "".concat(creature.sound(), ", it's ").concat(creature.name, "!");
}
exports.formatNameAndSound = formatNameAndSound;
