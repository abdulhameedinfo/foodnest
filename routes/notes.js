import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const note = new Note({
            title: req.body.title,
            content: req.body.content
        });

        await note.save();

        res.status(201).json(note);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});

router.get("/", async (req, res) => {

    const notes = await Note.find();

    res.json(notes);
});

router.get("/:id", async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json(note);
});


export default router;