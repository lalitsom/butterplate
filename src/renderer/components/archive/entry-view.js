import PropTypes from 'prop-types';
import React from 'react';
import {
  formRow,
  metaWrapper,
  heading,
  labelWrapper
} from '../../styles/entry-form';
import { wrapper as inputWrapper } from '../../styles/entry-input';
import bubbleImage from '../../styles/img/info-bubble.svg';
import EmptyView from '../empty-view';
import Copyable from './copyable';
import styles from '../../styles/entry-form';

const EntryView = ({ entry }) => (
  <div>
    {['title'].map(key => (
      <div className={formRow} key={key}>
        <div className={labelWrapper}>{'date'}</div>
        <div className={inputWrapper}>
          <Copyable type={key}>{entry.properties[key]}</Copyable>
        </div>
      </div>
    ))}
    <h6 className={heading}></h6>
    {entry.meta.length > 0 ? (
      <div className={metaWrapper}>
        {entry.meta.map(meta => (
          <div  key={meta.key}>
            <div className={styles.labelWrapperhead}>{meta.key}</div>
            <div className={inputWrapper}>
              <p>{meta.value}</p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <EmptyView
        caption="Nothing to show."
        imageSrc={bubbleImage}
      />
    )}
  </div>
);

EntryView.propTypes = {
  entry: PropTypes.object
};

export default EntryView;
