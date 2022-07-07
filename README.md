# hubspotInegration

### Install wrangler
If wrangler is not already installed, run this command to install it ``` npm install -g wrangler ```
Installing wrangler, the Workers command-line interface (CLI), allows you to init, dev, and publish your Workers projects.
Then, to authenticate Wrangler, run ``` wrangler login ```

### create Hubpspot developer account
- New API key: Account setup => Integrations => API key => Generate new key
- To make this API key available in your codebase, use the wrangler secret command to encrypt and store environment variables for use in your function,
without revealing them to users.  ``` wrangler secret put HSPOT_API_KEY ```
- In the wrangler.toml file of your project’s directory, add your Cloudflare account ID account_id = "yourAccountId". Run ```wrangler whoami``` to find your account id.

### create Application Test Account
**create a new contact in Hubspot**, here you can consult the details of [contats API](https://legacydocs.hubspot.com/docs/methods/contacts/create_contact)

**Add dynamic property to a contact**
Via the Test Account, get access to contacts => actions => modify properties => create a property.
Then it is possible to use the property created in the body when adding a new contact.

Finally, publish the project using the command ``` wrangler publish ```
