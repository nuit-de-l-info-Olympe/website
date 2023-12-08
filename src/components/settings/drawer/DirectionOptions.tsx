// @mui
import { RadioGroup } from '@mui/material';
//
import { useSettingsContext } from '../SettingsContext';
import { StyledCard, StyledWrap, MaskControl } from '../styles';

// ----------------------------------------------------------------------

const OPTIONS = ['ltr', 'rtl'] as const;

export default function DirectionOptions() {
  const { themeDirection, onChangeDirection } = useSettingsContext();

  return (
    <RadioGroup name="themeDirection" value={themeDirection} onChange={onChangeDirection}>
      <StyledWrap>
        {OPTIONS.map((direction) => (
          <StyledCard key={direction} selected={themeDirection === direction}>
      

            <MaskControl value={direction} />
          </StyledCard>
        ))}
      </StyledWrap>
    </RadioGroup>
  );
}
