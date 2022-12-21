// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function check(req, res) {
  const { set, values } = req.query;
  let success = { message: "Success" };
  console.log(req.query);

  if (set == "1" && values == process.env.SET_1_VALUES) {
    res.status(200).json(success);
  } else {
    res.status(401).json({ message: "Try again" });
  }
}
