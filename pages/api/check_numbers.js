// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const MESSAGES = [
  "Try again",
  "Is that all you’ve got??",
  "Nope",
  "Nuh-uh",
  "Pfft",
  "I don’t think so",
  "No way José",
  "You can do better than that",
  "Ask Parker, maybe he’ll know",
  "LOL",
  "Keep trying",
  "As if",
  "I’ve got all day…",
  "Close, but no cigar",
  "Maybe next time",
];

export default function check(req, res) {
  const { set, values } = req.query;
  let success = { message: "Success!!" };
  console.log(req.query);
  console.log(process.env.SET_2_VALUES);

  if (set == "1" && values == process.env.SET_1_VALUES) {
    res.status(200).json({ ...success, secret: process.env.SET_1_SECRET });
  } else if (set == "2" && values == process.env.SET_2_VALUES) {
    res.status(200).json({ ...success, secret: process.env.SET_2_SECRET });
  } else if (set == "3" && values == process.env.SET_3_VALUES) {
    res.status(200).json({ ...success, secret: process.env.SET_3_SECRET });
  } else {
    res
      .status(401)
      .json({ message: MESSAGES[(MESSAGES.length * Math.random()) | 0] });
  }
}
