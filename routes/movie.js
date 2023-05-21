const { Router, query } = require('express');
const { Movies } = require('../data/movies');
const { DeletedMovies } = require('../data/deletedMovies');
const { Tags } = require('../data/tags');
const { getList } = require('../functions/getList');
const { getTotalLength } = require('../functions/getTotalLength');
const { deleteData } = require('../functions/deleteData');
const { upload } = require('../functions/upload');

const router = Router();

router.post('/getLength', (req, res) => {  
  
  const populateOptions = [{schema: Tags, field: 'tags', data: 'tagName'}];
  const dateFields = ['date'];

  getTotalLength(Movies, req.body, res, populateOptions, dateFields);

})

router.post('/upload', async(req, res) => {
  let movieData = req.body;

  let tags = await Tags.find({ tagName: {$in: movieData.tags} });
  movieData.tags = tags;

  upload(Movies, movieData, [Tags]);
})

router.post('/getList', async(req, res) => {
  
  const populateOptions = [{schema: Tags, field: 'tags', data: 'tagName'}];
  const dateFields = ['date'];

  await getList(Movies, req.body, populateOptions, dateFields, 'title', res);

  // res.send(data);
})

router.post('/getDetail', async(req, res) => {
  Movies.findById(req.body.id)
  .then(data => res.json(data))
  .catch(err => res.send(err));
})

router.post('/delete', async (req, res) => {
  deleteData(Movies, DeletedMovies, req.body, [Tags], [])
})

router.post('/open', (req, res) => {
  console.log(req.body+'공개');
})

router.post('/close', (req, res) => {
  console.log(req.body+'미공개');
})



module.exports = router;