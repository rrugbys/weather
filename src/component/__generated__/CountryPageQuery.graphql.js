/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CountryPageQueryVariables = {|
  code: string
|};
export type CountryPageQueryResponse = {|
  +country: ?{|
    +name: string,
    +code: string,
    +capital: ?string,
    +states: $ReadOnlyArray<{|
      +name: string
    |}>,
  |}
|};
export type CountryPageQuery = {|
  variables: CountryPageQueryVariables,
  response: CountryPageQueryResponse,
|};
*/


/*
query CountryPageQuery(
  $code: ID!
) {
  country(code: $code) {
    name
    code
    capital
    states {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "code"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "code",
        "variableName": "code"
      }
    ],
    "concreteType": "Country",
    "kind": "LinkedField",
    "name": "country",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "State",
        "kind": "LinkedField",
        "name": "states",
        "plural": true,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CountryPageQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CountryPageQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "88f74f4f462c3849085171e13fa95bfe",
    "id": null,
    "metadata": {},
    "name": "CountryPageQuery",
    "operationKind": "query",
    "text": "query CountryPageQuery(\n  $code: ID!\n) {\n  country(code: $code) {\n    name\n    code\n    capital\n    states {\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bc636b98a64e2d619f05e93edceb7645';

module.exports = node;
