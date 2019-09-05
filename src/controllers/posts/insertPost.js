const { insertPost } = require('../../model/queries/insertPost');
const { verfiy } = require('../../utils/cookie');

const { getUserById } = require('../../model/queries/getUser');

exports.addPost = (req, res, next) => {
  verfiy(req.cookies.user)
    .then((decoded) => {
      console.log(decoded);
      return getUserById(Number(decoded));
    })
    .then((user) => {
      console.log(user);
      return insertPost(user.rows[0].user_id, req.body.content);
    })
    .then((post) => console.log(post.rows[0]));

  // console.log(id);
  res.send('ok');
  // insertPost(req.body)
  //   .then((post) => {
  //     console.log(post);
  // });
};
