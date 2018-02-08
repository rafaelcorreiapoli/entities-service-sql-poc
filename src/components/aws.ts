import * as AWS from 'aws-sdk'


export const newAWS = () => {
  AWS.config.update({region: 'us-east-1'});
  return AWS
}
