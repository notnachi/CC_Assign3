import AWS from 'aws-sdk';

AWS.config.update({ 
    "accessKeyId": "AKIA43LT5OBK554HDKNN",
    "secretAccessKey": "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",
    "region": "us-east-2"
})

const dynoamodb = new AWS.DynamoDB.DocumentClient();
const subjects_table = 'subjects';
const tasks_table = 'tasks';

export const getTasks = async (user_id) => {
    const params = {
        TableName: tasks_table,
        FilterExpression: "user_id = :user_id",
        ExpressionAttributeValues: {
            ":user_id": user_id,
        }
      };

    return await dynoamodb.scan(params).promise().then(response => {
        return response.Items
    }, error =>{
        console.error(error);
    })
}

export const getSubjects = async (user_id) => {
    const params = {
        TableName: subjects_table,
        FilterExpression: "user_id = :user_id",
        ExpressionAttributeValues: {
            ":user_id": user_id,
        }
      };

    return await dynoamodb.scan(params).promise().then(response => {
        return response.Items
    }, error =>{
        console.error(error);
    })
}


export const archiveTask = async(task_id) => {
    let archived = true;
    const params = {
        TableName: tasks_table,
        Key: {
            task_id: task_id
        },
        UpdateExpression: "set archived = :archived",
        ExpressionAttributeValues: {
            ":archived" : archived
        }
        
      };
    
    return await dynoamodb.update(params).promise().then(response => {
        console.log(response);
        return response
    }, error =>{
        console.error(error);
    })
}


export const removeSubject = async(subject_id) => {
    const params = {
        TableName: subjects_table,
        Key:{
            subject_id: subject_id
        }

    }

    return await dynoamodb.delete(params).promise().then(response => {
        console.log(response);
        return response
    }, error =>{
        console.error(error);
    })
}