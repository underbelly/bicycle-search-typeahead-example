import gql from 'graphql-tag';

export const GET_BIKES = gql`
  query bikeQuery($brand: String!) {
    bicycles(brand: $brand) {
      id
      brand
    }
  }
`;
