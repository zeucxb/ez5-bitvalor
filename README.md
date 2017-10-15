## Using Docker :heart:

### Run
`docker run -it -p 3000:3000 zeucxb/ez5-bitvalor`

## Without Docker

### Install
With [node](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

`yarn install`

### Run
`yarn start`

## Using (GraphQL)
Go to: http://localhost:3000/graphql

GraphQL provides queries documentation.

### Query example
```js
{
  orderBook {
    asks(filter: {exchange: "FOx", price: {min: 18000.09, max: 19000}, btc_volume: {min: 0.05, max: 1}}) {
      exchange
      price
      btc_volume
    }
    bids {
      exchange
      price
      btc_volume
    }
  }
}
```
*P.S:* `asks` and `bids` has the same filters.
