Portolio simulator with a leaderboard. Backend will be handled entirely using AWS services. Frontend will be built using React.


AWS steps followed: 

1. Created AWS Account

2. Used Identity and Access Management (IAM) to create a user based on a user group 

3. Installed AWS CLI and created a aws amplify profile, connected to IAM user's access key

4. installed amplify libraries

5. added authentication service (amazon cognito) using amplify CLI

6. fixed build issues by adding service roll, choosing amplify version, and adding enviroment variables

7. fixed cognito callback issues by editing callback url in both cognito console and locally

8.  user pool OAuth 2.0 grants, for now Implicit Grant is used (JWT [Json Web Tokens]) to avoid backend code (not the most secure). Authorization code grant will later be implemented. 