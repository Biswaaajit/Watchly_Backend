import jwt from "jsonwebtoken";

function verifyMiddleware(req, res, next) {
  const JWT_SECRET = process.env.JWT_SECRET;
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ").at(1);
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        return res
          .status(400)
          .json({ message: "Your session expired!!!", statusCode: 400 });
      }
      console.log(payload);
      next();
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server issue",
      error: err.message,
      statusCode: 500,
    });
  }
}
export default verifyMiddleware;
