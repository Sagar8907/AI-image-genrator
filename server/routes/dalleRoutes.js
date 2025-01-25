import express from 'express'
import { OpenAI } from 'openai';
import Together from "together-ai";

const together = new Together({
  apiKey: "b525d3be98944cc510153f4e835fe409dd2056152d025ec48a887a202601cfc6"
});

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body
    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-dev",
      prompt: prompt,
      steps: 10,
      n: 4
    })
    const image = response.data[0].url
    res.status(200).json({ photo: image })
  } catch (err) {
    console.log(err)
    res.status(400).json({ msg: err.message })
  }
})



router.get("/hello", (req, res) => {
  res.status(200).send("200");
});

export default router