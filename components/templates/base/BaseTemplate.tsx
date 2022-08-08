import React from 'react';
import styles from './BaseTemplate.module.css';

export interface BaseTemplateInterface {
  sampleText: string;
}

const BaseTemplate: React.FC<BaseTemplateInterface> = ({ sampleText }) => {
  return <div className={styles.container}>{sampleText}</div>;
};

export default BaseTemplate;
