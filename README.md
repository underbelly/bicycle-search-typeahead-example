## GOALS

1. The typeahead input should use real data from the GraphQL server.

- Provide the user with options to select based on what they type.
- When the typeahead input is empty, there should be no options present in the menu.
- Requests to the GraphQL server should be debounced, so that a high load is not placed on the server.
- When an ID is selected from the dropdown menu, just log it for now, as it will be used in a later feature.
