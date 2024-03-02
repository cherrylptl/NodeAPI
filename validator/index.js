

// exports.createPostValidator = (req, res, next) => {
//     req.check('title', 'Write a title').notEmpty();
//     req.check('title', 'title be 4 to 150 char').isLength({
//         min: 4,
//         max: 150
//     });

//     req.check('body', 'Write a body').notEmpty();
//     req.check('body', 'body be 4 to 2000 char').isLength({
//         min: 4,
//         max: 2000
//     });

//     //check for error
//     const errors = req.validationErrors()
//     if (errors) {
//         const firstError = errors.map((error) =>
//             error.msg
//         )[0]
//         return res.status(400).json({ error: firstError })
//     }

//     next();
// }