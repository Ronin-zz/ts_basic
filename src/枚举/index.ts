enum HttpStatus {
  Success = 200,
  NotFound = 404,
  Failed = 500,
}

function judgeHttpStatus(httpStatus: HttpStatus) {
  switch (httpStatus) {
    case HttpStatus.Success:
      console.log('success');
      break;
    case HttpStatus.NotFound:
      console.log('not found');
      break;
    case HttpStatus.Failed:
      console.log('failed');
      break;
    default:
      console.log('default');
  }
}

enum StringStr {
  Success = 'success',
  NotFound = 'not found',
}

enum DiverseEnum {
  Success = 'success',
  NotFound = 404,
}

enum ComputedEnum {
  A = 0,
  B = A * 2,
}
