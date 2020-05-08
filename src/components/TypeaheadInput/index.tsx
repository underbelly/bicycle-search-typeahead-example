import {useState} from 'react';

import {Input, Dropdown} from './styles';

import OutsideClickContainer from '@components/OutsideClickContainer';

export type Option = {label: string; value: string};

interface Props {
  options: Array<Option>;
  showDropdown?: boolean;
  onChange?: (inputValue: string) => void;
  onSelect?: (selectedOption: Option) => void;
}

const TypeaheadInput = ({options, showDropdown, onChange, onSelect}: Props) => {
  const [value, setValue] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(true);

  return (
    <OutsideClickContainer onClick={() => setDropdownVisible(false)}>
      <Input
        type="text"
        value={value}
        onClick={() => {
          setDropdownVisible(true);
        }}
        onChange={e => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e.target.value);
          }
        }}
      />
      {options.length > 0 && dropdownVisible && showDropdown && (
        <Dropdown>
          <ul>
            {options.map((op: Option) => (
              <li key={op.value}>
                <button
                  value={op.value}
                  onClick={() => {
                    if (onSelect) {
                      onSelect(op);
                    }
                    setValue(op.label);
                    setDropdownVisible(false);
                  }}>
                  {op.label}
                </button>
              </li>
            ))}
          </ul>
        </Dropdown>
      )}
    </OutsideClickContainer>
  );
};

TypeaheadInput.defaultProps = {
  showDropdown: false,
  onChange: (_inputValue: string) => {},
  onSelect: (_selectedOption: Option) => {},
};

export default TypeaheadInput;
