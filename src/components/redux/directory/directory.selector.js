import { createSelector } from 'reselect';

const directorySelector = state => state.directory;

export const directorySectionSelector = createSelector(
  [directorySelector],
  directory => directory.sections
);
