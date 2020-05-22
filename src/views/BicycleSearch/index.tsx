import {useState} from 'react';

import TypeaheadInput, {Option} from '@components/TypeaheadInput';
import {Box, Title, Subtitle, GradientBackground, Container} from './styles';

const fakeOptions: Array<Option> = [
  {label: 'Bianchi', value: 'Bianchi'},
  {label: 'Cinelli', value: 'Cinelli'},
  {label: 'Specialized', value: 'Specialized'},
  {label: 'Trek', value: 'Trek'},
  {label: 'Surly', value: 'Surly'},
  {label: 'Ritchey', value: 'Ritchey'},
];

const BicycleSearch = () => {
  const [options, setOptions] = useState<Array<Option>>([]);

  return (
    <GradientBackground>
      <Box>
        <Container>
          <Title>Search for Bicycles</Title>
          <Subtitle>Let's help you find the one of your dreams 🌈</Subtitle>
          <br />
          <TypeaheadInput
            options={options}
            showDropdown={true}
            onChange={(inputValue: string) => {
              if (inputValue.length > 5) {
                setOptions(fakeOptions);
              } else {
                setOptions([]);
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

export default BicycleSearch;
