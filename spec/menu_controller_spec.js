const MenuController = require("../controllers/MenuControllers");

describe("MenuController", () => {

     beforeEach(() => {
       this.menu = new MenuController();
     });

     describe("#remindMe()", () => {
       it("should return a string 'Learning is a life-long pursuit'", () => {
         expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
       })
     })
 });
