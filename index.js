const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://beam:970KIN2dKftKUZKd@cluster0.98oll.mongodb.net/notes_app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      task: "watch a film",
      status: "pending",
      priority: "high",
      "date added": "2022-06-03T16:00:00.000Z",
    },
    {
      id: 2,
      task: "bake sourdough bread",
      status: "pending",
      priority: "medium",
      "date added": "2022-07-09T16:00:00.000Z",
    },
    {
      id: 3,
      task: "adopt a dog",
      status: "pending",
      priority: "medium",
      "date added": "2022-06-05T16:00:00.000Z",
    },
    {
      id: 4,
      task: "reply to A",
      status: "pending",
      priority: "low",
      "date added": "2022-05-22T16:00:00.000Z",
    },
    {
      id: 5,
      task: "remind B about event next week",
      status: "done",
      priority: "medium",
      "date added": "2022-03-14T16:00:00.000Z",
    },
    {
      id: 6,
      task: "buy chicken",
      status: "pending",
      priority: "low",
      "date added": "2022-09-19T16:00:00.000Z",
    },
    {
      id: 7,
      task: "clean ref",
      status: "pending",
      priority: "low",
      "date added": "2022-06-20T16:00:00.000Z",
    },
    {
      id: 8,
      task: "swim",
      status: "done",
      priority: "high",
      "date added": "2022-05-23T16:00:00.000Z",
    },
    {
      id: 9,
      task: "soccer practice",
      status: "done",
      priority: "low",
      "date added": "2022-10-25T16:00:00.000Z",
    },
    {
      id: 10,
      task: "walis",
      status: "done",
      priority: "medium",
      "date added": "2022-05-31T16:00:00.000Z",
    },
    {
      id: 11,
      task: "bumili ng toyo",
      status: "done",
      priority: "low",
      "date added": "2022-06-01T16:00:00.000Z",
    },
    {
      id: 12,
      task: "make salad",
      status: "pending",
      priority: "low",
      "date added": "2022-05-24T16:00:00.000Z",
    },
    {
      id: 13,
      task: "ayusin ang table",
      status: "pending",
      priority: "high",
      "date added": "2023-01-05T16:00:00.000Z",
    },
    {
      id: 14,
      task: "hugas ng pinggan",
      status: "pending",
      priority: "low",
      "date added": "2023-02-10T16:00:00.000Z",
    },
  ]);
});

// ROUTERS AND MODELS
const userRouter = require("./routes/users");
app.use("/users/", userRouter);

const noteRouter = require("./routes/notes");
app.use("/notes/", noteRouter);

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
