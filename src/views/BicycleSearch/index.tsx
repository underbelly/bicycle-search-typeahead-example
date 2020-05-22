import * as React from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import debounce from 'lodash/debounce';

import TypeaheadInput, {Option} from '@components/TypeaheadInput';
import {Box, Title, Subtitle, GradientBackground, Container} from './styles';
import {GET_BIKES} from '@utils/queries';

interface Bike {
  id: string;
  brand: string;
}

const BicycleSearch = () => {
  const [showDropdown, setShowDropdown] = React.useState(true);
  const [fetchBikes, {data}] = useLazyQuery(GET_BIKES);

  const options =
    data && data.bicycles.map((b: Bike) => ({label: b.brand, value: b.id}));

  const debouncedFunction = React.useCallback(debounce(fetchBikes, 250), []);

  return (
    <GradientBackground>
      <Box>
        <Container>
          <Title>Search for Bicycles</Title>
          <Subtitle>Let's help you find the one of your dreams 🌈</Subtitle>
          <br />
          <TypeaheadInput
            options={options}
            showDropdown={showDropdown}
            onChange={(inputValue: string) => {
              if (inputValue === '') {
                return setShowDropdown(false);
              }

              setShowDropdown(true);
              debouncedFunction({variables: {brand: inputValue}});
            }}
            onSelect={(value: Option) => {
              console.log({value});
            }}
          />
        </Container>
      </Box>
    </GradientBackground>
  );
};

export default BicycleSearch;
