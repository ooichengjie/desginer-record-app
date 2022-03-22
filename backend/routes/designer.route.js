let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

    let designerSchema = require("../models/Designer");

    router.post("/create-designer",(req, res ,next) => {
        designerSchema.create(req.body,(error, data) => {
            if (error) {
                return next(error);
            } else {
                console.log(data);
                res.json(data);
            }
            });
    });

    router.get("/",(req,res) => {
        designerSchema.find((error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        });
    });

    router
        .route("/update-designer/:id")
        .get((req,res) => {
            designerSchema.findById(
                req.params.id,(error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data);
                }
                });
        })

        .put((req, res, next) => {
            designerSchema.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                (error, data) => {
                  if (error) {
                      return next(error);
                      console.log(error);
                  } else {
                      res.json(data);
                      console.log("Designer updated succesfully!")
                  }
                }
            );
        });

        module.exports = router;