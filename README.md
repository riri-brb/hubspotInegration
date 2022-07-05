# hubspotInegration

If wrangler is not already installed, run this command to install it ``` npm install -g wrangler ```
Installing wrangler, the Workers command-line interface (CLI), allows you to init, dev, and publish your Workers projects.
Then, to authenticate Wrangler, run ``` wrangler login ```

**create new contact in Hubspot**, here you can consult the details of [contats API](https://legacydocs.hubspot.com/docs/methods/contacts/create_contact)
- New API key: Account setup => Integrations => API key => Genenrate new key
- To make this API key available in your codebase, use the wrangler secret command to encrypt and store environment variables for use in your function,
without revealing them to users.  ``` wrangler secret put HSPOT_API_KEY ```

Finally, publish the project using the command ``` wrangler publish ```
