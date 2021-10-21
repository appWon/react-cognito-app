# # AWS Console

> ### AWS Cognito
>
> 로그인 및 회원가입을 통하여 유저 관리 및 권한 분리
>
> - Auth - s3 bucket (CRUD), Appsync (CRUD) 권한 부여
>
> - UnAuth - s3 Bucket (Read), Appsync (get Query)
>
>   그 외... s3 file 특정 URL에서만 접근



>### AWS IAM
>
>- Auth
>
>```
>{
>    "Version": "2012-10-17",
>    "Statement": [
>        {
>            "Effect": "Allow",
>            "Action": [
>                "s3:DeleteObject",
>                "s3:GetObject",
>                "s3:ListBucket",
>                "s3:PutObject"
>            ],
>            "Resource": "arn:aws:s3:::버켓/*"
>        },
>        {
>            "Effect": "Allow",
>            "Action": [
>                "appsync:GraphQL"
>            ],
>            "Resource": "*"
>        }
>    ]
>}
>```
>
>
>
>- UnAuth
>
>```
>{
>    "Version": "2012-10-17",
>    "Statement": [
>        {
>            "Effect": "Allow",
>            "Action": [
>                "s3:GetObject"
>            ],
>            "Resource": "arn:aws:s3:::버켓/*",
>            "Condition": {
>                "StringLike": {
>                    "aws:Referer": [
>                        "http://s3.amazonaws.com/*",
>                        "http://localhost*/*",
>                        "http://localhost:*/*"
>                    ]
>                }
>            }
>        },
>        {
>            "Sid": "allVideo",
>            "Effect": "Allow",
>            "Action": [
>                "appsync:GraphQL"
>            ],
> 	    "Resource": [
>               "arn:aws:appsync:지역:계정ID:apis/appSyncID/types/Query/fields/특정 쿼리",
>               "arn:aws:appsync:지역:계정ID:apis/appSyncID/types/Query/fields/특정 쿼리"
>             ]
>        }
>    ]
>}
>```



>### App Sync Schema
>
>```
>// AWS Console setting
>
>type Mutation {
>	setVideo(input: InputVideo!): VideoReturnType
>	updateVideo(input: UpdateVideo!): VideoReturnType
>	deleteVideo(input: DeleteVideo!): VideoReturnType
>}
>
>type Query {
>	getVideo(filter: ListFilterInput, limit: Int, nextToken: String): VideoList
>}
>```
>
>
>
>#### Schema Mapping
>
>```
>// mutation setVideo
>{
>    "version" : "2017-02-28",
>    "operation" : "PutItem",
>    "key" : {
>        "id": $util.dynamodb.toDynamoDBJson($util.autoId()),
>    },
>    "attributeValues": {
>      "title":$util.dynamodb.toDynamoDBJson($ctx.args.input.title),
>			"createdDate": $util.dynamodb.toDynamoDBJson($util.time.nowISO8601()),
>      ....
>  }
>}
>```



>### React setting
>
>```javascript
>import { Amplify } from "aws-amplify";
>
>Amplify.configure({
>  Auth: {
>    mandatorySignIn: false,
>    region: config.cognito.REGION,
>    userPoolId: config.cognito.USER_POOL_ID,
>    identityPoolId: config.cognito.IDENTITY_POOL_ID,
>    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
>  },
>  Storage: {
>    region: config.s3.REGION,
>    bucket: config.s3.BUCKET,
>    identityPoolId: config.cognito.IDENTITY_POOL_ID,
>  },
>  API: {
>    aws_appsync_graphqlEndpoint: config.appSync.endPoint,
>    aws_appsync_region: config.cognito.REGION,
>    aws_appsync_authenticationType: "AWS_IAM",
>  },
>});
>```



# # Amplify-cli

AWS Console을 이용하지 않고 `amplify-cli` 를 통하여 설정 후 `push`

```
1. amplify-cli configure 
2. amplify-cli init
----------------------------
3. aws service
```



>### AWS Appsync schema
>
>[Appsync Schema Directives](https://docs.amplify.aws/cli/graphql-transformer/directives/)
>
>- @model - appsync CRUD
>- @auth - appsync 접근 role 설정
>
>```
>//schema.graphql
>
>type Video
>  @model
>  @auth(rules: [{ allow: owner }, { allow: groups, groups: ["Admin"] }]) {
>  id: ID!
>  title: String!
>  level: String!
>  videoFile: S3Object!
>  imageFile: S3Object!
>  updatedAt: AWSDateTime
>  createdAt: AWSDateTime
>}
>
>type S3Object {
>  bucket: String!
>  region: String!
>  key: String!
>}
>```
>
>```
>// aws service 업데이트
>amplify-cli push
>```



>### React setting
>
>`위 설정과 동일`
