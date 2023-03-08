const express = require("express");
const router = express.Router();
const { Items } = require("../models");

// GET /All Items 
router.get("/", async (req, res) => {
  try {
    const items = await Items.findAll();
    res.send(items);
  } catch (error) {
    res.status(404);
  }
});

// GET /Item/:id
router.get("/:id", async (req, res) => {
    try {
        const item = await Items.findByPk(req.params.id);
        res.send(item);
        } catch (error) {
            res.status(404);
        }
    });

    // ADD /Item
router.post("/", async (req, res) => {
        try {
            const item = await Items.create(req.body);
            res.send(item);
        } catch (error) {
            res.send(error);
        }
    });

    // UPDATE /Item/:id
    router.put("/:id", async (req, res) => {
        try {
            const item = await Items.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.send(item);
        } catch (error) {
            res.send(error);
        }
    });

    // DELETE /Item/:id
    router.delete("/:id", async (req, res) => {
        try {
            const item = await Items.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.send(item);
        } catch (error) {
            res.send(error);
        }
    });

module.exports = router;