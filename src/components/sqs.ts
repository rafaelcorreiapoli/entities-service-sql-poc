export const newSQS = ({
  aws
}) => {
  // Create an SQS service object
  // const endpoint = new aws.Endpoint('http://localhost:9324');

  const sqs = new aws.SQS({
    apiVersion: '2012-11-05',
    // endpoint
  });

  return sqs
}
