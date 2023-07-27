import {Text} from 'react-native';
import React, {ReactNode} from 'react';

import {sectionTitleStyles} from './section-title.styles';

type SectionTitleProps = {
  children: ReactNode;
};

export const SectionTitle = ({children}: SectionTitleProps) => (
  <Text style={sectionTitleStyles.text}>{children}</Text>
);
