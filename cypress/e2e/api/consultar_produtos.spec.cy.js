describe("Consulta de produtos", () => {
  it("Validar consulta do produto HeadPhone H2310", () => {
    let name = "H2310"
    let quantityPerEachCategory = 1;
    cy.request({
      method: 'GET',
      url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${name}&quantityPerEachCategory=${quantityPerEachCategory}`,
      headers: {
        accept: "*/*",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      response.body.forEach(body => {
        expect(body.categoryId).to.be.equal(2);
        expect(body.categoryName).to.be.contains("HEADPHONES");
        expect(body.categoryImageId).to.be.contains("headphones");
        body.products.forEach(products => {
          if (products.productId === 12) {
            expect(products.productId).to.be.equal(12);
            expect(products.categoryId).to.be.equal(2);
            expect(products.productName).to.be.contains("HP H2310 In-ear Headset");
            expect(products.price).to.be.equal(13.99);
            expect(products.imageUrl).to.be.contains("2100");
          }
        });
      });

    });
  });
});