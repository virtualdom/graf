exports.add = (loginCreds) => ({ type: 'SIGN_UP', payload: loginCreds });

exports.clear = () => ({ type: 'LOG_OUT' });

exports.get = (loginCreds) => ({ type: 'LOG_IN', payload: loginCreds });
