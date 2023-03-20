const { getQuery } = require("./getQuery");

exports.getListLength = function(schema, queryData, res, objFields, objFieldDatas) {
  if(queryData) {
    const query = getQuery(queryData, objFields, objFieldDatas);
    schema.count({$and: query}, (error, count) => {
      if (error) console.log(error);
      else res.json(count);
    }) 
  }
  else {
    schema.count({}, (error, count) => {
      if (error) console.log(error);
      else res.json(count);
    })
  }
}