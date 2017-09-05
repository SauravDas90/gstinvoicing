# GST Project

## Tech used 
- Node + Express.js
- Start with ejs, when needed move to React
- MongoDB for regular data, Elasticsearch for high-speed access data
- Heroku for PaaS
- For UI level searching, we'd use Algolia
- 

<b>For deployment to Heroku</b>

we need the following things.

1.1.Heroku API key -- Goto Heroku Account settings (Login as gst.project.app@gmail.com) , this key is different for different users, so depending on the key given in gitlab.yml (It will deploy with the user's name)
2. Dont use start script in Deployment via gitlab CI(npm run start--should be avoided, as it starts the server on the docker image itself)
3. Use image:argon (node version 4.x.x) this is done to avoid the build issue where node mdules are not found, please refer https://gitlab.com/livegstproject/gstApp/-/jobs/31157607 for the issue
4. Always keep API Key as secret variable in the pipeline settings page https://gitlab.com/livegstproject/gstApp/settings/ci_cd
5. The jobs are running on a shared runner which has a plan of 2000 mins only, so please use it judiciously, dont allow any build to last more than 5 mins