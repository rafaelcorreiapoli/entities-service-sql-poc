export const getQueueUrl = async (queue, sqs) => {
  const response = await sqs.getQueueUrl({
    QueueName: queue
  }).promise()
  return response.QueueUrl
}

export const produceMessage = async (queue, message, sqs) => {
  const params = {
    DelaySeconds: 0,
    MessageBody: JSON.stringify(message),
    QueueUrl: await getQueueUrl(queue, sqs),
    MessageGroupId: 'group1'
  };
   
  return sqs.sendMessage(params).promise()
}