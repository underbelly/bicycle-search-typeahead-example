import {useState} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';

import {ALL_BIKES} from '@utils/queries';
import TypeaheadInput, {Option} from '@components/TypeaheadInput';
import {Box, Title, Subtitle, GradientBackground, Container} from './styles';

const CompanySearch = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [getMatchingBikes, {error, data}] = useLazyQuery(ALL_BIKES);

  if (error) console.error(error);

  const options =
    data && data.bicycles
      ? data.bicycles.map((b: any) => ({label: b.brand, value: b.id}))
      : [];

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
                setShowDropdown(false);
              } else {
                setShowDropdown(true);
                getMatchingBikes({variables: {brand: inputValue}});
              }
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

export default CompanySearch;
