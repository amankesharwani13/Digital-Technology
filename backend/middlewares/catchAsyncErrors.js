export default (controllerFunction) => (req, res, next) =>
  Promise.resolve(controllerFunction(req, res, next)).catch(next);     // if there is any error in controller function it will catch 