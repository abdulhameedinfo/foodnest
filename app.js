import  express from "express";

const app = express();
app.use(express.json());

import { multiply } from "./math.js";

let notes = [];

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/notes", (req, res) => {
    res.json(notes);
});

app.get("/notes/:id", (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
});

app.post("/notes", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }
    
    const note = {
        id: notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1,
        title,
        content,
        createdAt: new Date()
    };
    notes.push(note);
    res.status(201).json(note);
});

app.put("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const noteIndex = notes.findIndex(n => n.id === id);
    if (noteIndex === -1) {
        return res.status(404).json({ error: "Note not found" });
    }
    const { title, content } = req.body;
    notes[noteIndex] = {
        ...notes[noteIndex],
        title: title || notes[noteIndex].title,
        content: content || notes[noteIndex].content,
        updatedAt: new Date()
    };
    res.json(notes[noteIndex]);
});

app.delete("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const noteIndex = notes.findIndex(n => n.id === id);
    if (noteIndex === -1) {
        return res.status(404).json({ error: "Note not found" });
    }
    notes.splice(noteIndex, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
    // var result = math.subtract(10, 20);
    // console.log(result);
    // console.log('pi values is ' + math.pi);
    //console.log(multiply(5, 5));
    //const c = new Customer();
    //console.log(c.getCustomerId());
    
});

