import { RingProgress, Text } from '@mantine/core';

import styles from './TotalCapacityWidget.module.scss';

type TotalCapacityWidgetProps = {
  size: number;
  thickness?: number;
  textSize?: string;
  value: number;
};

const WIDGET_COLORS = {
  empty: '#4a86ff',
  medium: '#0754ed',
  stacked: 'darkblue',
};

const getWidgetColor = (value: number) => {
  if (value < 35) return WIDGET_COLORS.empty;
  if (value < 85) return WIDGET_COLORS.medium;
  return WIDGET_COLORS.stacked;
};

export const TotalCapacityWidget = ({
  size,
  thickness,
  textSize,
  value,
}: TotalCapacityWidgetProps) => {
  return (
    <div className={styles['widget']}>
      <RingProgress
        className={styles['ring']}
        size={size}
        thickness={thickness}
        label={
          <Text
            size={textSize}
            color="darkblue"
            weight={700}
            align="center"
            style={{ fontSize: textSize }}
          >
            {value}%
          </Text>
        }
        sections={[{ value: value, color: getWidgetColor(value) }]}
      />
    </div>
  );
};
