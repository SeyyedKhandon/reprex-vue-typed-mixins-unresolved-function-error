export const util_printThePage = window.print;

describe("window print",()=>{
  it("should check the print",()=>{
    window.print= jest.fn();
    util_printThePage();
    expect(window.print).toHaveBeenCalled();
  })
})


describe('Test.spec.js', () => {
    let jsdomPrint:any;

    beforeEach(() => {
        jsdomPrint = window.print;
        jest.spyOn(window, 'print').mockImplementation(() => {});
    });

    it("should check the print",()=>{
      util_printThePage();
      expect(jsdomPrint).toHaveBeenCalled();
    })
    it("should check the print",()=>{
      util_printThePage();
      expect(window.print).toHaveBeenCalled();
    })

    afterEach(() => {
        window.print = jsdomPrint;
    });
});