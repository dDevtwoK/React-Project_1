import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { directorySectionSelector } from '../redux/directory/directory.selector';
import { DirectoryMenu } from './directory.styled';

const Directory = ({ sections }) => (
  <DirectoryMenu>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  sections: directorySectionSelector,
});

export default connect(mapStateToProps)(Directory);
