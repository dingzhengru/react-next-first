// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//* 對應路徑 /api/hello

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
