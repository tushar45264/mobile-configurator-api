const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Mobile Configurator API', () => {
    it('should create a valid order', (done) => {
        chai.request(app)
            .post('/orders')
            .send({ components: ["I", "A", "D", "F", "M"] })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('order_id');
                expect(res.body).to.have.property('total');
                expect(res.body).to.have.property('parts');
                done();
            });
    });

    it('should reject an order with duplicate components', (done) => {
        chai.request(app)
            .post('/orders')
            .send({ components: ["I", "A", "D", "F", "M", "M"] })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('error').eql('Invalid order. Each component should appear exactly once');
                done();
            });
    });

    it('should reject an order with missing components', (done) => {
        chai.request(app)
            .post('/orders')
            .send({ components: ["I", "A", "D", "F"] })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('error').eql('Invalid order. Each component should appear exactly once');
                done();
            });
    });
});
