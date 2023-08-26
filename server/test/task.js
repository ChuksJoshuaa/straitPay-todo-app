import Task from "../models/task.js";
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";
import should from "should";

chai.use(chaiHttp);

//Our parent block
describe("Tasks", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Task.remove({}, (err) => {
      done();
    });
  });

  // Test the /GET route
  describe("/GET Tasks", () => {
    it("it should GET all the tasks", (done) => {
      chai
        .request(app)
        .get("/api/v1/tasks")
        .end((err, res) => {
          should(res.body).not.have.property("err");
          should(res.status).be.equal(200);
          should(res.body).be.Object;
          should(res.body).have.property("data");
          should(res.body).have.property("count");
          done();
        });
    });
  });

  //Testing the Single /GET route
  describe("/GET/:id task", () => {
    it("it should GET a task by the given id", (done) => {
      let task = new Task({
        title: "Test Task",
        description: "This is a test task",
      });
      task.save((err, task) => {
        chai
          .request(app)
          .get("/api/v1/tasks/" + task._id)
          .send(task)
          .end((err, res) => {
            should(res.body).not.have.property("err");
            should(res.status).be.equal(200);
            should(res.body).be.Object;
            should(res.body).have.property("data");
            should(res.body.data).have.property("title");
            should(res.body.data).have.property("description");
            done();
          });
      });
    });
  });

  // Testing the /POST route
  describe("/POST task", () => {
    it("it should not POST if all fields are not complete", (done) => {
      let task = {
        title: "",
        description: "This is a test task",
      };
      chai
        .request(app)
        .post("/api/v1/tasks/create")
        .send(task)
        .end((err, res) => {
          should(res.body).not.have.property("err");
          should(res.status).be.equal(400);
          should(res.body).be.Object;
          should(res.body).have.property("msg");
          should(res.body).have.property("msg").eql("All fields are required");
          done();
        });
    });
    it("it should POST if all fields are complete", (done) => {
      let task = {
        title: "Test Task",
        description: "This is a test task",
      };
      chai
        .request(app)
        .post("/api/v1/tasks/create")
        .send(task)
        .end((err, res) => {
          should(res.body).not.have.property("err");
          should(res.status).be.equal(201);
          should(res.body).be.Object;
          should(res.body).have.property("data");
          should(res.body.data).have.property("_id");
          should(res.body.data).have.property("title");
          should(res.body.data).have.property("description");
          done();
        });
    });
  });

  // Testing the /PATCH route
  describe("/PATCH/:id task", () => {
    it("it should UPDATE a task with the given id", (done) => {
      let task = new Task({
        title: "Test Task",
        description: "This is a test task",
      });
      task.save((err, task) => {
        chai
          .request(app)
          .patch("/api/v1/tasks/update/" + task._id)
          .send({
            title: "Updated Test Task",
            description: "This is an updated test task",
          })
          .end((err, res) => {
            should(res.body).not.have.property("err");
            should(res.status).be.equal(200);
            should(res.body).be.Object;
            should(res.body).have.property("data");
            should(res.body.data).have.property("title");
            should(res.body.data).have.property("description");
            done();
          });
      });
    });
  });

  // Testing the /DELETE route
  describe("/DELETE/:id task", () => {
    it("it should DELETE a task with the given id", (done) => {
      let task = new Task({
        title: "Test Task",
        description: "This is a test task",
      });
      task.save((err, task) => {
        chai
          .request(app)
          .delete("/api/v1/tasks/" + task._id)
          .end((err, res) => {
            should(res.body).not.have.property("err");
            should(res.status).be.equal(200);
            done();
          });
      });
    });
  });
});
