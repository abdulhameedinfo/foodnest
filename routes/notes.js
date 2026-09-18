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

export default router;