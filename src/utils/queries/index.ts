import gql from 'graphql-tag';

export const ALL_BIKES = gql`
  query allBikes($brand: String) {
    bicycles(brand: $brand) {
      id
      brand
    }
  }
`;
