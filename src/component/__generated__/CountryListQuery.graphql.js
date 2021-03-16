/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CountryListQueryVariables = {||};
export type CountryListQueryResponse = {|
  +countries: $ReadOnlyArray<{|
    +name: string,
    +code: string,
    +capital: ?string,
  |}>
|};
export type CountryListQuery = {|
  variables: CountryListQueryVariables,
  response: CountryListQueryResponse,
|};
*/


/*
query CountryListQuery {
  countries {
    name
    code
    capital
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Country",
    "kind": "LinkedField",
    "name": "countries",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "code",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "capital",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CountryListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CountryListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2a5d44e45ecdaa3586bb5c7cc27cd15f",
    "id": null,
    "metadata": {},
    "name": "CountryListQuery",
    "operationKind": "query",
    "text": "query CountryListQuery {\n  countries {\n    name\n    code\n    capital\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ae849cc841fc596ae1098d684c007a4';

module.exports = node;
