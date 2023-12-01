// eslint-disable-next-line import/order
import { DownArrow, UpArrowImg } from '../../../assets/image';
// eslint-disable-next-line import/order
import { DropDownProps } from '../DropDown';
import ButtonContainer from './ButtonContainer';
import { Arrow, DropDownContainer, Name, Option, Select } from './styles/DropDown.style';
import { List, Path, Price, StyledInput, StyledLabel, StyledText } from './styles/InputCustom.style';

// API 연결 필요
const FlightDropDown = (props: DropDownProps) => {
  const { isOpen, onToggle } = props;

  return (
    <DropDownContainer>
      <Select onClick={() => onToggle('flight')} $isOpen={isOpen}>
        <Name $isOpen={isOpen}>항공사</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <Option $isOpen={isOpen} $width="17.8rem" $left="43.4rem">
        <List>
          <StyledLabel htmlFor="ANA">
            <StyledInput type="checkbox" id="ANA" name="ANA" />
            <StyledText>
              <Path>ANA (전일본공수)</Path>
              <Price>622,301원부터</Price>
            </StyledText>
          </StyledLabel>
          <StyledLabel htmlFor="ANA">
            <StyledInput type="checkbox" id="ANA" name="ANA" />
            <StyledText>
              <Path>Peach</Path>
              <Price>330,500원부터</Price>
            </StyledText>
          </StyledLabel>
        </List>
        <ButtonContainer />
      </Option>
    </DropDownContainer>
  );
};

export default FlightDropDown;