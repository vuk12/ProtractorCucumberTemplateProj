import { by, element, ElementFinder } from "protractor";

export class b92Homepage
{
    sportTab:ElementFinder;
    
    constructor (){
        this.sportTab = element(by.xpath("//header[@id='top']//nav/ul[@class='menu']//a[@href='/sport/']"));
    }
    
}