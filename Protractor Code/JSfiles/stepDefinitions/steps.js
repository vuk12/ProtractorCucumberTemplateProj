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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const b92Homepage_1 = require("../pageObjects/b92Homepage");
const cucumber_1 = require("cucumber");
protractor_1.browser.waitForAngularEnabled(false);
cucumber_1.Given;
(0, cucumber_1.Given)('Navigate to b92 site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://www.b92.net/');
    yield protractor_1.browser.sleep(5000);
}));
(0, cucumber_1.When)('Click on tab', () => __awaiter(void 0, void 0, void 0, function* () {
    let b92HomePage = new b92Homepage_1.b92Homepage();
    yield protractor_1.browser.sleep(5000);
    yield b92HomePage.sportTab.click();
}));
(0, cucumber_1.Then)('Sport is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    return 'pending';
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFFN0MsNERBQXNEO0FBQ3RELHVDQUF3QztBQUV4QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXJDLGdCQUFLLENBQUE7QUFFSCxJQUFBLGdCQUFLLEVBQUMsc0JBQXNCLEVBQUUsR0FBTyxFQUFFO0lBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUUxQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxJQUFBLGVBQUksRUFBQyxjQUFjLEVBQUUsR0FBTyxFQUFFO0lBQzVCLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxJQUFBLGVBQUksRUFBQyxvQkFBb0IsRUFBRSxHQUFPLEVBQUU7SUFFbEMsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9