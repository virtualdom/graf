exports.add = (groupName) => ({ type: 'ADD_GROUP', payload: groupName });

exports.change = (groupName) => ({ type: 'CHANGE_GROUP', payload: groupName });
