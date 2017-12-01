import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import PlusIcon from 'react-icons/lib/md/add';
import RemoveIcon from 'react-icons/lib/fa/trash-o';
import { Button } from '@buttercup/ui';
import styles from '../../styles/entry-form';
import Input from './entry-input';

const renderMeta = (
  { fields, meta: { touched, error } } // eslint-disable-line react/prop-types
) => (
  <div>
    <div className={styles.metaWrapper}>
      {fields.map((member, index) => (
        <div key={index}>
          <div className={styles.labelWrapper}>
            <Field
              name={`${member}.key`}
              type="text"
              component="input"
              placeholder="Give a Heading.."
            />
          </div>
          <div className={styles.textWrapper}>
          <Field
            name={`${member}.value`}
            type="text"
            component="textarea"            
            placeholder="Start Writing...."
          />
          </div>
        </div>
      ))}
    </div>
    <Button
      onClick={e => {
        fields.push({});
        e.stopPropagation();
        e.preventDefault();
      }}
      icon={<PlusIcon />}
    >
      Start new section
    </Button>
    {touched && error && <span>{error}</span>}
  </div>
);


class EntryForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} id="saveform">
        <div className={styles.formRow}>
          <label className={styles.labelWrapper} htmlFor="properties.title">
            date
          </label>
          <Field
            name="properties.title"
            component={Input}
            type="text"
            placeholder="if left blank today's date will be used..."
          />
        </div>

        <div className={styles.hideDiv}>
        <div className={styles.formRow}>
          <label className={styles.labelWrapper} htmlFor="properties.username">
            Username
          </label>
          <Field
            name="properties.username"
            component={Input}
            type="text"
            placeholder="@username..."
          />
        </div>
        <div className={styles.formRow}>
          <label className={styles.labelWrapper} htmlFor="properties.password">
            Password
          </label>
          <Field
            name="properties.password"
            component={Input}
            type="password"
            placeholder="Secure password..."
          />
        </div>
        </div>


        <h6 className={styles.heading}></h6>
        <FieldArray name="meta" component={renderMeta} />
      </form>
    );
  }
}

EntryForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default EntryForm;
