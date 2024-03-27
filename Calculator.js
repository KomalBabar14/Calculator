"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function showSplashScreen() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.clear();
                    console.log("Welcome to My Application\n");
                    console.log("Loading...");
                    return [4 /*yield*/, sleep(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function printStyledTextP(text, styleCode, colorCode, bgColorCode) {
            console.log("\u001B[".concat(styleCode, ";").concat(colorCode, ";").concat(bgColorCode, "m").concat(text, "\u001B[0m"));
        }
        function printStyledText(text, styleCode, colorCode, bgColorCode) {
            console.log("\u001B[".concat(styleCode, ";").concat(colorCode, ";").concat(bgColorCode, "m").concat(text, "\u001B[0m"));
        }
        function add(x, y) {
            return x + y;
        }
        function subtract(x, y) {
            return x - y;
        }
        function multiply(x, y) {
            return x * y;
        }
        function divide(x, y) {
            if (y === 0) {
                throw new Error("Division by zero");
            }
            return x / y;
        }
        function calculate() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, num1, num2, operator, result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                                {
                                    type: 'number',
                                    name: 'num1',
                                    message: 'Enter the first number:',
                                },
                                {
                                    type: 'number',
                                    name: 'num2',
                                    message: 'Enter the second number:',
                                },
                                {
                                    type: 'list',
                                    name: 'operator',
                                    message: 'Select the operation:',
                                    choices: ['+', '-', '*', '/'],
                                },
                            ])];
                        case 1:
                            _a = _b.sent(), num1 = _a.num1, num2 = _a.num2, operator = _a.operator;
                            switch (operator) {
                                case '+':
                                    result = add(num1, num2);
                                    break;
                                case '-':
                                    result = subtract(num1, num2);
                                    break;
                                case '*':
                                    result = multiply(num1, num2);
                                    break;
                                case '/':
                                    result = divide(num1, num2);
                                    break;
                                default:
                                    console.log("Invalid operator");
                                    return [2 /*return*/];
                            }
                            printStyledTextP("RESULT", "1", "97", "45");
                            console.log("".concat(result));
                            return [2 /*return*/];
                    }
                });
            });
        }
        var textP, PCode, bgColorCode, styleCodeP;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, showSplashScreen()];
                case 1:
                    _a.sent();
                    printStyledTextP("WELCOME TO THE WORLD OF COMPUTING", "3", "33", "40");
                    printStyledTextP("FIXING YOUR PROBLEMS IN NO TIME....", "1", "97", "45");
                    printStyledTextP("CALCULATOR", "4", "32", "47");
                    textP = "DEVELOPED BY KOMAL BABAR";
                    PCode = "95";
                    bgColorCode = "35";
                    styleCodeP = "1";
                    printStyledText(textP, styleCodeP, PCode, bgColorCode);
                    calculate();
                    return [2 /*return*/];
            }
        });
    });
}
main();
