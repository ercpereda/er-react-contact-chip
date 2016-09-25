import React from 'react';
import styles from './ContactChip.css';

const ContactChip = props => (
  <div className={styles.chip}>
    <img className={styles.avatar} src={props.img} alt="Person" width="96" height="96" />
    {props.name}
    <span className={styles.closebtn}>&times;</span>
  </div>
);

ContactChip.propTypes = {
  name: React.PropTypes.string,
  img: React.PropTypes.string
};

export default ContactChip;
