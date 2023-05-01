const { getPostsByTagName } = require("../db");

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  // read the tagname from the params
  try {
    tagPosts = await getPostsByTagName()
    res.send({ posta: tagPosts })
  } catch ({ name, message }) {
    next({ name, message });
  }
});