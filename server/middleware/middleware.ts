import jwt from "jsonwebtoken";

export const jwtVerify = (req, res, next) => {
  const auth = req.get("authorization");
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    const token = auth.substring(7);
    const secret = process.env.JWT_SECRET;
    if (secret) {
      const decodedToken: any = jwt.verify(token, secret);
      if (!token || !decodedToken.username) {
        return res.status(401).json({ error: "token missing or invalid" });
      }
      req.user = decodedToken; // { username: username}
      next();
    } else {
      return res.status(401).json({ error: "token missing or invalid" });
    }
  } else {
    return res.status(401).json({ error: "token missing or invalid" });
  }
};
