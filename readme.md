We use pnpm to install dependencies and run scripts. Please install it globally if you don't have it yet.

```shell
npm i -g pnpm^8.11.0
```

Then install dependencies:

```shell
pnpm i
```

use node:18.12.1

## To send instructions to mailchimp server:

use [proxy-server](https://feature-id-2578-test-branch-maichimp-proxy.preview.room.xyz/)/api/{your command here}


### example:
`fetch('https://feature-id-2578-test-branch-maichimp-proxy.preview.room.xyz/api/ping', {
method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`